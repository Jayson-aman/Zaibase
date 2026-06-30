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
  word: string;
  pronunciation: string;   // カタカナ読み
  ipa?: string;            // IPA発音記号（例: [wɑ́tər]）
  pos: VocabPos;
  meaning: string;         // メイン日本語訳
  meanings?: string[];     // 番号付き複数の意味（例: ['①後ろへ', '②もとへ']）
  example: string;
  exampleJa: string;
  example2?: string;       // 追加例文
  example2Ja?: string;
  level: VocabLevel;
  category: string;
  frequency: 'very-high' | 'high' | 'medium';
  isPhrase: boolean;
  leapUnit?: number;
  keyPoint?: string;       // ここが大切（用法・文法注意・ニュアンス）
  setNote?: string;        // セットで暗記（関連語・対義語・派生語）
  memoryHook?: string;     // 覚え方ダブル（語源・語呂合わせ）
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
