/**
 * 理科・社会（歴史・公民）の「単元イラスト」システム。
 *
 * 各単元にキーワードを持たせ、問題文からテーマを自動判定してイラストを表示する。
 * イラストは scripts/generate-subject-images.mjs（Gemini / Nano Banana）で生成し、
 * assets/subjects/ に保存 → 下記の *Images マップが自動更新される。
 * 画像が未生成の間はマップが空で、UIは画像なしで正常に動作する。
 */
import { ImageSourcePropType } from 'react-native';
import { SubjectKey } from './questions-meta';

export type SubjectTheme = {
  id: string;
  label: string;
  keywords: string[];
};

// ── 理科の単元テーマ ──────────────────────────────────────
export const rikaThemes: SubjectTheme[] = [
  { id: 'rika_human_body', label: '人体（消化・呼吸・血液）',
    keywords: ['消化', '呼吸', '血液', '心臓', '肺', '胃', '小腸', '大腸', 'じん臓', '腎臓', 'だ液', '血管', '肺胞', '顕微鏡', 'けん微鏡', '細胞', '養分', '吸収'] },
  { id: 'rika_plant', label: '植物のつくり',
    keywords: ['植物', '発芽', '光合成', '葉', '根', 'くき', '茎', '花', '受粉', '種子', '蒸散', '葉緑体', 'デンプン', '双子葉', '単子葉', '気孔', 'めしべ', 'おしべ'] },
  { id: 'rika_creatures', label: '昆虫・動物',
    keywords: ['昆虫', 'こん虫', '動物', 'メダカ', 'カエル', 'おたまじゃくし', '育ち方', '変態', 'せきつい', '背骨', '食物連鎖', '食物網', 'プランクトン', 'モンシロチョウ', 'さなぎ'] },
  { id: 'rika_space', label: '天体・宇宙',
    keywords: ['月', '星', '太陽', '天体', '惑星', '星座', '地球', '金星', '日食', '月食', '南中', '公転', '自転', '恒星', '北極星', '満月', '三日月'] },
  { id: 'rika_weather', label: '天気・気象',
    keywords: ['天気', '気象', '雲', '前線', '台風', '湿度', '気温', 'フェーン', '露点', '飽和', '偏西風', '季節風', '高気圧', '低気圧', '積乱雲', '梅雨'] },
  { id: 'rika_chem', label: '水溶液・化学変化',
    keywords: ['水溶液', '溶け', 'とけ', '酸性', 'アルカリ', '中性', 'リトマス', 'BTB', '中和', '気体', '燃焼', '酸素', '二酸化炭素', '水素', '塩酸', '化学変化', '原子', '分子', 'イオン', '結晶', '溶解度'] },
  { id: 'rika_electric', label: '電気・磁石',
    keywords: ['電気', '電流', '電圧', '回路', '豆電球', '磁石', '電磁石', 'オーム', '抵抗', '直列', '並列', 'コイル', '方位磁針', '導線', '発電'] },
  { id: 'rika_force', label: 'てこ・力・運動',
    keywords: ['てこ', 'ばね', 'ふりこ', '振り子', '滑車', 'かっ車', '浮力', '重さ', 'つり合い', '支点', '力点', '作用点', '速さ', '運動', '慣性', '仕事', '圧力'] },
  { id: 'rika_light_sound', label: '光・音',
    keywords: ['光', '音', '反射', '屈折', 'レンズ', '凸レンズ', 'ふるえ', '振動', 'こだま', '音の速さ', '虫めがね', 'プリズム'] },
  { id: 'rika_earth', label: '地層・火山・地震',
    keywords: ['地層', '岩石', '化石', '火山', '地震', 'たい積', '堆積', '断層', 'しゅう曲', 'マグマ', '火成岩', 'たい積岩', 'しん食', '侵食', 'P波', 'S波', '示準化石', '柱状図'] },
];

