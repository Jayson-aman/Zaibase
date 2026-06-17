export type ExamType = 'chugaku' | 'koko';

export type CourseKey =
  // ── 中学受験 カテゴリ ──
  | 'general'         // 一般
  | 'kankan'          // 関関同立附属
  | 'shitennoji'      // 四天王寺学園
  | 'nandai'          // 最難関（灘・甲陽・東大寺）MAXのみ
  // ── 中学受験 学校別（大阪私学） ──
  | 'seiko'           // 大阪星光学院（最難関・男子）
  | 'seifu-nankai'    // 清風南海（最難関）
  | 'takatsuki'       // 高槻（最難関）
  | 'kaimei'          // 開明（難関）
  | 'toin'            // 大阪桐蔭（難関）
  | 'seifu'           // 清風（難関）
  | 'kindai'          // 近畿大学附属（難関）
  | 'kansai-hokuyo'   // 関西大学北陽（難関）
  | 'myojo'           // 明星（難関・男子）
  | 'tezukayama'      // 帝塚山学院（難関・女子）
  | 'kinrankai'       // 金蘭会（準難関・女子）
  | 'poole'           // プール学院（準難関・女子）
  | 'josejogakuen'    // 城星学園（準難関）
  | 'osaka-jogakuin'  // 大阪女学院（準難関・女子）
  | 'kenmei'          // 賢明学院（準難関）
  | 'otani'           // 大谷（準難関・女子）
  | 'naniwa'          // 浪速（準難関）
  | 'otemon'          // 追手門学院（準難関）
  // ── 高校受験 カテゴリ ──
  | 'koko-general'    // 公立高校 一般
  | 'koko-kankan'     // 関関同立附属高
  | 'koko-top';       // 最難関公立（天王寺・北野）MAXのみ

export type CourseLevel = '基礎〜標準' | '標準' | '標準〜難関' | '難関' | '最難関';

export type CourseInfo = {
  key: CourseKey;
  examType: ExamType;
  name: string;
  shortName: string;
  emoji: string;
  color: string;
  level: CourseLevel;
  targetSchools: string[];
  description: string;
  maxOnly?: boolean;
  gender?: '男子' | '女子' | '共学';
  hensachi?: string; // 偏差値帯
};

