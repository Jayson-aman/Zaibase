import type { Figure } from './figures';

// 中学受験社会 拡張ユニットII「地理：農業・水産業」（shakai_s036〜s075）専用の図解データ。
// lessons-shakai-ext02.ts の各Lessonのsections[].figureIdから参照される。
// 数値はいずれも教科書レベルの「およその値」で、本文中の記述と一致させている。
export const lessonFigsShakaiExt02: Record<string, Figure> = {
  // ---------- 稲作 ----------
  // s036: 米づくりの作業ごよみ。棒の高さが「その作業を行う月」を表す。
  sext02_036: {
    kind: 'barChart',
    xLabel: '米づくりの作業',
    yLabel: '作業を行う月',
    yMax: 12,
    bars: [
      { label: '田おこし', value: 4 },
      { label: 'しろかき', value: 5 },
      { label: '田植え', value: 5, color: '#22C55E' },
      { label: '中干し', value: 7 },
      { label: '稲かり', value: 9, color: '#F59E0B' },
    ],
    caption: '田おこし→しろかき→田植え→中干し→稲かりの順。田植え（5月）から稲かり（9月）までおよそ4か月',
  },

  // s037: 米の生産量が多い都道府県（およその年間生産量）。
  sext02_037: {
    kind: 'barChart',
    xLabel: '都道府県',
    yLabel: '米の生産量（万t）',
    yMax: 70,
    bars: [
      { label: '新潟', value: 62, color: '#22C55E' },
      { label: '北海道', value: 57 },
      { label: '秋田', value: 46 },
      { label: '山形', value: 36 },
      { label: '宮城', value: 33 },
    ],
    caption: '上位は東北・北陸・北海道。1位は新潟県、2位は北海道（およその値）',
  },

  // s038: 米の品種別の作付割合。コシヒカリが全体のおよそ3分の1。
  sext02_038: {
    kind: 'pieChart',
    slices: [
      { label: 'コシヒカリ', value: 33, color: '#22C55E' },
      { label: 'ひとめぼれ', value: 9 },
      { label: 'ヒノヒカリ', value: 8 },
      { label: 'あきたこまち', value: 7 },
      { label: 'ななつぼし', value: 3 },
      { label: 'その他', value: 40 },
    ],
    caption: 'コシヒカリだけで全国の作付割合のおよそ3分の1をしめる（およその値）',
  },

  // s039: 10aあたりの米づくりの労働時間。機械化と耕地整理で約8分の1に。
  sext02_039: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: '10aあたりの労働時間（時間）',
    xRange: [1960, 2020],
    yRange: [0, 200],
    series: [
      {
        label: '労働時間',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 1960, y: 174 },
          { x: 1970, y: 118 },
          { x: 1980, y: 64 },
          { x: 1990, y: 44 },
          { x: 2000, y: 33 },
          { x: 2010, y: 26 },
          { x: 2020, y: 23 },
        ],
      },
    ],
    caption: '約174時間から約23時間へ。機械化（トラクター・田植え機・コンバイン）と耕地整理が理由',
  },

  // s040: 一人が1年間に食べる米の量。食生活の洋風化で半分以下に。
  sext02_040: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: '一人あたりの米の消費量（kg）',
    xRange: [1960, 2020],
    yRange: [0, 130],
    series: [
      {
        label: '米の消費量',
        color: '#F59E0B',
        markers: true,
        points: [
          { x: 1960, y: 115 },
          { x: 1970, y: 95 },
          { x: 1980, y: 78 },
          { x: 1990, y: 70 },
          { x: 2000, y: 65 },
          { x: 2010, y: 59 },
          { x: 2020, y: 51 },
        ],
      },
    ],
    caption: '約115kgから約51kgへ半分以下に。米が余り、生産調整（減反）と転作が行われた',
  },

  // s041: 主な稲作地帯の位置。
  sext02_041: {
    kind: 'japanMap',
    markers: [
      { x: 226, y: 88, label: '石狩平野' },
      { x: 192, y: 145, label: '秋田平野' },
      { x: 185, y: 168, label: '庄内平野' },
      { x: 172, y: 186, label: '越後平野' },
      { x: 211, y: 172, label: '仙台平野' },
    ],
    caption: '米どころは日本海側と北海道に集中する（石狩川・雄物川・最上川・信濃川）',
  },

  // ---------- 畑作・促成栽培・抑制栽培 ----------
  // s042: 近郊農業の代表。ほうれんそうの産地は関東地方に集中。
  sext02_042: {
    kind: 'barChart',
    xLabel: '都道府県',
    yLabel: 'ほうれんそうの生産量（万t）',
    yMax: 3,
    bars: [
      { label: '埼玉', value: 2.3, color: '#22C55E' },
      { label: '群馬', value: 2.2 },
      { label: '千葉', value: 1.9 },
      { label: '茨城', value: 1.7 },
      { label: '宮崎', value: 1.5 },
    ],
    caption: 'いたみやすい葉物野菜は大消費地に近い関東地方が上位（およその値）',
  },

  // s043: 促成栽培の代表品目。宮崎・高知・鹿児島など暖かい地方が上位に入る。
  sext02_043: {
    kind: 'barChart',
    xLabel: '都道府県',
    yLabel: 'ピーマンの生産量（万t）',
    yMax: 4,
    bars: [
      { label: '茨城', value: 3.4 },
      { label: '宮崎', value: 2.7, color: '#F59E0B' },
      { label: '高知', value: 1.3, color: '#F59E0B' },
      { label: '鹿児島', value: 1.2, color: '#F59E0B' },
      { label: '岩手', value: 0.9 },
    ],
    caption: 'オレンジは促成栽培がさかんな暖かい地方。冬〜春のピーマンの多くはこれらの県から（およその値）',
  },

  // s044: 抑制栽培（高原野菜）の代表品目。長野県が全国のおよそ3分の1。
  sext02_044: {
    kind: 'barChart',
    xLabel: '都道府県',
    yLabel: 'レタスの生産量（万t）',
    yMax: 20,
    bars: [
      { label: '長野', value: 18, color: '#22C55E' },
      { label: '茨城', value: 9 },
      { label: '群馬', value: 5.5, color: '#22C55E' },
      { label: '長崎', value: 3.6 },
      { label: '兵庫', value: 3 },
    ],
    caption: '緑は高原の抑制栽培がさかんな県（野辺山原・嬬恋村）。長野県が全国のおよそ3分の1（およその値）',
  },

  // s045: キャベツは群馬（夏の高原）と愛知（冬の平地）の2強。
  sext02_045: {
    kind: 'barChart',
    xLabel: '都道府県',
    yLabel: 'キャベツの生産量（万t）',
    yMax: 32,
    bars: [
      { label: '群馬', value: 29, color: '#22C55E' },
      { label: '愛知', value: 27, color: '#F59E0B' },
      { label: '千葉', value: 12 },
      { label: '茨城', value: 11 },
      { label: '長野', value: 7 },
    ],
    caption: '緑＝夏に出荷する群馬（嬬恋村）、オレンジ＝冬に出荷する愛知（渥美半島）（およその値）',
  },

  // s046: じゃがいもは北海道がおよそ8割。十勝平野の輪作作物のひとつ。
  sext02_046: {
    kind: 'pieChart',
    slices: [
      { label: '北海道', value: 78, color: '#22C55E' },
      { label: '鹿児島', value: 4 },
      { label: '長崎', value: 4 },
      { label: 'その他', value: 14 },
    ],
    caption: 'じゃがいもは全国のおよそ8割が北海道産。てんさい・あずきはほぼ100%が北海道産',
  },

  // s047: 施設園芸の代表、菊の出荷量。1位は愛知県、2位は沖縄県。
  sext02_047: {
    kind: 'barChart',
    xLabel: '都道府県',
    yLabel: '菊の出荷量（億本）',
    yMax: 5,
    bars: [
      { label: '愛知', value: 4.4, color: '#22C55E' },
      { label: '沖縄', value: 2.4 },
      { label: '福岡', value: 0.6 },
      { label: '鹿児島', value: 0.6 },
    ],
    caption: '電照菊は夜に電灯を当てて開花を遅らせ、値段の高い時期に出荷する（およその値）',
  },

  // ---------- 果樹 ----------
  // s048: 主な果樹地帯の位置（扇状地・盆地・日当たりのよい斜面）。
  sext02_048: {
    kind: 'japanMap',
    markers: [
      { x: 198, y: 124, label: '津軽平野' },
      { x: 163, y: 206, label: '長野盆地' },
      { x: 170, y: 224, label: '甲府盆地' },
      { x: 124, y: 257, label: '有田' },
      { x: 78, y: 264, label: '宇和海' },
    ],
    caption: 'りんご＝涼しい北、みかん＝暖かい南西の斜面、ぶどう・もも＝盆地の扇状地',
  },

  // s049: りんごは青森が全国のおよそ6割。
  sext02_049: {
    kind: 'barChart',
    xLabel: '都道府県',
    yLabel: 'りんごの生産量（万t）',
    yMax: 50,
    bars: [
      { label: '青森', value: 44, color: '#EF4444' },
      { label: '長野', value: 13 },
      { label: '岩手', value: 4.7 },
      { label: '山形', value: 4.2 },
      { label: '福島', value: 2.4 },
    ],
    caption: '青森県だけで全国のおよそ6割、長野県と合わせておよそ8割（およその値）',
  },

  // s050: みかんは和歌山・愛媛・静岡の順。暖かい地方の果樹。
  sext02_050: {
    kind: 'barChart',
    xLabel: '都道府県',
    yLabel: 'みかんの生産量（万t）',
    yMax: 18,
    bars: [
      { label: '和歌山', value: 15, color: '#F59E0B' },
      { label: '愛媛', value: 11 },
      { label: '静岡', value: 10 },
      { label: '熊本', value: 9 },
      { label: '長崎', value: 5 },
    ],
    caption: '上位はすべて暖かい西日本と静岡県。海に近い日当たりのよい斜面でつくられる（およその値）',
  },

  // s051: ぶどうは山梨が1位、長野が2位。
  sext02_051: {
    kind: 'barChart',
    xLabel: '都道府県',
    yLabel: 'ぶどうの生産量（万t）',
    yMax: 5,
    bars: [
      { label: '山梨', value: 4.1, color: '#8B5CF6' },
      { label: '長野', value: 2.9 },
      { label: '岡山', value: 1.6 },
      { label: '山形', value: 1.5 },
      { label: '福岡', value: 0.7 },
    ],
    caption: '甲府盆地の扇状地は水はけがよく、昼夜の気温差も大きい（およその値）',
  },

  // s051b: ももも山梨が1位、福島が2位。
  sext02_051b: {
    kind: 'barChart',
    xLabel: '都道府県',
    yLabel: 'ももの生産量（万t）',
    yMax: 4,
    bars: [
      { label: '山梨', value: 3.5, color: '#EC4899' },
      { label: '福島', value: 2.5 },
      { label: '長野', value: 1.1 },
      { label: '山形', value: 0.9 },
      { label: '和歌山', value: 0.8 },
    ],
    caption: '山梨県はぶどう・ももの両方で全国1位（およその値）',
  },

  // s052: さくらんぼ（おうとう）は山形が全国のおよそ7割。
  sext02_052: {
    kind: 'pieChart',
    slices: [
      { label: '山形', value: 70, color: '#EF4444' },
      { label: '北海道', value: 9 },
      { label: '山梨', value: 6 },
      { label: 'その他', value: 15 },
    ],
    caption: '収穫期の6月に雨が少なく、昼夜の気温差が大きい山形盆地が適地（およその値）',
  },

  // ---------- 畜産 ----------
  // s053: 主な家畜の飼育頭数。豚が最も多い。
  sext02_053: {
    kind: 'barChart',
    xLabel: '家畜の種類',
    yLabel: '全国の飼育頭数（万頭）',
    yMax: 1000,
    bars: [
      { label: '乳牛', value: 135 },
      { label: '肉牛', value: 261 },
      { label: '豚', value: 895, color: '#EC4899' },
    ],
    caption: '豚＞肉牛＞乳牛の順。にわとりはさらに多く、採卵鶏約1億8千万羽・ブロイラー約1億4千万羽',
  },

  // s054: 乳牛は北海道におよそ6割が集中。
  sext02_054: {
    kind: 'pieChart',
    slices: [
      { label: '北海道', value: 61, color: '#0EA5E9' },
      { label: '栃木', value: 4 },
      { label: '熊本', value: 3 },
      { label: '岩手', value: 3 },
      { label: '群馬', value: 3 },
      { label: 'その他', value: 26 },
    ],
    caption: '乳牛は暑さに弱いため涼しい北海道に集中。関東の栃木・群馬は大消費地に近い産地',
  },

  // s055: 肉牛は北海道が1位だが、乳牛ほど集中していない。
  sext02_055: {
    kind: 'barChart',
    xLabel: '都道府県',
    yLabel: '肉牛の飼育頭数（万頭）',
    yMax: 60,
    bars: [
      { label: '北海道', value: 55, color: '#0EA5E9' },
      { label: '鹿児島', value: 34, color: '#F59E0B' },
      { label: '宮崎', value: 25, color: '#F59E0B' },
      { label: '熊本', value: 14 },
      { label: '岩手', value: 9 },
    ],
    caption: 'オレンジは南九州（シラス台地）の産地。乳牛ほど北海道に集中していない（およその値）',
  },

  // s056: 豚は鹿児島が1位。関東（群馬・千葉）は大消費地に近い産地。
  sext02_056: {
    kind: 'barChart',
    xLabel: '都道府県',
    yLabel: '豚の飼育頭数（万頭）',
    yMax: 130,
    bars: [
      { label: '鹿児島', value: 120, color: '#EC4899' },
      { label: '宮崎', value: 80 },
      { label: '北海道', value: 73 },
      { label: '群馬', value: 61 },
      { label: '千葉', value: 58 },
    ],
    caption: '南九州はシラス台地、群馬・千葉は大消費地に近いことをいかした産地（およその値）',
  },

  // s056b: ブロイラーは鹿児島・宮崎・岩手が上位（冷凍で運べるため消費地から遠くてよい）。
  sext02_056b: {
    kind: 'barChart',
    xLabel: '都道府県',
    yLabel: 'ブロイラーの飼育羽数（万羽）',
    yMax: 3200,
    bars: [
      { label: '鹿児島', value: 2900, color: '#F59E0B' },
      { label: '宮崎', value: 2800 },
      { label: '岩手', value: 2200 },
      { label: '青森', value: 800 },
      { label: '北海道', value: 500 },
    ],
    caption: '肉は冷凍・冷蔵で運べるため遠い県が上位。いたみやすい卵は茨城・千葉など消費地の近くが上位',
  },

  // s057: 畜産物の自給率。飼料の分を除くと大きく下がる（※印）。
  sext02_057: {
    kind: 'barChart',
    xLabel: '畜産物（※＝飼料の分を除いた値）',
    yLabel: '自給率（%）',
    yMax: 100,
    bars: [
      { label: '鶏卵', value: 97, color: '#22C55E' },
      { label: '鶏卵※', value: 13, color: '#EF4444' },
      { label: '牛乳', value: 61, color: '#22C55E' },
      { label: '牛乳※', value: 27, color: '#EF4444' },
      { label: '肉類', value: 53, color: '#22C55E' },
      { label: '肉類※', value: 8, color: '#EF4444' },
    ],
    caption: 'えさの多くを輸入にたよるため、飼料の分を除くと自給率は大きく下がる（およその値）',
  },

  // ---------- 農業の課題・食料自給率 ----------
  // s058: 農業を仕事の中心にしている人の年齢構成。約7割が65歳以上。
  sext02_058: {
    kind: 'pieChart',
    slices: [
      { label: '65歳以上', value: 70, color: '#EF4444' },
      { label: '50〜64歳', value: 17 },
      { label: '49歳以下', value: 13 },
    ],
    caption: 'およそ7割が65歳以上。後継者不足から耕作放棄地（全国約40万ha）が増えている',
  },

  // s059: カロリーベースの食料自給率の移り変わり。
  sext02_059: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: 'カロリーベース食料自給率（%）',
    xRange: [1960, 2020],
    yRange: [0, 100],
    series: [
      {
        label: 'カロリーベース自給率',
        color: '#EF4444',
        markers: true,
        points: [
          { x: 1960, y: 79 },
          { x: 1970, y: 60 },
          { x: 1980, y: 53 },
          { x: 1990, y: 48 },
          { x: 2000, y: 40 },
          { x: 2010, y: 39 },
          { x: 2020, y: 38 },
        ],
      },
    ],
    caption: '約79%から約38%へ。生産額ベースで計算するとおよそ6割で、数字が大きく異なる',
  },

  // s060: 品目別の自給率。米・野菜は高く、小麦・大豆は極端に低い。
  sext02_060: {
    kind: 'barChart',
    xLabel: '品目',
    yLabel: '自給率（%）',
    yMax: 100,
    bars: [
      { label: '米', value: 98, color: '#22C55E' },
      { label: '野菜', value: 80, color: '#22C55E' },
      { label: '魚介類', value: 55 },
      { label: '肉類', value: 53 },
      { label: '果実', value: 38 },
      { label: '小麦', value: 15, color: '#EF4444' },
      { label: '大豆', value: 6, color: '#EF4444' },
    ],
    caption: '国内でつくりやすい米・野菜は高く、広い農地が必要な小麦・大豆は極端に低い（およその値）',
  },

  // s060b: 主な国のカロリーベース食料自給率。100%超は食料輸出国。
  sext02_060b: {
    kind: 'barChart',
    xLabel: '国',
    yLabel: 'カロリーベース食料自給率（%）',
    yMax: 240,
    bars: [
      { label: 'カナダ', value: 220 },
      { label: '豪州', value: 170 },
      { label: 'フランス', value: 120 },
      { label: 'アメリカ', value: 115 },
      { label: 'ドイツ', value: 85 },
      { label: 'イギリス', value: 55 },
      { label: '日本', value: 38, color: '#EF4444' },
    ],
    caption: '100%をこえる国は食料を輸出している国。日本は主要国の中でも最低水準（およその値）',
  },

  // s061: 耕地面積の減少。宅地への転用と耕作放棄が原因。
  sext02_061: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: '耕地面積（万ha）',
    xRange: [1960, 2020],
    yRange: [0, 700],
    series: [
      {
        label: '耕地面積',
        color: '#22C55E',
        markers: true,
        points: [
          { x: 1960, y: 607 },
          { x: 1970, y: 580 },
          { x: 1980, y: 546 },
          { x: 1990, y: 524 },
          { x: 2000, y: 483 },
          { x: 2010, y: 459 },
          { x: 2020, y: 437 },
        ],
      },
    ],
    caption: '約607万haから約430万haへ。地産地消・6次産業化・スマート農業が課題への対策',
  },

  // ---------- 漁業 ----------
  // s062: 漁業種類別の生産量の移り変わり（遠洋・沖合・沿岸・海面養殖）。
  sext02_062: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: '生産量（万t）',
    xRange: [1970, 2020],
    yRange: [0, 750],
    series: [
      {
        label: '遠洋漁業',
        color: '#EF4444',
        markers: true,
        points: [
          { x: 1970, y: 343 },
          { x: 1980, y: 217 },
          { x: 1990, y: 150 },
          { x: 2000, y: 85 },
          { x: 2010, y: 48 },
          { x: 2020, y: 30 },
        ],
      },
      {
        label: '沖合漁業',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 1970, y: 328 },
          { x: 1980, y: 570 },
          { x: 1985, y: 700 },
          { x: 1990, y: 610 },
          { x: 2000, y: 259 },
          { x: 2010, y: 236 },
          { x: 2020, y: 205 },
        ],
      },
      {
        label: '沿岸漁業',
        color: '#22C55E',
        markers: true,
        points: [
          { x: 1970, y: 189 },
          { x: 1980, y: 205 },
          { x: 1990, y: 199 },
          { x: 2000, y: 158 },
          { x: 2010, y: 129 },
          { x: 2020, y: 90 },
        ],
      },
      {
        label: '海面養殖業',
        color: '#F59E0B',
        markers: true,
        points: [
          { x: 1970, y: 55 },
          { x: 1980, y: 99 },
          { x: 1990, y: 127 },
          { x: 2000, y: 123 },
          { x: 2010, y: 111 },
          { x: 2020, y: 97 },
        ],
      },
    ],
    caption: '1970年代に急減する赤＝遠洋漁業、1980年代に山をつくる青＝沖合漁業。養殖はほぼ横ばい',
  },

  // s063: 遠洋漁業だけを取り出したグラフ。200海里と石油危機で急減。
  sext02_063: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: '遠洋漁業の生産量（万t）',
    xRange: [1970, 2020],
    yRange: [0, 400],
    series: [
      {
        label: '遠洋漁業',
        color: '#EF4444',
        markers: true,
        points: [
          { x: 1970, y: 343 },
          { x: 1975, y: 330 },
          { x: 1980, y: 217 },
          { x: 1990, y: 150 },
          { x: 2000, y: 85 },
          { x: 2010, y: 48 },
          { x: 2020, y: 30 },
        ],
      },
    ],
    caption: '1973年の石油危機と1970年代後半の200海里水域の設定で急減。ピークのおよそ10分の1に',
  },

  // s064: 沖合漁業でとれる主な魚。さんまは近年きわめて少ない。
  sext02_064: {
    kind: 'barChart',
    xLabel: '魚の種類',
    yLabel: '漁獲量（万t）',
    yMax: 70,
    bars: [
      { label: 'まいわし', value: 64, color: '#0EA5E9' },
      { label: 'さば類', value: 44 },
      { label: 'かつお', value: 24 },
      { label: 'すけとうだら', value: 17 },
      { label: 'さんま', value: 2, color: '#EF4444' },
    ],
    caption: 'いわし・さばが中心。かつて大量にとれたさんまは海水温の上昇などで激減（およその値）',
  },

  // s065: 主な漁港の位置。
  sext02_065: {
    kind: 'japanMap',
    markers: [
      { x: 258, y: 82, label: '釧路' },
      { x: 208, y: 124, label: '八戸' },
      { x: 198, y: 222, label: '銚子' },
      { x: 167, y: 237, label: '焼津' },
      { x: 94, y: 228, label: '境港' },
    ],
    caption: '銚子＝千葉、焼津＝静岡、釧路＝北海道、境港＝鳥取、八戸＝青森。太平洋側に大きな漁港が多い',
  },

  // s066: 海流と潮目・大陸だなのおおよその位置。
  sext02_066: {
    kind: 'japanMap',
    markers: [
      { x: 228, y: 133, label: '親潮（寒流）' },
      { x: 224, y: 165, label: '潮目（三陸沖）' },
      { x: 152, y: 272, label: '黒潮（暖流）' },
      { x: 68, y: 218, label: '対馬海流' },
      { x: 30, y: 292, label: '大陸だな' },
    ],
    caption: '暖流と寒流がぶつかる潮目と、水深200mまでの大陸だなが 豊かな漁場をつくる',
  },

  // s067: かき類の収獲量。広島が全国のおよそ6割。
  sext02_067: {
    kind: 'barChart',
    xLabel: '都道府県',
    yLabel: 'かき類の収獲量（万t）',
    yMax: 11,
    bars: [
      { label: '広島', value: 9.7, color: '#0EA5E9' },
      { label: '宮城', value: 1.9 },
      { label: '岡山', value: 1.5 },
      { label: '兵庫', value: 0.9 },
      { label: '岩手', value: 0.6 },
    ],
    caption: '広島湾は波がおだやかで太田川から栄養分が流れこむため、かきの養殖に適する（およその値）',
  },

  // s068: 海面養殖業の主な魚種の生産量。中心は海そう・貝類。
  sext02_068: {
    kind: 'barChart',
    xLabel: '養殖の品目',
    yLabel: '生産量（万t）',
    yMax: 32,
    bars: [
      { label: 'のり類', value: 29, color: '#22C55E' },
      { label: 'ほたて貝', value: 17 },
      { label: 'かき類', value: 16 },
      { label: 'ぶり類', value: 14 },
      { label: 'まだい', value: 7 },
    ],
    caption: '養殖の中心はのり・ほたて・かき。栽培漁業（さけ・ひらめ）は放流してからとる点がちがう',
  },

  // s069: リアス海岸と主な養殖地。
  sext02_069: {
    kind: 'japanMap',
    markers: [
      { x: 218, y: 158, label: '三陸海岸' },
      { x: 128, y: 214, label: '若狭湾' },
      { x: 141, y: 252, label: '英虞湾' },
      { x: 77, y: 264, label: '宇和海' },
    ],
    caption: 'リアス海岸は波がおだやかで水深も深く養殖に適するが、津波の被害は大きくなりやすい',
  },

  // s070: 海面の漁業・養殖業の生産量にしめる割合。
  sext02_070: {
    kind: 'pieChart',
    slices: [
      { label: '沖合漁業', value: 49, color: '#0EA5E9' },
      { label: '海面養殖業', value: 23, color: '#F59E0B' },
      { label: '沿岸漁業', value: 21, color: '#22C55E' },
      { label: '遠洋漁業', value: 7, color: '#EF4444' },
    ],
    caption: '養殖業は全体のおよそ4分の1をしめ、沿岸漁業を上回る。「とる漁業」から「育てる漁業」へ',
  },

  // s071: 漁業・養殖業の生産量の移り変わり。1984年ごろがピーク。
  sext02_071: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: '漁業・養殖業の生産量（万t）',
    xRange: [1970, 2020],
    yRange: [0, 1400],
    series: [
      {
        label: '生産量',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 1970, y: 930 },
          { x: 1980, y: 1112 },
          { x: 1985, y: 1280 },
          { x: 1990, y: 1105 },
          { x: 2000, y: 638 },
          { x: 2010, y: 531 },
          { x: 2020, y: 423 },
        ],
      },
    ],
    caption: '1984年ごろの約1,280万tがピークで、現在はおよそ3分の1。TAC制度などで資源を管理する',
  },

  // s072: 魚介類の自給率の移り変わり。
  sext02_072: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: '魚介類の自給率（%）',
    xRange: [1965, 2020],
    yRange: [0, 120],
    series: [
      {
        label: '魚介類の自給率',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 1965, y: 100 },
          { x: 1975, y: 99 },
          { x: 1985, y: 93 },
          { x: 1995, y: 57 },
          { x: 2000, y: 53 },
          { x: 2010, y: 55 },
          { x: 2020, y: 55 },
        ],
      },
    ],
    caption: 'ほぼ100%だった自給率は1990年代に大きく下がり、現在は5割台。えびやさけを多く輸入している',
  },

  // s073: さんまの漁獲量の激減。海の環境変化を示す代表例。
  sext02_073: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: 'さんまの漁獲量（万t）',
    xRange: [2008, 2022],
    yRange: [0, 40],
    series: [
      {
        label: 'さんまの漁獲量',
        color: '#EF4444',
        markers: true,
        points: [
          { x: 2008, y: 35 },
          { x: 2012, y: 22 },
          { x: 2014, y: 23 },
          { x: 2018, y: 13 },
          { x: 2020, y: 3 },
          { x: 2022, y: 2 },
        ],
      },
    ],
    caption: '10年余りで10分の1以下に。海水温の上昇で回遊コースが変わったことが大きな原因',
  },

  // s074: 入試実戦。農業産出額の内訳から道県を特定する（答えは北海道）。
  sext02_074: {
    kind: 'pieChart',
    slices: [
      { label: '畜産', value: 57, color: '#0EA5E9' },
      { label: '野菜', value: 17 },
      { label: '米', value: 9 },
      { label: 'その他（麦・豆・いも）', value: 17 },
    ],
    caption: '畜産が半分以上で、麦・豆・いも類の割合も大きい → 北海道（およその値）',
  },

  // s075: 総整理。代表産地の位置をまとめて確認する。
  sext02_075: {
    kind: 'japanMap',
    markers: [
      { x: 240, y: 80, label: '北海道 酪農' },
      { x: 203, y: 124, label: '青森 りんご' },
      { x: 162, y: 210, label: '長野 抑制栽培' },
      { x: 170, y: 226, label: '山梨 ぶどう' },
      { x: 124, y: 257, label: '和歌山 みかん' },
      { x: 90, y: 269, label: '高知 促成栽培' },
      { x: 47, y: 296, label: '鹿児島 畜産' },
    ],
    caption: '促成栽培（暖かい高知・宮崎）と抑制栽培（涼しい長野・群馬）の位置のちがいを確認する',
  },
};
