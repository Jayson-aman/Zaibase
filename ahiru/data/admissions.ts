// 全国の中学・高校の「募集要項」への案内。
// ⚠️ 出願期間・試験日・科目・定員などは学校ごとに毎年変わる公式情報のため、
// アプリ内には具体的な日付・数値を持たない。年度を選ぶと、その学校の
// 「その年度の公式募集要項」を検索して表示する（＝常に最新の公式情報へ誘導）。
// これにより誤った出願情報を出すリスクをゼロにする。
// 学校名・所在地・種別のみを固定データとして持つ（いずれも公開の事実）。

export type SchoolExamType = 'chugaku' | 'koko';

export type AdmissionSchool = {
  id: string;
  name: string;
  type: SchoolExamType;
  prefecture: string;
  region: string;
  /** 公立/私立/国立 など（任意の補足） */
  note?: string;
};

// 主要校のシード。学校は順次追加可能（名前・所在地・種別のみ）。
export const admissionSchools: AdmissionSchool[] = [
  // ── 中学受験（首都圏）──
  { id: 'jhs_kaisei', name: '開成中学校', type: 'chugaku', prefecture: '東京都', region: '首都圏', note: '私立・男子' },
  { id: 'jhs_azabu', name: '麻布中学校', type: 'chugaku', prefecture: '東京都', region: '首都圏', note: '私立・男子' },
  { id: 'jhs_musashi', name: '武蔵中学校', type: 'chugaku', prefecture: '東京都', region: '首都圏', note: '私立・男子' },
  { id: 'jhs_komabatoho', name: '駒場東邦中学校', type: 'chugaku', prefecture: '東京都', region: '首都圏', note: '私立・男子' },
  { id: 'jhs_oin', name: '桜蔭中学校', type: 'chugaku', prefecture: '東京都', region: '首都圏', note: '私立・女子' },
  { id: 'jhs_jg', name: '女子学院中学校', type: 'chugaku', prefecture: '東京都', region: '首都圏', note: '私立・女子' },
  { id: 'jhs_toyoeiwa', name: '雙葉中学校', type: 'chugaku', prefecture: '東京都', region: '首都圏', note: '私立・女子' },
  { id: 'jhs_tsukukoma', name: '筑波大学附属駒場中学校', type: 'chugaku', prefecture: '東京都', region: '首都圏', note: '国立・男子' },
  { id: 'jhs_shibumaku', name: '渋谷教育学園幕張中学校', type: 'chugaku', prefecture: '千葉県', region: '首都圏', note: '私立・共学' },
  { id: 'jhs_ichikawa', name: '市川中学校', type: 'chugaku', prefecture: '千葉県', region: '首都圏', note: '私立・共学' },
  { id: 'jhs_urawaakenohoshi', name: '浦和明の星女子中学校', type: 'chugaku', prefecture: '埼玉県', region: '首都圏', note: '私立・女子' },
  { id: 'jhs_eiko', name: '栄光学園中学校', type: 'chugaku', prefecture: '神奈川県', region: '首都圏', note: '私立・男子' },
  { id: 'jhs_seiko', name: '聖光学院中学校', type: 'chugaku', prefecture: '神奈川県', region: '首都圏', note: '私立・男子' },
  { id: 'jhs_ferris', name: 'フェリス女学院中学校', type: 'chugaku', prefecture: '神奈川県', region: '首都圏', note: '私立・女子' },

  // ── 中学受験（関西）──
  { id: 'jhs_nada', name: '灘中学校', type: 'chugaku', prefecture: '兵庫県', region: '関西', note: '私立・男子' },
  { id: 'jhs_koyo', name: '甲陽学院中学校', type: 'chugaku', prefecture: '兵庫県', region: '関西', note: '私立・男子' },
  { id: 'jhs_rakunan', name: '洛南高等学校附属中学校', type: 'chugaku', prefecture: '京都府', region: '関西', note: '私立・共学' },
  { id: 'jhs_todaiji', name: '東大寺学園中学校', type: 'chugaku', prefecture: '奈良県', region: '関西', note: '私立・男子' },
  { id: 'jhs_nishiyamato', name: '西大和学園中学校', type: 'chugaku', prefecture: '奈良県', region: '関西', note: '私立・共学' },
  { id: 'jhs_shitennoji', name: '四天王寺中学校', type: 'chugaku', prefecture: '大阪府', region: '関西', note: '私立・女子' },
  { id: 'jhs_ote', name: '大阪星光学院中学校', type: 'chugaku', prefecture: '大阪府', region: '関西', note: '私立・男子' },

  // ── 中学受験（その他地方）──
  { id: 'jhs_lasalle', name: 'ラ・サール中学校', type: 'chugaku', prefecture: '鹿児島県', region: '九州', note: '私立・男子' },
  { id: 'jhs_kurume', name: '久留米大学附設中学校', type: 'chugaku', prefecture: '福岡県', region: '九州', note: '私立・共学' },
  { id: 'jhs_aichi_toho', name: '東海中学校', type: 'chugaku', prefecture: '愛知県', region: '東海', note: '私立・男子' },
  { id: 'jhs_hokkaido_rissei', name: '北嶺中学校', type: 'chugaku', prefecture: '北海道', region: '北海道', note: '私立・男子' },

  // ── 高校受験（公立トップ校）──
  { id: 'hs_hibiya', name: '東京都立日比谷高等学校', type: 'koko', prefecture: '東京都', region: '首都圏', note: '公立' },
  { id: 'hs_nishi', name: '東京都立西高等学校', type: 'koko', prefecture: '東京都', region: '首都圏', note: '公立' },
  { id: 'hs_kunitachi', name: '東京都立国立高等学校', type: 'koko', prefecture: '東京都', region: '首都圏', note: '公立' },
  { id: 'hs_yokohamasuiran', name: '神奈川県立横浜翠嵐高等学校', type: 'koko', prefecture: '神奈川県', region: '首都圏', note: '公立' },
  { id: 'hs_shonan', name: '神奈川県立湘南高等学校', type: 'koko', prefecture: '神奈川県', region: '首都圏', note: '公立' },
  { id: 'hs_urawa', name: '埼玉県立浦和高等学校', type: 'koko', prefecture: '埼玉県', region: '首都圏', note: '公立・男子' },
  { id: 'hs_chiba', name: '千葉県立千葉高等学校', type: 'koko', prefecture: '千葉県', region: '首都圏', note: '公立' },
  { id: 'hs_asahigaoka', name: '愛知県立旭丘高等学校', type: 'koko', prefecture: '愛知県', region: '東海', note: '公立' },
  { id: 'hs_kitano', name: '大阪府立北野高等学校', type: 'koko', prefecture: '大阪府', region: '関西', note: '公立' },
  { id: 'hs_tennoji', name: '大阪府立天王寺高等学校', type: 'koko', prefecture: '大阪府', region: '関西', note: '公立' },
  { id: 'hs_kobe', name: '兵庫県立神戸高等学校', type: 'koko', prefecture: '兵庫県', region: '関西', note: '公立' },
  { id: 'hs_shuyukan', name: '福岡県立修猷館高等学校', type: 'koko', prefecture: '福岡県', region: '九州', note: '公立' },
  { id: 'hs_sapporominami', name: '北海道札幌南高等学校', type: 'koko', prefecture: '北海道', region: '北海道', note: '公立' },
  { id: 'hs_sendaiichi', name: '宮城県仙台第二高等学校', type: 'koko', prefecture: '宮城県', region: '東北', note: '公立' },

  // ── 高校受験（私立・国立の難関）──
  { id: 'hs_kaisei', name: '開成高等学校', type: 'koko', prefecture: '東京都', region: '首都圏', note: '私立・男子' },
  { id: 'hs_tsukuba', name: '筑波大学附属高等学校', type: 'koko', prefecture: '東京都', region: '首都圏', note: '国立・共学' },
  { id: 'hs_waseda_honjo', name: '早稲田大学本庄高等学院', type: 'koko', prefecture: '埼玉県', region: '首都圏', note: '私立・共学' },
  { id: 'hs_keio_shonan', name: '慶應義塾湘南藤沢高等部', type: 'koko', prefecture: '神奈川県', region: '首都圏', note: '私立・共学' },
  { id: 'hs_nada', name: '灘高等学校', type: 'koko', prefecture: '兵庫県', region: '関西', note: '私立・男子' },
  { id: 'hs_nishiyamato', name: '西大和学園高等学校', type: 'koko', prefecture: '奈良県', region: '関西', note: '私立・共学' },
];

export const REGIONS = ['首都圏', '東海', '関西', '東北', '北海道', '九州'] as const;

/** その学校・その年度の公式募集要項を検索するURL（常に最新の公式情報へ誘導） */
export function admissionSearchUrl(school: AdmissionSchool, yearLabel: string): string {
  const q = `${school.name} ${yearLabel} 募集要項 入試`;
  return `https://www.google.com/search?q=${encodeURIComponent(q)}`;
}
