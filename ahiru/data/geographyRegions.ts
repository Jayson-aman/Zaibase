export type IndustrialZone = {
  name: string;
  mainIndustries: string[];
  famous: string[];
};

export type AgricultureInfo = {
  farmingTypes: string[];
  mainCrops: string[];
  livestock: string[];
  notes: string[];
};

export type FisheryInfo = {
  fishingGrounds: string[];
  mainCatch: string[];
  aquaculture: string[];
};

export type GeoRegion = {
  id: string;
  name: string;
  emoji: string;
  color: string;
  mapX: number;
  mapY: number;
  mapW: number;
  mapH: number;
  terrain: string;
  climate: string;
  features: string[];
  products: string[];
  agriculture: AgricultureInfo;
  fishery: FisheryInfo;
  forestry: string[];
  industries: string[];
  industrialZones: IndustrialZone[];
  commerce: string[];
  cities: { name: string; note: string }[];
};

export const geographyRegions: GeoRegion[] = [
  {
    id: 'hokkaido',
    name: '北海道',
    emoji: '🐮',
    color: '#5B8DEF',
    mapX: 78, mapY: 4, mapW: 22, mapH: 24,
    terrain: '平野・台地・山岳。日本最大の面積。',
    climate: '夏は涼しく、冬は雪が多い。',
    features: ['広大な農地', 'ダイヤモンドダスト', '雪まつり'],
    products: ['じゃがいも', '小麦', '乳製品'],
    agriculture: {
      farmingTypes: ['畑作', '畜産', '酪農'],
      mainCrops: ['じゃがいも（全国1位）', '小麦', 'てんさい（砂糖）', 'アスパラガス'],
      livestock: ['乳牛（牛乳・チーズ）', '肉牛', '豚'],
      notes: ['大規模畑作', '夏季の涼しさを活かした高原野菜'],
    },
    fishery: {
      fishingGrounds: ['オホーツク海', '日本海', '太平洋'],
      mainCatch: ['ホタテ', 'カニ（毛ガニ・ズワイガニ）', 'サケ', 'イカ'],
      aquaculture: ['ホタテ養殖', 'サーモン'],
    },
    forestry: ['針広混交林', '木材・パルプ原料'],
    industries: ['食料品', '木材・パルプ', '観光'],
    industrialZones: [{
      name: '札幌・石狩', mainIndustries: ['食料品', '印刷'],
      famous: ['ジンギスカン', 'スノーフェスティバル'],
    }],
    commerce: ['観光（スキー・雪まつり）', '札幌（サービス業）', '道内流通'],
    cities: [{ name: '札幌', note: '政令指定都市。100万都市。' }],
  },
  {
    id: 'tohoku',
    name: '東北',
    emoji: '🍎',
    color: '#27AE60',
    mapX: 72, mapY: 28, mapW: 18, mapH: 22,
    terrain: '奥羽山脈をはさむ太平洋側・日本海側の平野。',
    climate: '夏は涼しい。冬は豪雪。',
    features: ['米どころ', 'りんご', '三陸海岸（リアス）'],
    products: ['米', 'りんご', 'さくらんぼ'],
    agriculture: {
      farmingTypes: ['稲作', '果樹', '畜産'],
      mainCrops: ['米（仙台平野・庄内平野）', 'りんご（全国1位）', 'さくらんぼ', '枝豆（岩手）'],
      livestock: ['肉牛（前泽牛など）', '豚'],
      notes: ['日本海側は雪解け水で米作', '山形は盆地で果樹が盛ん'],
    },
    fishery: {
      fishingGrounds: ['三陸沖', '日本海'],
      mainCatch: ['サンマ', 'カツオ', 'ホタテ', 'ワカメ'],
      aquaculture: ['ホタテ', 'サーモン（青森）', 'ワカメ'],
    },
    forestry: ['日本海側の広葉樹林', '秋田杉'],
    industries: ['食品', '機械'],
    industrialZones: [{
      name: '仙台平野', mainIndustries: ['食品', '機械'],
      famous: ['仙台', '塩竈・石巻（水産）'],
    }],
    commerce: ['仙台（東北の中心都市）', '観光（奥入瀬・松島）'],
    cities: [
      { name: '仙台', note: '東北最大。棚夕祭り。' },
      { name: '新潟', note: '米どころ。日本海側。' },
    ],
  },
  {
    id: 'kanto',
    name: '関東',
    emoji: '🗼',
    color: '#E74C3C',
    mapX: 72, mapY: 50, mapW: 16, mapH: 18,
    terrain: '関東平野（日本最大）。房総半島。',
    climate: '夏暑く冬乾燥。内陸と沿岸で差大。',
    features: ['首都圏', '埋め立て', '東京湾'],
    products: ['野菜', '花'],
    agriculture: {
      farmingTypes: ['野菜', '稲作', '畜産', '花き'],
      mainCrops: ['キャベツ（高原）', 'ネギ・ダイコン', '米（内陸部）', 'イチゴ（栃木）'],
      livestock: ['豚', '卵（茨城）', '乳牛'],
      notes: ['都市近郊型農業', '房総は温暖で花き・野菜'],
    },
    fishery: {
      fishingGrounds: ['東京湾', '外房・内房'],
      mainCatch: ['マグロ', 'アジ', 'シラス', 'ノリ'],
      aquaculture: ['ホタテ（内房）', 'ノリ'],
    },
    forestry: ['内陸部の人工林（スギ・ヒノキ）'],
    industries: ['出版・印刷', '化学', '電気機械', '自動車'],
    industrialZones: [
      { name: '京浜工業地帯', mainIndustries: ['石油化学', '鉄鋼', '造船', '自動車'],
        famous: ['横浜・川崎・千葉', 'コンビナート'] },
      { name: '関東内陸工業地域', mainIndustries: ['機械', '半導体'],
        famous: ['埼玉・群馬・栃木', 'シリコンロード'] },
    ],
    commerce: ['東京（世界有数の経済中心）', '金融・IT・小売', '観光（浅草・ディズニー）'],
    cities: [
      { name: '東京', note: '首都。' },
      { name: '横浜', note: '京浜工業地帯。' },
      { name: '千葉', note: '成田空港。' },
    ],
  },
  {
    id: 'chubu',
    name: '中部（名古屋）',
    emoji: '🏭',
    color: '#F39C12',
    mapX: 48, mapY: 52, mapW: 18, mapH: 16,
    terrain: '日本アルプス・富士山・伊勢湾・濃尾平野。',
    climate: '太平洋側。伊吹おろしで冬晴れ。',
    features: ['中京工業地帯', 'トヨタ', '陶磁器'],
    products: ['みかん', 'うなぎ', 'お茶'],
    agriculture: {
      farmingTypes: ['稲作', '果樹', '畜産', '高原野菜'],
      mainCrops: ['米（濃尾平野）', 'みかん（渥美半島・三ケ日）', 'お茶（静岡）', 'キャベツ（高原）'],
      livestock: ['豚', '乳牛（長野高原）'],
      notes: ['うなぎ養殖（浜名湖・四万十）', '高原野菜は長野・岐阜'],
    },
    fishery: {
      fishingGrounds: ['伊勢湾', '三河湾', '駿河湾'],
      mainCatch: ['アジ', 'イカ', 'サバ'],
      aquaculture: ['うなぎ（浜名湖）', '真珠（伊勢湾）'],
    },
    forestry: ['木曽林（長良川上流）', 'スギ・ヒノキ'],
    industries: ['自動車', '航空機', '工作機械', '陶磁器'],
    industrialZones: [
      { name: '中京工業地帯', mainIndustries: ['自動車', '航空機', '機械', '陶磁器'],
        famous: ['トヨタ（豊田市）', '三菱重工', '瀬戸・常滑', '四日市コンビナート'] },
      { name: '東海工業地域', mainIndustries: ['製紙・パルプ'],
        famous: ['静岡（富士川沿い）'] },
    ],
    commerce: ['名古屋（中京の中心）', '卸売・小売', '観光（富士・伊勢神宮）'],
    cities: [
      { name: '名古屋', note: '中京の中心。自動車・航空。' },
      { name: '豊田', note: 'トヨタ本社。' },
      { name: '静岡', note: 'お茶・みかん。' },
    ],
  },
  {
    id: 'kinki',
    name: '近畿（関西）',
    emoji: '🏯',
    color: '#9B59B6',
    mapX: 38, mapY: 58, mapW: 14, mapH: 14,
    terrain: '近畿盆地・大阪平野・瀬戸内海。',
    climate: '瀬戸内温暖少雨。日本海側は雪。',
    features: ['阪神工業地帯', '古都', 'ポートアイランド'],
    products: ['清酒', '和菓子', 'タコ'],
    agriculture: {
      farmingTypes: ['稲作', '畜産', '果樹'],
      mainCrops: ['米（大阪・兵庫）', '茶（京都）', '柿（奈良）', 'いちじく'],
      livestock: ['但馬牛', '豚'],
      notes: ['清酒用酒米（兵庫・京都）', '京野菜（伝統野菜）'],
    },
    fishery: {
      fishingGrounds: ['瀬戸内海', '日本海（兵庫・京都）'],
      mainCatch: ['タコ（明石）', 'アジ', 'イカ'],
      aquaculture: ['真珠（英虞湾）', 'ハマグリ', 'ノリ'],
    },
    forestry: ['北近畿の人工林', '吉野杉'],
    industries: ['化学', '鉄鋼', '繊維', '電器'],
    industrialZones: [
      { name: '阪神工業地帯', mainIndustries: ['化学', '鉄鋼', '繊維'],
        famous: ['大阪', '神戸', '堺'] },
      { name: '瀬戸内工業地域', mainIndustries: ['石油化学', '製鉄'],
        famous: ['水島（岡山）'] },
    ],
    commerce: ['大阪（天下の台所・卸売）', '京都（観光・伝統産業）', '神戸（港・貿易）'],
    cities: [
      { name: '大阪', note: '西日本最大。' },
      { name: '神戸', note: '港町。' },
      { name: '京都', note: '1000年の都。' },
    ],
  },
  {
    id: 'chugoku',
    name: '中国',
    emoji: '⛩️',
    color: '#1ABC9C',
    mapX: 22, mapY: 56, mapW: 14, mapH: 12,
    terrain: '中国山地。瀬戸内側と日本海側。',
    climate: '瀬戸内温暖。日本海側は雪。',
    features: ['瀬戸大橋', '出雲', '原爆ドーム'],
    products: ['ぶどう', '柿', 'マスカット'],
    agriculture: {
      farmingTypes: ['稲作', '果樹', '畜産'],
      mainCrops: ['米（岡山・広島）', 'ぶどう（山陰）', 'マスカット（岡山）', '柿'],
      livestock: ['肉牛', '豚'],
      notes: ['山陰は日照時間が長く果樹に適す'],
    },
    fishery: {
      fishingGrounds: ['瀬戸内海', '日本海'],
      mainCatch: ['イカ', 'アジ', 'カキ'],
      aquaculture: ['カキ（広島・全国1位）', 'ノリ'],
    },
    forestry: ['中国山地のスギ・ヒノキ'],
    industries: ['製鉄', '機械', '造船'],
    industrialZones: [{
      name: '瀬戸内沿岸', mainIndustries: ['製鉄', '造船'],
      famous: ['広島（マツダ）', '水島', '呉（造船）'],
    }],
    commerce: ['広島（中国地方の中心）', '観光（宮島・出雲大社）'],
    cities: [{ name: '広島', note: '中国地方最大。' }],
  },
  {
    id: 'shikoku',
    name: '四国',
    emoji: '🌉',
    color: '#3498DB',
    mapX: 30, mapY: 72, mapW: 12, mapH: 10,
    terrain: '四国山地。吉野川。',
    climate: '太平洋側温暖多雨。',
    features: ['四国遍路', '鳴門の渦潮', '讃岐うどん'],
    products: ['柑橘', 'うどん', 'わかめ'],
    agriculture: {
      farmingTypes: ['稲作', '果樹', '畜産'],
      mainCrops: ['米（西讃・東予平野）', 'みかん', 'キウイ', 'ゴマ'],
      livestock: ['肉牛（阿波牛）', '豚'],
      notes: ['吉野川の水を利用した米作', '温暖な気候で果樹'],
    },
    fishery: {
      fishingGrounds: ['瀬戸内海', '太平洋'],
      mainCatch: ['アジ', 'カツオ', 'ブリ'],
      aquaculture: ['ブリ', '真珠', 'わかめ'],
    },
    forestry: ['四国山地のスギ人工林'],
    industries: ['化学', 'パルプ', '石油化学'],
    industrialZones: [{
      name: '瀬戸内沿岸', mainIndustries: ['石油化学', 'パルプ'],
      famous: ['新居浜', '坂出'],
    }],
    commerce: ['高松（四国の玄関口）', '観光（金刀比羅・道後温泉）'],
    cities: [{ name: '高松', note: '四国の玄関口。' }],
  },
  {
    id: 'kyushu',
    name: '九州・沖縄',
    emoji: '🌋',
    color: '#E67E22',
    mapX: 8, mapY: 68, mapW: 18, mapH: 22,
    terrain: '火山（阿蘇・桜島）。平野は限られる。',
    climate: '温暖。梅雨前線の影響大。',
    features: ['北九州工業', 'シリコンアイランド', '温泉'],
    products: ['焼酎', 'かぼす', 'マンゴー'],
    agriculture: {
      farmingTypes: ['稲作', '畜産', '果樹', '糖質'],
      mainCrops: ['米（筑後平野）', 'いちご（熊本）', 'みかん', '茶（鹿児島）'],
      livestock: ['肉牛（宮崎牛・佐賀牛）', '豚'],
      notes: ['沖縄はマンゴー・サトウキビ・パイナップル', '温暖で早生作物'],
    },
    fishery: {
      fishingGrounds: ['東シナ海', '太平洋', '沖縄近海'],
      mainCatch: ['カツオ', 'サバ', 'アジ', 'イセエビ'],
      aquaculture: ['ブリ', '真珠', 'タイ'],
    },
    forestry: ['九州山地の人工林', '沖縄の亜熱帯林'],
    industries: ['鉄鋼', '化学', '半導体', '自動車'],
    industrialZones: [
      { name: '北九州工業地帯', mainIndustries: ['鉄鋼', '化学'],
        famous: ['八幡製鉄', '関門海峡'] },
      { name: 'シリコンアイランド', mainIndustries: ['半導体'],
        famous: ['熊本・鹿児島のIC工場'] },
    ],
    commerce: ['福岡（九州最大）', '観光（温泉・ハウステンボス）', '沖縄（観光・基地関連）'],
    cities: [
      { name: '福岡', note: '九州最大。' },
      { name: '北九州', note: '北九州工業地帯。' },
      { name: '那覇', note: '沖縄県庁。' },
    ],
  },
];

