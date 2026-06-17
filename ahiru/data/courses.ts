export type ExamType = 'chugaku' | 'koko';

export type CourseKey =
  | 'general'      // 中学受験 一般
  | 'kankan'       // 関関同立附属中学
  | 'shitennoji'   // 四天王寺学園中学
  | 'nandai'       // 最難関（灘・甲陽・東大寺）
  | 'koko-general' // 高校受験 公立一般
  | 'koko-kankan'  // 高校受験 関関同立附属
  | 'koko-top';    // 高校受験 最難関（天王寺・北野）

export type CourseInfo = {
  key: CourseKey;
  examType: ExamType;
  name: string;
  shortName: string;
  emoji: string;
  color: string;
  level: string;
  targetSchools: string[];
  description: string;
};

export const ALL_COURSES: CourseInfo[] = [
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
  },
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
  },
];

export const CHUGAKU_COURSES = ALL_COURSES.filter((c) => c.examType === 'chugaku');
export const KOKO_COURSES = ALL_COURSES.filter((c) => c.examType === 'koko');

export function getCourseInfo(key: CourseKey): CourseInfo {
  return ALL_COURSES.find((c) => c.key === key) ?? ALL_COURSES[0];
}
