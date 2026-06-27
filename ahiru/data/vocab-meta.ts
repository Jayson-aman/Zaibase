export type VocabLevel =
  | 'junior_basic'    // 中学基礎
  | 'junior_std'      // 中学標準
  | 'senior_basic'    // 高校基礎
  | 'senior_std'      // 高校標準
  | 'entrance';       // 受験重要語

export type VocabPos =
  | 'n.'    // 名詞
  | 'v.'    // 動詞
  | 'vi.'   // 自動詞
  | 'vt.'   // 他動詞
  | 'adj.'  // 形容詞
  | 'adv.'  // 副詞
  | 'prep.' // 前置詞
  | 'conj.' // 接続詞
  | 'phr.'  // 熟語・フレーズ
  | 'idiom';// イディオム

export type VocabEntry = {
  id: string;
  word: string;           // 英単語または熟語
  pronunciation: string;  // カタカナ読み（例: アクセプト）
  pos: VocabPos;
  meaning: string;        // メイン日本語訳
  meanings?: string[];    // 複数の意味（品詞別）
  example: string;        // 英語例文
  exampleJa: string;      // 例文和訳
  level: VocabLevel;
  category: string;       // テーマ（science, society, nature, health, daily...）
  frequency: 'very-high' | 'high' | 'medium';
  isPhrase: boolean;      // 熟語フラグ
  leapUnit?: number;      // LEAP参照ユニット番号
};

export const levelLabel: Record<VocabLevel, string> = {
  junior_basic:  '中学基礎',
  junior_std:    '中学標準',
  senior_basic:  '高校基礎',
  senior_std:    '高校標準',
  entrance:      '受験重要',
};

export const categoryLabel: Record<string, string> = {
  science:       '科学・技術',
  society:       '社会・文化',
  nature:        '自然・環境',
  health:        '健康・医療',
  daily:         '日常生活',
  education:     '教育・学習',
  travel:        '旅行・交通',
  business:      'ビジネス',
  emotion:       '感情・思考',
  phrase:        '熟語・表現',
};
