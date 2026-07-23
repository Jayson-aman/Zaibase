/**
 * 日本の山脈・山地・河川データ（地理マップ「⛰️ 山と川」レイヤー用）
 *
 * SVGパスは data/geographyRegions.ts と同じ viewBox（0 0 300 420）座標系。
 * 山脈はギザギザの尾根線、河川はなめらかな青い線で描く。
 * 内容は小学生〜中学受験レベルで、スーパーや旅行で見聞きする地名と結びつくよう
 * 具体的な標高・長さ・別名（三大暴れ川など）を添える。
 */

export type MountainRange = {
  id: string;
  name: string;
  reading: string;
  kind: '山脈' | '山地' | '高地';
  highestPeak: string;
  heightM: number;
  region: string;
  note: string;
  /** ギザギザの尾根線（viewBox 0 0 300 420） */
  path: string;
  labelX: number;
  labelY: number;
};

export type River = {
  id: string;
  name: string;
  reading: string;
  lengthKm: number;
  rank?: string; // 「日本一長い」など
  nickname?: string; // 「坂東太郎」など
  plain: string; // つくる平野
  mouth: string; // 河口・そそぐ海
  note: string;
  /** 川の流れ（viewBox 0 0 300 420） */
  path: string;
  labelX: number;
  labelY: number;
};

/** 主要な山脈・山地（北から南へ） */
export const mountainRanges: MountainRange[] = [
  {
    id: 'hidaka',
    name: '日高山脈',
    reading: 'ひだかさんみゃく',
    kind: '山脈',
    highestPeak: '幌尻岳（ぽろしりだけ）',
    heightM: 2052,
    region: '北海道',
    note: '北海道の中央から南へのびる山脈。手つかずの自然が残り、国立公園に指定されている。',
    path: 'M 233.4 78.3 L 235.6 91.6 L 234.1 103',
    labelX: 234.4, labelY: 85,
  },
  {
    id: 'ou',
    name: '奥羽山脈',
    reading: 'おううさんみゃく',
    kind: '山脈',
    highestPeak: '岩手山（いわてさん）',
    heightM: 2038,
    region: '東北',
    note: '東北地方を南北につらぬく、日本でいちばん長い山脈（約500km）。太平洋側と日本海側で気候を分ける。',
    path: 'M 202.7 133.4 L 202 148.6 L 198.2 163.8 L 196 178.9',
    labelX: 199.7, labelY: 150.2,
  },
  {
    id: 'echigo',
    name: '越後山脈',
    reading: 'えちごさんみゃく',
    kind: '山脈',
    highestPeak: '越後駒ヶ岳',
    heightM: 2003,
    region: '東北・関東の境',
    note: '新潟県と福島・群馬県の境にそびえる。冬は日本有数の豪雪地帯で、スキー場が多い。',
    path: 'M 180.3 194.1 L 176.5 201.7 L 174.3 205.5',
    labelX: 177, labelY: 194.5,
  },
  {
    id: 'hida',
    name: '飛騨山脈（北アルプス）',
    reading: 'ひださんみゃく',
    kind: '山脈',
    highestPeak: '奥穂高岳（おくほたかだけ）',
    heightM: 3190,
    region: '中部',
    note: '「日本アルプス」の一つ。3000m級の山が連なり「日本の屋根」とよばれる。立山・槍ヶ岳が有名。',
    path: 'M 155.6 205.5 L 155.1 211.2 L 156.3 216.9',
    labelX: 146, labelY: 205,
  },
  {
    id: 'kiso',
    name: '木曽山脈（中央アルプス）',
    reading: 'きそさんみゃく',
    kind: '山脈',
    highestPeak: '木曽駒ヶ岳（きそこまがたけ）',
    heightM: 2956,
    region: '中部',
    note: '日本アルプスの一つ。飛騨山脈と赤石山脈にはさまれた細長い山脈。',
    path: 'M 158.6 217.9 L 158.3 224.5',
    labelX: 158.4, labelY: 229,
  },
  {
    id: 'akaishi',
    name: '赤石山脈（南アルプス）',
    reading: 'あかいしさんみゃく',
    kind: '山脈',
    highestPeak: '北岳（きただけ）',
    heightM: 3193,
    region: '中部',
    note: '日本アルプスの一つ。最高峰の北岳は、富士山に次ぐ日本で2番目に高い山。',
    path: 'M 164.6 217.9 L 163.8 226.4',
    labelX: 172, labelY: 222,
  },
  {
    id: 'chugoku',
    name: '中国山地',
    reading: 'ちゅうごくさんち',
    kind: '山地',
    highestPeak: '大山（だいせん）',
    heightM: 1729,
    region: '中国',
    note: '中国地方を東西に走る、なだらかな山地。日本海側（山陰）と瀬戸内側（山陽）を分ける。',
    path: 'M 107 230.2 L 93.5 231.2 L 80 235.9 L 66.6 240.7',
    labelX: 86.8, labelY: 228.5,
  },
  {
    id: 'shikoku',
    name: '四国山地',
    reading: 'しこくさんち',
    kind: '山地',
    highestPeak: '石鎚山（いしづちさん）',
    heightM: 1982,
    region: '四国',
    note: '四国を東西に走る険しい山地。石鎚山は西日本でいちばん高い山。南側は雨が多い。',
    path: 'M 101 256.8 L 92 258.7 L 84.5 258.7',
    labelX: 92.5, labelY: 252.1,
  },
  {
    id: 'kyushu',
    name: '九州山地',
    reading: 'きゅうしゅうさんち',
    kind: '山地',
    highestPeak: '宮之浦岳（屋久島）',
    heightM: 1936,
    region: '九州',
    note: '九州の中央部に広がる山地。阿蘇山（世界最大級のカルデラ）や桜島など火山が多い。',
    path: 'M 59.1 273.9 L 56.1 283.4 L 54.6 291.9',
    labelX: 44, labelY: 285,
  },
];