export const ALL_COURSES: CourseInfo[] = [
  // ─────── 中学受験 カテゴリ ───────
  {
    key: 'general',
    examType: 'chugaku',
    name: '中学受験 一般',
    shortName: '一般',
    emoji: '📚',
    color: '#1E5FBE',
    level: '基礎〜標準',
    targetSchools: ['私立中学（一般）', '公立中高一貫'],
    description: '中学受験の基礎・標準レベルを幅広くカバー',
    gender: '共学',
  },
  {
    key: 'kankan',
    examType: 'chugaku',
    name: '関関同立附属',
    shortName: '関関同立',
    emoji: '🎓',
    color: '#7D3C98',
    level: '標準〜難関',
    targetSchools: ['関西大学附属', '関西学院中', '同志社中', '立命館中'],
    description: '関関同立附属中学の入試頻出問題',
    gender: '共学',
    hensachi: '55〜65',
  },
  {
    key: 'shitennoji',
    examType: 'chugaku',
    name: '四天王寺学園',
    shortName: '四天王寺',
    emoji: '⛩️',
    color: '#C0392B',
    level: '難関',
    targetSchools: ['四天王寺学園中', '四天王寺東中'],
    description: '四天王寺学園入試レベルの高難度問題',
    gender: '女子',
    hensachi: '60〜70',
  },
  {
    key: 'nandai',
    examType: 'chugaku',
    name: '最難関コース',
    shortName: '最難関',
    emoji: '🔥',
    color: '#E67E22',
    level: '最難関',
    targetSchools: ['灘中', '甲陽学院', '東大寺学園', '西大和学園'],
    description: '灘・甲陽・東大寺レベルの最難関問題（MAX限定）',
    maxOnly: true,
    gender: '共学',
    hensachi: '70+',
  },

  // ─────── 中学受験 学校別（最難関） ───────
  {
    key: 'seiko',
    examType: 'chugaku',
    name: '大阪星光学院',
    shortName: '星光',
    emoji: '⭐',
    color: '#1A237E',
    level: '最難関',
    targetSchools: ['大阪星光学院中学校'],
    description: '大阪星光学院の入試問題。論理的思考と記述力が問われる',
    gender: '男子',
    hensachi: '66〜68',
    maxOnly: true,
  },
  {
    key: 'seifu-nankai',
    examType: 'chugaku',
    name: '清風南海',
    shortName: '清風南海',
    emoji: '🌊',
    color: '#0277BD',
    level: '最難関',
    targetSchools: ['清風南海中学校'],
    description: '清風南海の入試問題。算数・理科の難度が特に高い',
    gender: '共学',
    hensachi: '64〜66',
    maxOnly: true,
  },
  {
    key: 'takatsuki',
    examType: 'chugaku',
    name: '高槻中学校',
    shortName: '高槻',
    emoji: '🏯',
    color: '#2E7D32',
    level: '最難関',
    targetSchools: ['高槻中学校'],
    description: '高槻中の入試問題。記述・思考力型の出題が特徴',
    gender: '共学',
    hensachi: '63〜66',
    maxOnly: true,
  },

  // ─────── 中学受験 学校別（難関） ───────
  {
    key: 'kaimei',
    examType: 'chugaku',
    name: '開明中学校',
    shortName: '開明',
    emoji: '🌅',
    color: '#E65100',
    level: '難関',
    targetSchools: ['開明中学校'],
    description: '開明の入試問題。バランス型の出題で基礎〜応用まで',
    gender: '共学',
    hensachi: '58〜62',
  },
  {
    key: 'toin',
    examType: 'chugaku',
    name: '大阪桐蔭',
    shortName: '大阪桐蔭',
    emoji: '🌸',
    color: '#AD1457',
    level: '難関',
    targetSchools: ['大阪桐蔭中学校'],
    description: '大阪桐蔭の入試問題。英語・算数・国語の総合力を試す',
    gender: '共学',
    hensachi: '57〜62',
  },
  {
    key: 'seifu',
    examType: 'chugaku',
    name: '清風中学校',
    shortName: '清風',
    emoji: '💨',
    color: '#00695C',
    level: '難関',
    targetSchools: ['清風中学校'],
    description: '清風の入試問題。仏教系男子校、理系に強い',
    gender: '男子',
    hensachi: '56〜60',
  },
  {
    key: 'kindai',
    examType: 'chugaku',
    name: '近畿大学附属',
    shortName: '近大附属',
    emoji: '🎯',
    color: '#F57F17',
    level: '難関',
    targetSchools: ['近畿大学附属中学校'],
    description: '近大附属の入試問題。近大への内部進学を視野に入れた問題構成',
    gender: '共学',
    hensachi: '55〜60',
  },
  {
    key: 'kansai-hokuyo',
    examType: 'chugaku',
    name: '関西大学北陽',
    shortName: '関大北陽',
    emoji: '🎓',
    color: '#512DA8',
    level: '難関',
    targetSchools: ['関西大学北陽中学校'],
    description: '関西大学北陽の入試問題。関大への推薦進学を前提とした出題',
    gender: '共学',
    hensachi: '54〜58',
  },
  {
    key: 'myojo',
    examType: 'chugaku',
    name: '明星中学校',
    shortName: '明星',
    emoji: '✨',
    color: '#4527A0',
    level: '難関',
    targetSchools: ['明星中学校'],
    description: '明星の入試問題。キリスト教系男子校、難関国立大合格者多数',
    gender: '男子',
    hensachi: '56〜62',
  },
  {
    key: 'tezukayama',
    examType: 'chugaku',
    name: '帝塚山学院',
    shortName: '帝塚山学院',
    emoji: '🌺',
    color: '#880E4F',
    level: '難関',
    targetSchools: ['帝塚山学院中学校', '帝塚山学院泉ヶ丘中学校'],
    description: '帝塚山学院の入試問題。女子校、国語・英語重視',
    gender: '女子',
    hensachi: '55〜60',
  },

  // ─────── 中学受験 学校別（準難関） ───────
  {
    key: 'kinrankai',
    examType: 'chugaku',
    name: '金蘭会中学校',
    shortName: '金蘭会',
    emoji: '🌼',
    color: '#F9A825',
    level: '標準〜難関',
    targetSchools: ['金蘭会中学校'],
    description: '金蘭会の入試問題。女子校、国語・算数の基礎力を重視',
    gender: '女子',
    hensachi: '50〜56',
  },
  {
    key: 'poole',
    examType: 'chugaku',
    name: 'プール学院',
    shortName: 'プール',
    emoji: '🕊️',
    color: '#1565C0',
    level: '標準〜難関',
    targetSchools: ['プール学院中学校'],
    description: 'プール学院の入試問題。キリスト教女子校、英語教育が充実',
    gender: '女子',
    hensachi: '48〜54',
  },
  {
    key: 'josejogakuen',
    examType: 'chugaku',
    name: '城星学園',
    shortName: '城星',
    emoji: '⭐',
    color: '#37474F',
    level: '標準〜難関',
    targetSchools: ['城星学園中学校'],
    description: '城星学園の入試問題。カトリック系共学、バランス型出題',
    gender: '共学',
    hensachi: '48〜54',
  },
  {
    key: 'osaka-jogakuin',
    examType: 'chugaku',
    name: '大阪女学院',
    shortName: '女学院',
    emoji: '🌸',
    color: '#C62828',
    level: '標準〜難関',
    targetSchools: ['大阪女学院中学校'],
    description: '大阪女学院の入試問題。プロテスタント女子校、英語教育が特徴',
    gender: '女子',
    hensachi: '50〜56',
  },
  {
    key: 'kenmei',
    examType: 'chugaku',
    name: '賢明学院',
    shortName: '賢明',
    emoji: '📖',
    color: '#4A148C',
    level: '標準〜難関',
    targetSchools: ['賢明学院中学校'],
    description: '賢明学院の入試問題。カトリック系、堺市の女子校',
    gender: '女子',
    hensachi: '46〜52',
  },
  {
    key: 'otani',
    examType: 'chugaku',
    name: '大谷中学校',
    shortName: '大谷',
    emoji: '🍂',
    color: '#BF360C',
    level: '標準〜難関',
    targetSchools: ['大谷中学校（大阪）'],
    description: '大谷の入試問題。仏教系女子校、大阪市内',
    gender: '女子',
    hensachi: '46〜52',
  },
  {
    key: 'naniwa',
    examType: 'chugaku',
    name: '浪速中学校',
    shortName: '浪速',
    emoji: '🏙️',
    color: '#006064',
    level: '標準〜難関',
    targetSchools: ['浪速中学校'],
    description: '浪速の入試問題。神道系共学、探究学習重視',
    gender: '共学',
    hensachi: '47〜52',
  },
  {
    key: 'otemon',
    examType: 'chugaku',
    name: '追手門学院',
    shortName: '追手門',
    emoji: '🏛️',
    color: '#33691E',
    level: '標準〜難関',
    targetSchools: ['追手門学院中学校'],
    description: '追手門学院の入試問題。共学、探究・グローバル教育',
    gender: '共学',
    hensachi: '46〜52',
  },

  // ─────── 高校受験 ───────
  {
    key: 'koko-general',
    examType: 'koko',
    name: '高校受験 公立',
    shortName: '公立一般',
    emoji: '🏫',
    color: '#27AE60',
    level: '標準',
    targetSchools: ['大阪府公立高校', '兵庫県公立高校', '京都府公立高校'],
    description: '公立高校入試の標準〜応用レベル',
    gender: '共学',
  },
  {
    key: 'koko-kankan',
    examType: 'koko',
    name: '高校受験 関関同立',
    shortName: '関関同立(高)',
    emoji: '🎓',
    color: '#2980B9',
    level: '難関',
    targetSchools: ['関大一高', '関学高', '同志社高', '立命館高'],
    description: '関関同立附属高校の入試レベル問題',
    gender: '共学',
    hensachi: '60〜68',
  },
  {
    key: 'koko-top',
    examType: 'koko',
    name: '高校受験 最難関',
    shortName: '最難関(高)',
    emoji: '🏆',
    color: '#922B21',
    level: '最難関',
    targetSchools: ['天王寺高校', '北野高校', '豊中高校', '堀川高校'],
    description: '公立最難関・難関私立高校入試レベル（MAX限定）',
    maxOnly: true,
    gender: '共学',
    hensachi: '68〜72',
  },
];

export const CHUGAKU_COURSES = ALL_COURSES.filter((c) => c.examType === 'chugaku');
export const KOKO_COURSES = ALL_COURSES.filter((c) => c.examType === 'koko');

// School-specific courses (with hensachi)
export const SCHOOL_COURSES = ALL_COURSES.filter(
  (c) => c.examType === 'chugaku' && c.hensachi && !['kankan', 'shitennoji', 'nandai', 'general'].includes(c.key),
);

// Category courses (non-school)
export const CATEGORY_COURSES = ALL_COURSES.filter(
  (c) => ['general', 'kankan', 'shitennoji', 'nandai'].includes(c.key),
);

export function getCourseInfo(key: CourseKey): CourseInfo {
  return ALL_COURSES.find((c) => c.key === key) ?? ALL_COURSES[0];
}

export const LEVEL_ORDER: Record<CourseLevel, number> = {
  '最難関': 0,
  '難関': 1,
  '標準〜難関': 2,
  '標準': 3,
  '基礎〜標準': 4,
};
