export type VocabLevel =
  | 'junior_basic'    // 中学基礎
  | 'junior_std'      // 中学標準
  | 'senior_basic'    // 高校基礎
  | 'senior_std'      // 高校標準
  | 'entrance'        // 受験重要語
  | 'eiken_pre2'      // 英検準2級
  | 'eiken_2'         // 英検2級
  | 'eiken_1'         // 英検1級
  | 'toeic_800';      // TOEIC800点レベル

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
  eiken_pre2:    '英検準2級',
  eiken_2:       '英検2級',
  eiken_1:       '英検1級',
  toeic_800:     'TOEIC800',
};

// レベル別カラー（カード・タグ・フィルターの色分け表示に使用）
export const levelColor: Record<VocabLevel, { bg: string; border: string; text: string }> = {
  junior_basic:  { bg: 'rgba(74,144,217,0.14)',  border: 'rgba(74,144,217,0.4)',  text: '#7FB2E8' }, // 青
  junior_std:    { bg: 'rgba(46,196,182,0.14)',  border: 'rgba(46,196,182,0.4)',  text: '#2EC4B6' }, // 青緑
  senior_basic:  { bg: 'rgba(122,201,67,0.14)',  border: 'rgba(122,201,67,0.4)',  text: '#8FDB4E' }, // 緑
  senior_std:    { bg: 'rgba(200,168,75,0.16)',  border: 'rgba(200,168,75,0.45)', text: '#D9BC66' }, // 金
  entrance:      { bg: 'rgba(233,140,60,0.16)',  border: 'rgba(233,140,60,0.45)', text: '#E9A860' }, // 橙
  eiken_pre2:    { bg: 'rgba(160,100,220,0.15)', border: 'rgba(160,100,220,0.4)', text: '#B48CE8' }, // 紫（淡）
  eiken_2:       { bg: 'rgba(140,70,220,0.17)',  border: 'rgba(140,70,220,0.45)', text: '#A064DC' }, // 紫
  eiken_1:       { bg: 'rgba(220,70,120,0.16)',  border: 'rgba(220,70,120,0.45)', text: '#F06090' }, // 濃いピンク・赤紫
  toeic_800:     { bg: 'rgba(220,50,50,0.15)',   border: 'rgba(220,50,50,0.42)', text: '#E85858' }, // 赤
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
  conversation:  '日常英会話',
};