export const industrialZoneSummary = [
  { name: '京浜', region: '関東', key: '横浜・川崎 — 自動車・石油化学' },
  { name: '中京', region: '名古屋', key: 'トヨタ・三菱重工 — 自動車・航空' },
  { name: '阪神', region: '関西', key: '大阪・神戸 — 化学・鉄鋼' },
  { name: '北九州', region: '九州', key: '八幡 — 鉄鋼・化学' },
  { name: '瀬戸内', region: '中国・四国', key: '水島 — 製鉄・石油化学' },
  { name: '東海', region: '静岡', key: '富士川 — 製紙・パルプ' },
];

export const sectorOverview = [
  { emoji: '🌾', name: '第一次産業（農業）', desc: '稲作・畑作・畜産・果樹' },
  { emoji: '🐟', name: '第一次産業（漁業）', desc: '沿岸漁業・遠洋漁業・養殖' },
  { emoji: '🌲', name: '第一次産業（林業）', desc: '木材・人工林' },
  { emoji: '🏭', name: '第二次産業（工業）', desc: '工業地帯・コンビナート' },
  { emoji: '🏪', name: '第三次産業（商業）', desc: '流通・観光・サービス' },
];

export function getRegionById(id: string): GeoRegion | undefined {
  return geographyRegions.find((r) => r.id === id);
}