/** 主要な河川（長さ順） */
export const rivers: River[] = [
  {
    id: 'shinano',
    name: '信濃川',
    reading: 'しなのがわ',
    lengthKm: 367,
    rank: '日本一長い川',
    plain: '越後平野（新潟平野）',
    mouth: '日本海',
    note: '長野県では「千曲川（ちくまがわ）」とよばれ、新潟県に入ると「信濃川」になる。日本一長い川で、越後平野の米づくりを支える。',
    path: 'M 163.8 213.1 L 168.3 199.8 L 175.8 179.9',
    labelX: 158, labelY: 193.6,
  },
  {
    id: 'tone',
    name: '利根川',
    reading: 'とねがわ',
    lengthKm: 322,
    rank: '流域面積 日本一',
    nickname: '坂東太郎（ばんどうたろう）',
    plain: '関東平野',
    mouth: '太平洋（銚子）',
    note: '長さは日本2位だが、流域面積（雨水を集める広さ）は日本一。関東平野を流れて千葉県の銚子で太平洋にそそぐ。あばれ川として「坂東太郎」とよばれた。',
    path: 'M 175.8 201.7 L 187.8 215 L 203.5 222',
    labelX: 195, labelY: 206,
  },
  {
    id: 'ishikari',
    name: '石狩川',
    reading: 'いしかりがわ',
    lengthKm: 268,
    rank: '日本3位',
    plain: '石狩平野',
    mouth: '日本海',
    note: '北海道でいちばん長い川。石狩平野をつくり、札幌の近くを通って日本海にそそぐ。むかしは曲がりくねっていたが、まっすぐに直す工事が行われた。',
    path: 'M 235.6 74.5 L 226.7 69.8 L 216.2 78.3 L 210.5 79.3',
    labelX: 219, labelY: 71.5,
  },
  {
    id: 'kitakami',
    name: '北上川',
    reading: 'きたかみがわ',
    lengthKm: 249,
    rank: '東北で最長',
    plain: '仙台平野・北上盆地',
    mouth: '太平洋',
    note: '岩手県から宮城県へと南に流れる、東北地方でいちばん長い川。米どころの平野をうるおす。',
    path: 'M 207.2 142.9 L 208.7 160 L 210.2 171',
    labelX: 214, labelY: 153.9,
  },
  {
    id: 'kiso',
    name: '木曽川',
    reading: 'きそがわ',
    lengthKm: 229,
    plain: '濃尾平野（のうびへいや）',
    mouth: '伊勢湾',
    note: '長良川・揖斐川とあわせて「木曽三川（きそさんせん）」とよばれる。濃尾平野をつくり、洪水を防ぐ「輪中（わじゅう）」という集落が有名。',
    path: 'M 154.8 220.7 L 144.4 228.3 L 141.4 235',
    labelX: 143, labelY: 232,
  },
  {
    id: 'mogami',
    name: '最上川',
    reading: 'もがみがわ',
    lengthKm: 229,
    rank: '山形県を代表する川',
    plain: '庄内平野',
    mouth: '日本海',
    note: '山形県だけを流れる川で、日本三大急流の一つ。松尾芭蕉が俳句によんだことでも有名。庄内平野で米（はえぬき・つや姫）を育てる。',
    path: 'M 191.5 178.9 L 190.7 167.6 L 188.5 161.3',
    labelX: 194, labelY: 165.3,
  },
  {
    id: 'yoshino',
    name: '吉野川',
    reading: 'よしのがわ',
    lengthKm: 194,
    rank: '四国で最長',
    nickname: '四国三郎（しこくさぶろう）',
    plain: '徳島平野',
    mouth: '紀伊水道',
    note: '四国でいちばん長い川。あばれ川として「四国三郎」とよばれた。徳島平野をつくる。',
    path: 'M 99.5 256.8 L 104.7 254.9 L 109.9 253.6',
    labelX: 104.7, labelY: 262,
  },
  {
    id: 'chikugo',
    name: '筑後川',
    reading: 'ちくごがわ',
    lengthKm: 143,
    rank: '九州で最長',
    nickname: '筑紫二郎（つくしじろう）',
    plain: '筑紫平野（つくしへいや）',
    mouth: '有明海（ありあけかい）',
    note: '九州でいちばん長い川。あばれ川として「筑紫二郎」とよばれた。筑紫平野をつくり、有明海のノリ養殖でも有名。',
    path: 'M 56.1 272 L 50.1 270.1 L 47.1 271',
    labelX: 51.1, labelY: 264,
  },
  {
    id: 'yodo',
    name: '淀川',
    reading: 'よどがわ',
    lengthKm: 75,
    plain: '大阪平野',
    mouth: '大阪湾',
    note: '日本一大きい湖「琵琶湖（びわこ）」から流れ出て、京都・大阪を通り大阪湾にそそぐ。近畿地方の飲み水や工業用水として大切な川。',
    path: 'M 129.4 235.9 L 124.9 238.8 L 122.2 242.6',
    labelX: 127, labelY: 244,
  },
];

/** 豆知識：日本三大暴れ川（三大河川の別名） */
export const abaregawaTrivia = {
  title: '日本三大暴れ川（あばれがわ）',
  intro: 'むかし、大雨のたびに洪水を起こしたあばれ川には、長男・次男・三男のように別名がつけられました。',
  items: [
    { name: '利根川', nickname: '坂東太郎（ばんどうたろう）', region: '関東' },
    { name: '筑後川', nickname: '筑紫二郎（つくしじろう）', region: '九州' },
    { name: '吉野川', nickname: '四国三郎（しこくさぶろう）', region: '四国' },
  ],
};

/** 豆知識：日本アルプス */
export const japanAlpsTrivia = {
  title: '日本アルプス（にほんアルプス）',
  intro: '中部地方にある、3000m級の山が連なる3つの山脈をまとめたよび名。「日本の屋根」ともよばれます。',
  items: [
    { name: '飛騨山脈（北アルプス）', peak: '奥穂高岳 3190m' },
    { name: '木曽山脈（中央アルプス）', peak: '木曽駒ヶ岳 2956m' },
    { name: '赤石山脈（南アルプス）', peak: '北岳 3193m（富士山に次ぐ日本2位）' },
  ],
};
