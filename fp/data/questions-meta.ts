export type FPSubject =
  | 'life'        // ライフプランニングと資金計画
  | 'risk'        // リスク管理（保険）
  | 'investment'  // 金融資産運用
  | 'tax'         // タックスプランニング
  | 'real_estate' // 不動産
  | 'estate';     // 相続・事業承継

export type FPChoiceKey = 'A' | 'B' | 'C' | 'D';

export type FPChoice = {
  key: FPChoiceKey;
  text: string;
  explanation: string; // 正解・不正解の理由
};

export type FPQuestion = {
  id: string;
  subject: FPSubject;
  subjectName: string;
  question: string;
  choices: FPChoice[]; // 必ず4択（A/B/C/D）
  correctKey: FPChoiceKey;
  explanation: string; // 総合解説
  difficulty: 'basic' | 'standard' | 'advanced';
  level: '3級' | '2級' | '1級';
  examFrequency?: 'very-high' | 'high' | 'medium' | 'low';
  isRecentChange?: boolean;
};

export const subjectInfo: Record<FPSubject, { name: string; emoji: string; color: string }> = {
  life:        { name: 'ライフ',  emoji: '🏠', color: '#4A90D9' },
  risk:        { name: 'リスク',  emoji: '🛡️', color: '#E74C3C' },
  investment:  { name: '金融',    emoji: '📈', color: '#27AE60' },
  tax:         { name: '税金',    emoji: '🧾', color: '#F39C12' },
  real_estate: { name: '不動産',  emoji: '🏢', color: '#8E44AD' },
  estate:      { name: '相続',    emoji: '📜', color: '#2C3E50' },
};
