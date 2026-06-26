export type FPCategory =
  | 'life'        // ライフプランニング・資金計画
  | 'risk'        // リスク管理（保険）
  | 'investment'  // 金融資産運用
  | 'tax'         // タックスプランニング
  | 'real_estate' // 不動産
  | 'estate';     // 相続・事業承継

export type FPGrade = '3kyu' | '2kyu';

export type FPQuestion = {
  id: string;
  category: FPCategory;
  grade: FPGrade;
  difficulty: 'basic' | 'standard' | 'advanced';
  question: string;
  choices: string[];      // 必ず4択
  answer: string;         // 正解選択肢のテキスト
  explanation: string;    // 【解説】形式の詳細解説
  hint?: string;
  pitfall?: string;       // よくあるミス
  memoryTip?: string;     // 覚え方
  examFrequency?: 'very-high' | 'high' | 'medium' | 'low';
  isRecentChange?: boolean;
};

export const categoryInfo: Record<FPCategory, { name: string; emoji: string; color: string }> = {
  life:        { name: 'ライフ',  emoji: '🏠', color: '#4A90D9' },
  risk:        { name: 'リスク',  emoji: '🛡️', color: '#E74C3C' },
  investment:  { name: '金融',    emoji: '📈', color: '#27AE60' },
  tax:         { name: '税金',    emoji: '🧾', color: '#F39C12' },
  real_estate: { name: '不動産',  emoji: '🏢', color: '#8E44AD' },
  estate:      { name: '相続',    emoji: '📜', color: '#2C3E50' },
};
