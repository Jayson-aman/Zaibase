// 単元別（種類別）学習のための問題分類。
// 問題文（＋passageの有無）からキーワードで自動分類する。
// 1つの問題が複数の単元に該当してもよい（それぞれの単元から解ける）。

import type { Question, SubjectKey } from './questions-meta';

export type Topic = {
  id: string;
  label: string;
  emoji: string;
  /** question 文にこのいずれかが含まれれば該当 */
  keywords?: string[];
  /** passage（長文）がある問題を対象にする */
  requiresPassage?: boolean;
};

export const topicsBySubject: Record<SubjectKey, Topic[]> = {
  sansu: [
    { id: 'kansuu', label: '関数・グラフ（一次関数・比例など）', emoji: '📈', keywords: ['一次関数', '二次関数', '比例', '反比例', '放物線', 'y=', 'y =', 'グラフ', '座標', '傾き', '切片', '変化の割合'] },
    { id: 'wariai', label: '割合・比・濃度', emoji: '🧮', keywords: ['割合', '百分率', '割引', '定価', '原価', '利益', '食塩水', '濃度', 'の比', '比で', '比は', '歩合'] },
    { id: 'hayasa', label: '速さ・旅人算', emoji: '🏃', keywords: ['速さ', '時速', '分速', '秒速', '旅人算', '流水算', '通過算', '追いつ', '出会', 'ダイヤグラム'] },
    { id: 'zukei', label: '平面図形（面積・角度・相似）', emoji: '📐', keywords: ['面積', '角度', '∠', '三角形', '四角形', '平行四辺形', '台形', 'ひし形', '円周', 'おうぎ形', '相似', '合同', '二等辺', '正方形', '長方形', '対角線', '円周角'] },
    { id: 'rittai', label: '立体図形（体積・表面積）', emoji: '🧊', keywords: ['体積', '表面積', '立方体', '直方体', '円柱', '円すい', '円錐', '展開図', '角柱', '角すい', '球の', '回転体'] },
    { id: 'hoteishiki', label: '方程式・式の計算', emoji: '🔢', keywords: ['方程式', '連立', '因数分解', '展開し', '平方根', '√', '不等式', '文字式', '式の値', '解を求め', '解け'] },
    { id: 'baai', label: '場合の数・確率', emoji: '🎲', keywords: ['場合の数', '確率', '何通り', '組み合わせ', '順列', 'さいころ', 'サイコロ', '樹形図', 'ならべ方', '選び方'] },
    { id: 'seisuu', label: '数の性質・規則性', emoji: '🔍', keywords: ['約数', '倍数', '素数', '規則', '数列', '等差', '整数の', '余り', 'あまり', 'N進法', '2進法'] },
    { id: 'tokushu', label: '文章題・特殊算', emoji: '📝', keywords: ['つるかめ算', '鶴亀算', '仕事算', '植木算', '年齢算', '和差算', '平均算', '相当算', 'ニュートン算', '時計算', '過不足算', '差集め算'] },
    { id: 'data', label: 'データの活用・統計', emoji: '📊', keywords: ['平均値', '中央値', '最頻値', '度数', 'ヒストグラム', '箱ひげ図', '四分位', '散らばり', '代表値'] },
  ],
  kokugo: [
    { id: 'choubun', label: '長文読解', emoji: '📖', requiresPassage: true },
    { id: 'kanji', label: '漢字・語句', emoji: '✍️', keywords: ['漢字', '読みを', 'カタカナを漢字', '対義語', '類義語', '慣用句', 'ことわざ', '四字熟語', '部首', '熟語の'] },
    { id: 'bunpou', label: '文法・敬語', emoji: '📚', keywords: ['品詞', '動詞', '形容詞', '助詞', '助動詞', '敬語', '尊敬語', '謙譲語', '丁寧語', '文節', '主語', '述語', '活用'] },
    { id: 'kobun', label: '古文・漢文・韻文', emoji: '🎎', keywords: ['古文', '漢文', '現代語訳', '係り結び', '返り点', '枕草子', '徒然草', '平家物語', '百人一首', '和歌', '俳句', '短歌', '季語', '万葉集'] },
    { id: 'hyougen', label: '表現技法', emoji: '🎨', keywords: ['比喩', '擬人法', '直喩', '隠喩', '倒置', '体言止め', '反復', '表現技法'] },
  ],
  rika: [
    { id: 'butsuri', label: '物理（力・電気・光・音）', emoji: '⚡', keywords: ['電流', '電圧', '抵抗', 'オーム', '回路', '豆電球', 'てこ', 'ばね', '滑車', 'ふりこ', '光の', '凸レンズ', '音の', '圧力', '浮力', 'エネルギー', '磁石', '電磁石', '磁界', '仕事率'] },
    { id: 'kagaku', label: '化学（水溶液・気体・反応）', emoji: '🧪', keywords: ['水溶液', '気体', '酸素', '二酸化炭素', '水素', '塩酸', 'アルカリ', '中和', '燃焼', '溶解度', '化学反応', '化学変化', '酸化', '還元', 'イオン', '分子', '原子', '飽和', '再結晶', '状態変化'] },
    { id: 'seibutsu', label: '生物（植物・動物・人体）', emoji: '🌱', keywords: ['植物', '光合成', '呼吸', '蒸散', '発芽', '消化', '血液', '心臓', '肺', '細胞', '遺伝', 'こん虫', '昆虫', '種子', '花の', 'メダカ', '食物連鎖', '生態系', 'デンプン'] },
    { id: 'chigaku', label: '地学（天気・地層・天体）', emoji: '🌋', keywords: ['地層', '火山', '地震', '天気', '気温', '湿度', '前線', '台風', '月の', '星の', '星座', '太陽', '惑星', '岩石', '化石', '断層', '柱状図', '飽和水蒸気'] },
  ],
  shakai: [
    { id: 'chiri', label: '地理', emoji: '🗾', keywords: ['都道府県', '県庁', '平野', '山脈', '川', '気候', '農業', '漁業', '工業', '貿易', '地図', '人口', '雨温図', '産地', '盆地', '大陸', '地形図', '縮尺', '促成栽培', '抑制栽培'] },
    { id: 'rekishi', label: '歴史', emoji: '📜', keywords: ['時代', '幕府', '天皇', '将軍', '条約', '縄文', '弥生', '古墳', '飛鳥', '奈良', '平安', '鎌倉', '室町', '安土桃山', '江戸', '明治', '大正', '昭和', '織田', '豊臣', '徳川', '源頼朝', '改革', '維新', '戦国', '大戦'] },
    { id: 'koumin', label: '公民', emoji: '⚖️', keywords: ['憲法', '国会', '内閣', '裁判', '選挙', '税', '人権', '三権', '地方自治', '国際連合', '国連', '経済', '株式', '需要', '供給', '円高', '円安', '社会保障'] },
  ],
  eigo: [
    { id: 'choubun', label: '長文読解', emoji: '📖', requiresPassage: true },
    { id: 'bunpou', label: '文法', emoji: '📚', keywords: ['現在完了', '不定詞', '動名詞', '関係代名詞', '受動態', '受け身', '比較', '助動詞', '分詞', '仮定法', '時制', 'be動詞', '疑問詞', '命令文', '接続詞', '前置詞', '三人称'] },
    { id: 'sakubun', label: '英作文・並べかえ', emoji: '✏️', keywords: ['並べかえ', '並べ替え', '英作文', '語順', '日本語に合うように', '英語に直し', '英文に'] },
    { id: 'kaiwa', label: '会話表現', emoji: '💬', keywords: ['会話', '対話', '応答', '返答', 'あいさつ'] },
  ],
};

export function questionMatchesTopic(q: Question, topic: Topic): boolean {
  if (topic.requiresPassage) return q.passage != null && q.passage.length > 0;
  if (!topic.keywords) return false;
  const text = q.question;
  return topic.keywords.some((k) => text.includes(k));
}

export function getTopic(subject: SubjectKey, topicId: string): Topic | null {
  return topicsBySubject[subject]?.find((t) => t.id === topicId) ?? null;
}
