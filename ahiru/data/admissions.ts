// 全国の中学・高校の「募集要項」への案内。
// ⚠️ 出願期間・試験日・科目・定員などは学校ごとに毎年変わる公式情報のため、
// アプリ内には具体的な日付・数値を持たない。年度を選ぶと、その学校の
// 「その年度の公式募集要項」を検索して表示する（＝常に最新の公式情報へ誘導）。
// これにより誤った出願情報を出すリスクをゼロにする。
// 学校名・所在地・種別のみを固定データとして持つ（いずれも公開の事実）。

export type SchoolExamType = 'chugaku' | 'koko';

/** top = 難関校、standard = 標準レベル（地域の代表的な公立・私立校） */
export type SchoolLevel = 'top' | 'standard';

export type AdmissionSchool = {
  id: string;
  name: string;
  type: SchoolExamType;
  prefecture: string;
  region: string;
  /** 公立/私立/国立 など（任意の補足） */
  note?: string;
  /** 難関(top) か標準レベル(standard) か。省略時は 'top' 扱い。 */
  level?: SchoolLevel;
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

  // ── 中学受験（標準レベル・首都圏・私立中堅）──
  { id: 'jhs_setagayagakuen', name: '世田谷学園中学校', type: 'chugaku', prefecture: '東京都', region: '首都圏', note: '私立・男子', level: 'standard' },
  { id: 'jhs_sugamo', name: '巣鴨中学校', type: 'chugaku', prefecture: '東京都', region: '首都圏', note: '私立・男子', level: 'standard' },
  { id: 'jhs_hiroo', name: '広尾学園中学校', type: 'chugaku', prefecture: '東京都', region: '首都圏', note: '私立・共学', level: 'standard' },
  { id: 'jhs_mita_kokusai', name: '三田国際学園中学校', type: 'chugaku', prefecture: '東京都', region: '首都圏', note: '私立・共学', level: 'standard' },
  { id: 'jhs_toin_gakuen', name: '桐蔭学園中学校', type: 'chugaku', prefecture: '神奈川県', region: '首都圏', note: '私立・共学', level: 'standard' },
  { id: 'jhs_zushi_kaisei', name: '逗子開成中学校', type: 'chugaku', prefecture: '神奈川県', region: '首都圏', note: '私立・男子', level: 'standard' },
  { id: 'jhs_saito', name: '栄東中学校', type: 'chugaku', prefecture: '埼玉県', region: '首都圏', note: '私立・共学', level: 'standard' },
  { id: 'jhs_shukutoku_yono', name: '淑徳与野中学校', type: 'chugaku', prefecture: '埼玉県', region: '首都圏', note: '私立・女子', level: 'standard' },
  { id: 'jhs_toho_daitoho', name: '東邦大学付属東邦中学校', type: 'chugaku', prefecture: '千葉県', region: '首都圏', note: '私立・共学', level: 'standard' },
  { id: 'jhs_showagakuin_shuei', name: '昭和学院秀英中学校', type: 'chugaku', prefecture: '千葉県', region: '首都圏', note: '私立・共学', level: 'standard' },

  // ── 中学受験（標準レベル・関西）──
  { id: 'jhs_seifu', name: '清風中学校', type: 'chugaku', prefecture: '大阪府', region: '関西', note: '私立・男子', level: 'standard' },
  { id: 'jhs_takatsuki', name: '高槻中学校', type: 'chugaku', prefecture: '大阪府', region: '関西', note: '私立・共学', level: 'standard' },
  { id: 'jhs_osakatoin', name: '大阪桐蔭中学校', type: 'chugaku', prefecture: '大阪府', region: '関西', note: '私立・共学', level: 'standard' },
  { id: 'jhs_suma_gakuen', name: '須磨学園中学校', type: 'chugaku', prefecture: '兵庫県', region: '関西', note: '私立・共学', level: 'standard' },
  { id: 'jhs_hakuryo', name: '白陵中学校', type: 'chugaku', prefecture: '兵庫県', region: '関西', note: '私立・共学', level: 'standard' },
  { id: 'jhs_doshisha', name: '同志社中学校', type: 'chugaku', prefecture: '京都府', region: '関西', note: '私立・共学', level: 'standard' },
  { id: 'jhs_ritsumeikan', name: '立命館中学校', type: 'chugaku', prefecture: '京都府', region: '関西', note: '私立・共学', level: 'standard' },

  // ── 中学受験（標準レベル・東海）──
  { id: 'jhs_nanzan_joshi', name: '南山中学校女子部', type: 'chugaku', prefecture: '愛知県', region: '東海', note: '私立・女子', level: 'standard' },
  { id: 'jhs_taki', name: '滝中学校', type: 'chugaku', prefecture: '愛知県', region: '東海', note: '私立・共学', level: 'standard' },

  // ── 中学受験（標準レベル・九州）──
  { id: 'jhs_fukudai_ohori', name: '福岡大学附属大濠中学校', type: 'chugaku', prefecture: '福岡県', region: '九州', note: '私立・共学', level: 'standard' },
  { id: 'jhs_meiji_gakuen', name: '明治学園中学校', type: 'chugaku', prefecture: '福岡県', region: '九州', note: '私立・共学', level: 'standard' },

  // ── 高校受験（標準レベル・都道府県別の代表的な公立校）──
  { id: 'hs_std_hokkaido', name: '北海道札幌北高等学校', type: 'koko', prefecture: '北海道', region: '北海道', note: '公立', level: 'standard' },
  { id: 'hs_std_aomori', name: '青森県立青森高等学校', type: 'koko', prefecture: '青森県', region: '東北', note: '公立', level: 'standard' },
  { id: 'hs_std_iwate', name: '岩手県立盛岡第三高等学校', type: 'koko', prefecture: '岩手県', region: '東北', note: '公立', level: 'standard' },
  { id: 'hs_std_miyagi', name: '宮城県仙台第三高等学校', type: 'koko', prefecture: '宮城県', region: '東北', note: '公立', level: 'standard' },
  { id: 'hs_std_akita', name: '秋田県立秋田南高等学校', type: 'koko', prefecture: '秋田県', region: '東北', note: '公立', level: 'standard' },
  { id: 'hs_std_yamagata', name: '山形県立山形南高等学校', type: 'koko', prefecture: '山形県', region: '東北', note: '公立', level: 'standard' },
  { id: 'hs_std_fukushima', name: '福島県立橘高等学校', type: 'koko', prefecture: '福島県', region: '東北', note: '公立', level: 'standard' },
  { id: 'hs_std_ibaraki', name: '茨城県立水戸第二高等学校', type: 'koko', prefecture: '茨城県', region: '首都圏', note: '公立・女子', level: 'standard' },
  { id: 'hs_std_tochigi', name: '栃木県立宇都宮南高等学校', type: 'koko', prefecture: '栃木県', region: '首都圏', note: '公立', level: 'standard' },
  { id: 'hs_std_gunma', name: '群馬県立前橋女子高等学校', type: 'koko', prefecture: '群馬県', region: '首都圏', note: '公立・女子', level: 'standard' },
  { id: 'hs_std_saitama', name: '埼玉県立越谷北高等学校', type: 'koko', prefecture: '埼玉県', region: '首都圏', note: '公立', level: 'standard' },
  { id: 'hs_std_chiba', name: '千葉県立千葉東高等学校', type: 'koko', prefecture: '千葉県', region: '首都圏', note: '公立', level: 'standard' },
  { id: 'hs_std_tokyo', name: '東京都立三田高等学校', type: 'koko', prefecture: '東京都', region: '首都圏', note: '公立', level: 'standard' },
  { id: 'hs_std_kanagawa', name: '神奈川県立横浜緑ケ丘高等学校', type: 'koko', prefecture: '神奈川県', region: '首都圏', note: '公立', level: 'standard' },
  { id: 'hs_std_niigata', name: '新潟県立新潟南高等学校', type: 'koko', prefecture: '新潟県', region: '甲信越', note: '公立', level: 'standard' },
  { id: 'hs_std_toyama', name: '富山県立富山東高等学校', type: 'koko', prefecture: '富山県', region: '北陸', note: '公立', level: 'standard' },
  { id: 'hs_std_ishikawa', name: '石川県立金沢二水高等学校', type: 'koko', prefecture: '石川県', region: '北陸', note: '公立', level: 'standard' },
  { id: 'hs_std_fukui', name: '福井県立高志高等学校', type: 'koko', prefecture: '福井県', region: '北陸', note: '公立', level: 'standard' },
  { id: 'hs_std_yamanashi', name: '山梨県立甲府南高等学校', type: 'koko', prefecture: '山梨県', region: '甲信越', note: '公立', level: 'standard' },
  { id: 'hs_std_nagano', name: '長野県長野西高等学校', type: 'koko', prefecture: '長野県', region: '甲信越', note: '公立', level: 'standard' },
  { id: 'hs_std_gifu', name: '岐阜県立岐阜北高等学校', type: 'koko', prefecture: '岐阜県', region: '東海', note: '公立', level: 'standard' },
  { id: 'hs_std_shizuoka', name: '静岡県立静岡東高等学校', type: 'koko', prefecture: '静岡県', region: '東海', note: '公立', level: 'standard' },
  { id: 'hs_std_aichi', name: '愛知県立千種高等学校', type: 'koko', prefecture: '愛知県', region: '東海', note: '公立', level: 'standard' },
  { id: 'hs_std_mie', name: '三重県立津西高等学校', type: 'koko', prefecture: '三重県', region: '東海', note: '公立', level: 'standard' },
  { id: 'hs_std_shiga', name: '滋賀県立大津高等学校', type: 'koko', prefecture: '滋賀県', region: '関西', note: '公立', level: 'standard' },
  { id: 'hs_std_kyoto', name: '京都府立鴨沂高等学校', type: 'koko', prefecture: '京都府', region: '関西', note: '公立', level: 'standard' },
  { id: 'hs_std_osaka', name: '大阪府立生野高等学校', type: 'koko', prefecture: '大阪府', region: '関西', note: '公立', level: 'standard' },
  { id: 'hs_std_hyogo', name: '兵庫県立御影高等学校', type: 'koko', prefecture: '兵庫県', region: '関西', note: '公立', level: 'standard' },
  { id: 'hs_std_nara', name: '奈良県立奈良北高等学校', type: 'koko', prefecture: '奈良県', region: '関西', note: '公立', level: 'standard' },
  { id: 'hs_std_wakayama', name: '和歌山県立向陽高等学校', type: 'koko', prefecture: '和歌山県', region: '関西', note: '公立', level: 'standard' },
  { id: 'hs_std_tottori', name: '鳥取県立鳥取東高等学校', type: 'koko', prefecture: '鳥取県', region: '中国', note: '公立', level: 'standard' },
  { id: 'hs_std_shimane', name: '島根県立松江南高等学校', type: 'koko', prefecture: '島根県', region: '中国', note: '公立', level: 'standard' },
  { id: 'hs_std_okayama', name: '岡山県立岡山操山高等学校', type: 'koko', prefecture: '岡山県', region: '中国', note: '公立', level: 'standard' },
  { id: 'hs_std_hiroshima', name: '広島県立広島国泰寺高等学校', type: 'koko', prefecture: '広島県', region: '中国', note: '公立', level: 'standard' },
  { id: 'hs_std_yamaguchi', name: '山口県立宇部高等学校', type: 'koko', prefecture: '山口県', region: '中国', note: '公立', level: 'standard' },
  { id: 'hs_std_tokushima', name: '徳島県立徳島北高等学校', type: 'koko', prefecture: '徳島県', region: '四国', note: '公立', level: 'standard' },
  { id: 'hs_std_kagawa', name: '香川県立高松西高等学校', type: 'koko', prefecture: '香川県', region: '四国', note: '公立', level: 'standard' },
  { id: 'hs_std_ehime', name: '愛媛県立松山南高等学校', type: 'koko', prefecture: '愛媛県', region: '四国', note: '公立', level: 'standard' },
  { id: 'hs_std_kochi', name: '高知県立高知丸の内高等学校', type: 'koko', prefecture: '高知県', region: '四国', note: '公立', level: 'standard' },
  { id: 'hs_std_fukuoka', name: '福岡県立福岡高等学校', type: 'koko', prefecture: '福岡県', region: '九州', note: '公立', level: 'standard' },
  { id: 'hs_std_saga', name: '佐賀県立佐賀北高等学校', type: 'koko', prefecture: '佐賀県', region: '九州', note: '公立', level: 'standard' },
  { id: 'hs_std_nagasaki', name: '長崎県立長崎南高等学校', type: 'koko', prefecture: '長崎県', region: '九州', note: '公立', level: 'standard' },
  { id: 'hs_std_kumamoto', name: '熊本県立熊本北高等学校', type: 'koko', prefecture: '熊本県', region: '九州', note: '公立', level: 'standard' },
  { id: 'hs_std_oita', name: '大分県立大分南高等学校', type: 'koko', prefecture: '大分県', region: '九州', note: '公立', level: 'standard' },
  { id: 'hs_std_miyazaki', name: '宮崎県立宮崎大宮高等学校', type: 'koko', prefecture: '宮崎県', region: '九州', note: '公立', level: 'standard' },
  { id: 'hs_std_kagoshima', name: '鹿児島県立鹿児島中央高等学校', type: 'koko', prefecture: '鹿児島県', region: '九州', note: '公立', level: 'standard' },
  { id: 'hs_std_okinawa', name: '沖縄県立那覇高等学校', type: 'koko', prefecture: '沖縄県', region: '沖縄', note: '公立', level: 'standard' },
];

export const REGIONS = [
  '首都圏', '東海', '関西', '東北', '北海道', '九州',
  '甲信越', '北陸', '中国', '四国', '沖縄',
] as const;

export const LEVELS: { key: SchoolLevel; label: string }[] = [
  { key: 'top', label: '難関校' },
  { key: 'standard', label: '標準レベル' },
];

/** その学校・その年度の公式募集要項を検索するURL（常に最新の公式情報へ誘導） */
export function admissionSearchUrl(school: AdmissionSchool, yearLabel: string): string {
  const q = `${school.name} ${yearLabel} 募集要項 入試`;
  return `https://www.google.com/search?q=${encodeURIComponent(q)}`;
}
