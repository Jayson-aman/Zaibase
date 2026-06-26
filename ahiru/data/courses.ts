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
  // ── 東京 中学受験 学校別 ──
  | 'tokyo-meidai'    // 明治大学附属明治中（難関）
  | 'tokyo-aoyama'    // 青山学院中等部（難関）
  | 'tokyo-chuo'      // 中央大学附属中（難関）
  | 'tokyo-hosei'     // 法政大学第二中（標準〜難関）
  | 'tokyo-gakushuin' // 学習院中等科（標準〜難関）
  // ── 高校受験 カテゴリ ──
  | 'koko-general'    // 公立高校 一般
  | 'koko-kankan'     // 関関同立附属高
  | 'koko-top'        // 最難関公立（天王寺・北野）MAXのみ
  // ── 東京 高校受験 ──
  | 'koko-hibiya'     // 都立日比谷高校（最難関）
  | 'koko-waseda'     // 早稲田大学附属高校（最難関）
  | 'koko-meidai'    // 明大明治高校（難関）
  // ── 関西 私立高校 ──
  | 'koko-nada'       // 灘高校（関西最難関）
  | 'koko-koyo'       // 甲陽学院高校（最難関）
  | 'koko-nishiyamato' // 西大和学園高校（最難関）
  | 'koko-todaiji'    // 東大寺学園高校（最難関）
  // ── 東京 私立高校 ──
  | 'koko-kasei'      // 開成高校（東京最難関）
  | 'koko-keio'       // 慶應義塾高校（最難関）
  | 'koko-azabu'      // 麻布高校（最難関）
  // ── 名古屋 私立高校 ──
  | 'koko-tokai'      // 東海高校（東海最難関）
  | 'koko-taki'       // 滝高校（難関）
  | 'koko-nanzan'     // 南山高校（難関）
  // ── 福岡 私立高校 ──
  | 'koko-kurume'     // 久留米大附設高校（九州最難関）
  | 'koko-seinan'     // 西南学院高校（難関）
  | 'koko-ohori';     // 福岡大附属大濠高校（難関）

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

  // ─────── 東京 中学受験 ───────
  {
    key: 'tokyo-meidai',
    examType: 'chugaku',
    name: '明治大学附属明治中',
    shortName: '明大明治',
    emoji: '🎌',
    color: '#B71C1C',
    level: '難関',
    targetSchools: ['明治大学附属明治中学校'],
    description: '明大明治の入試問題。明治大学への内部進学を見据えた総合力重視',
    gender: '共学',
    hensachi: '60〜64',
  },
  {
    key: 'tokyo-aoyama',
    examType: 'chugaku',
    name: '青山学院中等部',
    shortName: '青山学院',
    emoji: '🏫',
    color: '#1565C0',
    level: '難関',
    targetSchools: ['青山学院中等部'],
    description: '青山学院の入試問題。英語・国語・思考力型の出題が特徴',
    gender: '共学',
    hensachi: '62〜66',
  },
  {
    key: 'tokyo-chuo',
    examType: 'chugaku',
    name: '中央大学附属中学校',
    shortName: '中央大附属',
    emoji: '🎯',
    color: '#880E4F',
    level: '難関',
    targetSchools: ['中央大学附属中学校'],
    description: '中央大附属の入試問題。論理的思考・記述問題が多い',
    gender: '共学',
    hensachi: '60〜64',
  },
  {
    key: 'tokyo-hosei',
    examType: 'chugaku',
    name: '法政大学第二中学校',
    shortName: '法政第二',
    emoji: '📐',
    color: '#4527A0',
    level: '標準〜難関',
    targetSchools: ['法政大学第二中学校'],
    description: '法政第二の入試問題。バランス型の出題、英語・数学に強い',
    gender: '共学',
    hensachi: '58〜62',
  },
  {
    key: 'tokyo-gakushuin',
    examType: 'chugaku',
    name: '学習院中等科',
    shortName: '学習院',
    emoji: '🌸',
    color: '#37474F',
    level: '標準〜難関',
    targetSchools: ['学習院中等科'],
    description: '学習院の入試問題。伝統校、国語・社会の記述力が問われる',
    gender: '男子',
    hensachi: '56〜62',
  },

  // ─────── 関西 私立高校受験 ───────
  {
    key: 'koko-nada',
    examType: 'koko',
    name: '灘高校',
    shortName: '灘',
    emoji: '🔥',
    color: '#1A237E',
    level: '最難関',
    targetSchools: ['灘高校'],
    description: '灘高校の入試問題。全国最難関レベル、特に数学・理科の思考力が問われる',
    maxOnly: true,
    gender: '男子',
    hensachi: '78+',
  },
  {
    key: 'koko-koyo',
    examType: 'koko',
    name: '甲陽学院高校',
    shortName: '甲陽学院',
    emoji: '⚡',
    color: '#4A148C',
    level: '最難関',
    targetSchools: ['甲陽学院高校'],
    description: '甲陽学院高校の入試問題。数学の論証力・思考力が問われる',
    maxOnly: true,
    gender: '男子',
    hensachi: '75〜77',
  },
  {
    key: 'koko-nishiyamato',
    examType: 'koko',
    name: '西大和学園高校',
    shortName: '西大和',
    emoji: '🌸',
    color: '#E65100',
    level: '最難関',
    targetSchools: ['西大和学園高校'],
    description: '西大和学園高校の入試問題。東大・京大現役合格者多数、全科目難関レベル',
    maxOnly: true,
    gender: '共学',
    hensachi: '73〜76',
  },
  {
    key: 'koko-todaiji',
    examType: 'koko',
    name: '東大寺学園高校',
    shortName: '東大寺学園',
    emoji: '⛩️',
    color: '#BF360C',
    level: '最難関',
    targetSchools: ['東大寺学園高校'],
    description: '東大寺学園高校の入試問題。理系・医系進学者多数、数理の難度が高い',
    maxOnly: true,
    gender: '男子',
    hensachi: '73〜76',
  },

  // ─────── 東京 私立高校受験 ───────
  {
    key: 'koko-kasei',
    examType: 'koko',
    name: '開成高校',
    shortName: '開成',
    emoji: '🏆',
    color: '#212121',
    level: '最難関',
    targetSchools: ['開成高校'],
    description: '開成高校の入試問題。東京最難関、全国トップクラスの数学・英語',
    maxOnly: true,
    gender: '男子',
    hensachi: '78+',
  },
  {
    key: 'koko-keio',
    examType: 'koko',
    name: '慶應義塾高校',
    shortName: '慶應',
    emoji: '🎓',
    color: '#C62828',
    level: '最難関',
    targetSchools: ['慶應義塾高校', '慶應義塾志木高校', '慶應義塾女子高校'],
    description: '慶應義塾高校の入試問題。英語・数学・国語の総合力が高水準で求められる',
    maxOnly: true,
    gender: '男子',
    hensachi: '74〜76',
  },
  {
    key: 'koko-azabu',
    examType: 'koko',
    name: '麻布高校',
    shortName: '麻布',
    emoji: '🌿',
    color: '#1B5E20',
    level: '最難関',
    targetSchools: ['麻布高校'],
    description: '麻布高校の入試問題。自由な校風を反映した論述・思考型の出題',
    maxOnly: true,
    gender: '男子',
    hensachi: '74〜76',
  },

  // ─────── 名古屋 私立高校受験 ───────
  {
    key: 'koko-tokai',
    examType: 'koko',
    name: '東海高校',
    shortName: '東海',
    emoji: '🌊',
    color: '#0D47A1',
    level: '最難関',
    targetSchools: ['東海高校'],
    description: '東海高校の入試問題。東海地区最難関、医学部・東大合格者全国有数',
    maxOnly: true,
    gender: '男子',
    hensachi: '73〜75',
  },
  {
    key: 'koko-taki',
    examType: 'koko',
    name: '滝高校',
    shortName: '滝',
    emoji: '💧',
    color: '#006064',
    level: '難関',
    targetSchools: ['滝高校'],
    description: '滝高校の入試問題。東海地区難関共学校、名大・旧帝大進学実績が高い',
    maxOnly: true,
    gender: '共学',
    hensachi: '68〜70',
  },
  {
    key: 'koko-nanzan',
    examType: 'koko',
    name: '南山高校',
    shortName: '南山',
    emoji: '🌙',
    color: '#880E4F',
    level: '難関',
    targetSchools: ['南山高校男子部', '南山高校女子部'],
    description: '南山高校の入試問題。カトリック系名門校、英語教育に強み',
    maxOnly: true,
    gender: '共学',
    hensachi: '65〜68',
  },

  // ─────── 福岡 私立高校受験 ───────
  {
    key: 'koko-kurume',
    examType: 'koko',
    name: '久留米大学附設高校',
    shortName: '久留米附設',
    emoji: '🌟',
    color: '#4E342E',
    level: '最難関',
    targetSchools: ['久留米大学附設高校'],
    description: '久留米大附設の入試問題。九州最難関、東大・京大・医学部合格者多数',
    maxOnly: true,
    gender: '共学',
    hensachi: '72〜75',
  },
  {
    key: 'koko-seinan',
    examType: 'koko',
    name: '西南学院高校',
    shortName: '西南学院',
    emoji: '✝️',
    color: '#37474F',
    level: '難関',
    targetSchools: ['西南学院高校'],
    description: '西南学院高校の入試問題。バプテスト系名門校、英語教育が充実',
    maxOnly: true,
    gender: '共学',
    hensachi: '64〜67',
  },
  {
    key: 'koko-ohori',
    examType: 'koko',
    name: '福岡大附属大濠高校',
    shortName: '大濠',
    emoji: '🏰',
    color: '#283593',
    level: '難関',
    targetSchools: ['福岡大学附属大濠高校'],
    description: '大濠高校の入試問題。福岡を代表する進学校、スーパーサイエンス指定校',
    maxOnly: true,
    gender: '共学',
    hensachi: '65〜68',
  },

  // ─────── 東京 高校受験 ───────
  {
    key: 'koko-hibiya',
    examType: 'koko',
    name: '都立日比谷高校',
    shortName: '日比谷',
    emoji: '🏆',
    color: '#1A237E',
    level: '最難関',
    targetSchools: ['都立日比谷高校', '都立西高校', '都立国立高校'],
    description: '都立最難関校の入試問題（都立一貫校・日比谷・西・国立レベル）',
    maxOnly: true,
    gender: '共学',
    hensachi: '70〜73',
  },
  {
    key: 'koko-waseda',
    examType: 'koko',
    name: '早稲田大学附属高校',
    shortName: '早稲田附属',
    emoji: '⛩️',
    color: '#B71C1C',
    level: '最難関',
    targetSchools: ['早稲田大学高等学院', '慶應義塾高校', '開成高校'],
    description: '早稲田・慶應・開成レベルの最難関私立高校入試問題',
    maxOnly: true,
    gender: '男子',
    hensachi: '72〜75',
  },
  {
    key: 'koko-meidai',
    examType: 'koko',
    name: '明大明治高校',
    shortName: '明大明治(高)',
    emoji: '🎌',
    color: '#C62828',
    level: '難関',
    targetSchools: ['明治大学附属明治高校', '法政大学附属高校', '中央大学附属高校'],
    description: '明大明治・法政・中大附属など私立難関高校入試問題',
    gender: '共学',
    hensachi: '64〜68',
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