// ── 歴史の単元テーマ（時代別） ────────────────────────────
export const historyThemes: SubjectTheme[] = [
  { id: 'hist_jomon', label: '縄文・弥生時代',
    keywords: ['縄文', '弥生', '土器', '貝塚', '稲作', '高床', '邪馬台国', '卑弥呼', 'たて穴', '登呂'] },
  { id: 'hist_kofun', label: '古墳・飛鳥時代',
    keywords: ['古墳', '前方後円墳', '大和政権', '大和朝廷', '聖徳太子', '十七条', '冠位十二階', '遣隋使', '法隆寺', '蘇我', '大化の改新', '中大兄'] },
  { id: 'hist_nara', label: '奈良時代',
    keywords: ['奈良時代', '平城京', '大仏', '東大寺', '聖武', '墾田永年', '古事記', '日本書紀', '天平', '正倉院', '行基', '鑑真'] },
  { id: 'hist_heian', label: '平安時代',
    keywords: ['平安', '平安京', '桓武', '藤原道長', '摂関', '源氏物語', '紫式部', '清少納言', '国風', '院政', '平清盛', 'かな文字'] },
  { id: 'hist_kamakura', label: '鎌倉時代',
    keywords: ['鎌倉', '源頼朝', '御家人', '守護', '地頭', '元寇', '北条', '執権', '御成敗式目', '承久の乱', '金剛力士', '運慶'] },
  { id: 'hist_muromachi', label: '室町・戦国時代',
    keywords: ['室町', '足利', '応仁の乱', '戦国', '織田信長', '豊臣秀吉', '鉄砲', '南蛮', '金閣', '銀閣', '下剋上', '検地', '刀狩', '桶狭間', '長篠'] },
  { id: 'hist_edo', label: '江戸時代',
    keywords: ['江戸', '徳川', '家康', '参勤交代', '鎖国', '享保', '寛政', '天保', '化政', '元禄', '町人', '士農工商', 'ペリー', '開国', '大名', '浮世絵'] },
  { id: 'hist_meiji', label: '明治時代',
    keywords: ['明治', '維新', '廃藩置県', '文明開化', '富国強兵', '殖産興業', '自由民権', '大日本帝国憲法', '日清', '日露', '条約改正', '西郷', '大久保'] },
  { id: 'hist_modern_war', label: '大正・昭和（戦争）',
    keywords: ['大正', 'デモクラシー', '関東大震災', '世界恐慌', '満州', '日中戦争', '太平洋戦争', '原爆', '終戦', 'ポツダム', '五・一五', '二・二六'] },
  { id: 'hist_postwar', label: '戦後・現代',
    keywords: ['戦後', 'GHQ', '日本国憲法', '高度経済成長', '東京オリンピック', 'バブル', '冷戦', '安保', '復興', '国際連合'] },
];

// ── 公民の単元テーマ ──────────────────────────────────────
export const civicsThemes: SubjectTheme[] = [
  { id: 'civ_constitution', label: '憲法・人権',
    keywords: ['憲法', '基本的人権', '三原則', '国民主権', '平和主義', '象徴', '自由権', '社会権', '第9条', '公共の福祉'] },
  { id: 'civ_diet', label: '国会・内閣',
    keywords: ['国会', '衆議院', '参議院', '内閣', '国務大臣', '議院内閣制', '法律', '予算', '総理大臣', '二院制'] },
  { id: 'civ_court', label: '裁判所・司法',
    keywords: ['裁判', '裁判所', '司法', '裁判員', '三審制', '違憲審査', '最高裁', '控訴', '上告'] },
  { id: 'civ_election', label: '選挙・地方自治',
    keywords: ['選挙', '投票', '小選挙区', '比例代表', '有権者', '一票の格差', '地方自治', '住民', '条例', '直接請求'] },
  { id: 'civ_economy', label: '経済・財政',
    keywords: ['経済', '需要', '供給', '価格', '市場', '金融', '日本銀行', '景気', 'インフレ', '為替', '税', '財政', '国債', '株式', '独占'] },
  { id: 'civ_intl', label: '国際社会',
    keywords: ['国際', '国連', '国際連合', '安全保障理事会', 'ユニセフ', 'ユネスコ', 'ODA', 'NGO', 'SDGs', '地球温暖化', 'パリ協定', 'EU', 'ASEAN'] },
];

// ── 生成された画像のマップ（初期は空。scripts/generate-subject-images.mjs が更新） ──
export const rikaImages: Record<string, ImageSourcePropType> = {};
export const historyImages: Record<string, ImageSourcePropType> = {};
export const civicsImages: Record<string, ImageSourcePropType> = {};

function matchTheme(themes: SubjectTheme[], text: string): string | null {
  let bestId: string | null = null;
  let bestHits = 0;
  for (const t of themes) {
    let hits = 0;
    for (const kw of t.keywords) if (text.includes(kw)) hits++;
    if (hits > bestHits) {
      bestHits = hits;
      bestId = t.id;
    }
  }
  return bestHits > 0 ? bestId : null;
}

/** 問題文から単元テーマを判定（ラベル表示用） */
export function getSubjectThemeLabel(subject: SubjectKey, text: string): string | null {
  if (subject === 'rika') {
    const id = matchTheme(rikaThemes, text);
    return rikaThemes.find((t) => t.id === id)?.label ?? null;
  }
  if (subject === 'shakai') {
    const hid = matchTheme(historyThemes, text);
    if (hid) return historyThemes.find((t) => t.id === hid)?.label ?? null;
    const cid = matchTheme(civicsThemes, text);
    if (cid) return civicsThemes.find((t) => t.id === cid)?.label ?? null;
  }
  return null;
}

/** 問題文から単元テーマを判定し、生成済みイラストがあれば返す（なければ null） */
export function getSubjectIllustration(
  subject: SubjectKey,
  text: string,
): ImageSourcePropType | null {
  if (subject === 'rika') {
    const id = matchTheme(rikaThemes, text);
    return id ? rikaImages[id] ?? null : null;
  }
  if (subject === 'shakai') {
    const hid = matchTheme(historyThemes, text);
    if (hid && historyImages[hid]) return historyImages[hid];
    const cid = matchTheme(civicsThemes, text);
    if (cid && civicsImages[cid]) return civicsImages[cid];
  }
  return null;
}
