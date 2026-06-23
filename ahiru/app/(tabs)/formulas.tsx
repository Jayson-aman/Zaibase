import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

type Subject = '算数' | '理科' | '社会';

const SUBJECTS: { key: Subject; emoji: string; color: string }[] = [
  { key: '算数', emoji: '📐', color: '#4A90D9' },
  { key: '理科', emoji: '🔬', color: '#27AE60' },
  { key: '社会', emoji: '🌍', color: '#F39C12' },
];

type FormulaSection = {
  title: string;
  items: { label: string; formula: string; note?: string }[];
};

const FORMULAS: Record<Subject, FormulaSection[]> = {
  算数: [
    {
      title: '面積・体積',
      items: [
        { label: '長方形の面積', formula: '縦 × 横', note: '正方形も同じ（辺 × 辺）' },
        { label: '三角形の面積', formula: '底辺 × 高さ ÷ 2' },
        { label: '平行四辺形の面積', formula: '底辺 × 高さ' },
        { label: 'ひし形の面積', formula: '対角線 × 対角線 ÷ 2' },
        { label: '台形の面積', formula: '（上底 + 下底）× 高さ ÷ 2' },
        { label: '円の面積', formula: '半径 × 半径 × 3.14（π）' },
        { label: '円の周の長さ', formula: '直径 × 3.14（= 2 × 半径 × π）' },
        { label: '直方体・立方体の体積', formula: '縦 × 横 × 高さ' },
        { label: '円柱の体積', formula: '底面積（半径²×π）× 高さ' },
        { label: '三角柱の体積', formula: '底面積（三角形）× 高さ' },
        { label: '球の体積', formula: '4/3 × π × 半径³', note: '中学受験では稀' },
      ],
    },
    {
      title: '速さ',
      items: [
        { label: '速さの基本', formula: '速さ = 距離 ÷ 時間' },
        { label: '距離', formula: '距離 = 速さ × 時間' },
        { label: '時間', formula: '時間 = 距離 ÷ 速さ' },
        { label: '旅人算（向かい合い）', formula: '出会うまでの時間 = 距離 ÷ （速さの和）' },
        { label: '旅人算（追いかけ）', formula: '追いつくまでの時間 = 差 ÷ （速さの差）' },
        { label: '流水算（下り）', formula: '下りの速さ = 静水時の速さ + 流速' },
        { label: '流水算（上り）', formula: '上りの速さ = 静水時の速さ − 流速' },
        { label: '単位換算', formula: '時速 ÷ 3.6 = 秒速（m/s）', note: '時速60km = 秒速16.7m' },
      ],
    },
    {
      title: '割合・比',
      items: [
        { label: '割合の基本', formula: '割合 = 比べる量 ÷ もとにする量' },
        { label: '百分率', formula: '割合 × 100 = ％' },
        { label: '食塩水の濃度', formula: '食塩の量 ÷ 食塩水の量 × 100（%）' },
        { label: '利益', formula: '利益 = 売値 − 原価' },
        { label: '定価', formula: '定価 = 原価 × (1 + 利益率)' },
        { label: '比の計算', formula: 'a:b = ka:kb（同じ数をかけても変わらない）' },
      ],
    },
    {
      title: '数列・場合の数',
      items: [
        { label: '等差数列の和', formula: '（はじめ + おわり）× 個数 ÷ 2' },
        { label: '等差数列の項数', formula: '（おわり − はじめ）÷ 公差 + 1' },
        { label: '1〜nの和', formula: 'n×(n+1)÷2', note: '1〜100 = 5050' },
        { label: '順列（並べ方）', formula: 'nPr = n! ÷ (n−r)!', note: '5人から3人選んで並べる = 5×4×3 = 60' },
        { label: '組み合わせ（選び方）', formula: 'nCr = nPr ÷ r!', note: '5人から3人選ぶ = 60÷6 = 10' },
      ],
    },
    {
      title: '仕事・ニュートン算・植木算',
      items: [
        { label: '仕事算', formula: '仕事全体を「1」として1日あたりの量を計算', note: 'AとBで6日かかるなら合計で1/6+1/6 ≠ 1日の量を足す' },
        { label: 'ニュートン算', formula: '（増加量 × 日数 + 初期量）÷ 1日の処理量 = 終了日', note: '水や客が増えながら減る問題' },
        { label: '植木算（直線）', formula: '本数 = 間の数 + 1（両端に植える場合）' },
        { label: '植木算（円形）', formula: '本数 = 間の数（閉じた図形）' },
      ],
    },
    {
      title: '図形の性質',
      items: [
        { label: '三角形の内角の和', formula: '180度' },
        { label: '四角形の内角の和', formula: '360度' },
        { label: 'n角形の内角の和', formula: '(n−2) × 180度' },
        { label: '円周角の定理', formula: '円周角 = 中心角 ÷ 2', note: '同じ弧に対する円周角は等しい' },
        { label: '直角三角形（3・4・5）', formula: '3² + 4² = 5²（ピタゴラス数）', note: '6・8・10、5・12・13も' },
        { label: '相似比と面積比', formula: '面積比 = 相似比²', note: '相似比2:3なら面積比4:9' },
      ],
    },
  ],
  理科: [
    {
      title: 'てこ・滑車',
      items: [
        { label: 'てこのつり合い', formula: '力 × 腕の長さ（左） = 力 × 腕の長さ（右）' },
        { label: '動滑車', formula: '必要な力 = 重さ ÷ 2（ひもを引く距離は2倍）' },
        { label: '定滑車', formula: '力の方向が変わるだけ（力の大きさは変わらない）' },
      ],
    },
    {
      title: '電気・回路',
      items: [
        { label: '直列回路の電流', formula: '全体の電流 = どこでも同じ（変わらない）' },
        { label: '並列回路の電流', formula: '枝分かれしたところで電流が分かれる' },
        { label: '直列の抵抗', formula: '合計抵抗 = 抵抗の和（R₁+R₂）' },
        { label: '並列の抵抗', formula: '1/R = 1/R₁ + 1/R₂' },
        { label: '電力', formula: '電力(W) = 電圧(V) × 電流(A)' },
      ],
    },
    {
      title: '密度・浮力',
      items: [
        { label: '密度', formula: '密度 = 質量 ÷ 体積（g/cm³）', note: '水の密度 = 1g/cm³' },
        { label: '浮力', formula: '浮力 = 押しのけた液体の重さ', note: '沈んだ体積 × 液体の密度 × 重力' },
        { label: '沈む・浮く条件', formula: '物体の密度 > 液体の密度 → 沈む', note: '< なら浮く' },
      ],
    },
    {
      title: '溶解度・水溶液',
      items: [
        { label: '濃度', formula: '濃度（%）= 溶質 ÷ （溶質+溶媒）× 100' },
        { label: '溶解度', formula: '100gの水に溶ける最大量（温度によって変わる）' },
        { label: '酸とアルカリ', formula: 'pH7 = 中性、pH<7 = 酸性、pH>7 = アルカリ性' },
        { label: '中和', formula: '酸 + アルカリ → 塩 + 水' },
      ],
    },
    {
      title: '天体',
      items: [
        { label: '地球の自転', formula: '1日（24時間）で1回転。東→西に動いて見える' },
        { label: '地球の公転', formula: '1年（365日）で太陽の周りを1周' },
        { label: '月の公転', formula: '約29.5日で地球の周りを1周（新月→満月→新月）' },
        { label: '太陽の南中高度（春分・秋分）', formula: '90° − 緯度', note: '東京(35°)は55°' },
        { label: '夏至の南中高度', formula: '90° − 緯度 + 23.4°（地軸の傾き）' },
      ],
    },
    {
      title: '植物・生物',
      items: [
        { label: '光合成', formula: '二酸化炭素 + 水 → ブドウ糖 + 酸素（光のエネルギーで）' },
        { label: '呼吸', formula: 'ブドウ糖 + 酸素 → 二酸化炭素 + 水（エネルギーを取り出す）' },
        { label: '蒸散', formula: '根から吸い上げた水を葉の気孔から水蒸気として出す' },
        { label: '消化の順序', formula: '口→食道→胃→小腸→大腸（消化・吸収は主に小腸）' },
      ],
    },
  ],
  社会: [
    {
      title: '政治の仕組み',
      items: [
        { label: '三権分立', formula: '立法（国会）・行政（内閣）・司法（裁判所）', note: '互いに抑制・均衡' },
        { label: '衆議院の優越', formula: '予算先議権・内閣不信任決議権・法律案の再可決', note: '参議院より強い権限' },
        { label: '選挙権・被選挙権', formula: '衆議院：選挙権18歳〜、被選挙権25歳〜', note: '参議院：被選挙権30歳〜' },
        { label: '憲法の三原則', formula: '国民主権・基本的人権の尊重・平和主義（戦争放棄）' },
        { label: '地方自治', formula: '首長（知事・市町村長）+ 議会の二元代表制' },
      ],
    },
    {
      title: '経済の基礎',
      items: [
        { label: 'GDP', formula: '国内総生産 = 国内で1年間に生産した財・サービスの総額' },
        { label: '需要と供給', formula: '価格が上がると需要減・供給増（均衡点で価格が決まる）' },
        { label: '税の種類', formula: '直接税（所得税・法人税）、間接税（消費税）', note: '累進課税：所得が高いほど税率が高い' },
        { label: '社会保障の4本柱', formula: '社会保険・公的扶助・社会福祉・公衆衛生' },
      ],
    },
    {
      title: '日本の地理・産業',
      items: [
        { label: '日本の面積', formula: '約38万km²（世界61位）', note: '東西約3000km、南北約3000km' },
        { label: '三大工業地帯', formula: '京浜・中京・阪神（+ 北九州 = 四大工業地帯）' },
        { label: '農業生産量ランキング', formula: '米1位:新潟・北海道、りんご:青森、みかん:愛媛・和歌山' },
        { label: '漁業の種類', formula: '沿岸漁業（近い）→ 沖合漁業 → 遠洋漁業（遠い）' },
        { label: '林業', formula: '日本の国土の約67%が森林。スギ・ヒノキが主要林産物' },
      ],
    },
    {
      title: '歴史年号（頻出）',
      items: [
        { label: '大化の改新', formula: '645年' },
        { label: '平城京遷都', formula: '710年', note: '「なんときれいな平城京」' },
        { label: '平安京遷都', formula: '794年', note: '「鳴くよウグイス平安京」' },
        { label: '鎌倉幕府成立', formula: '1192年', note: '「いい国（1192）つくろう鎌倉幕府」→ 最近は1185年説も' },
        { label: '応仁の乱', formula: '1467年' },
        { label: '江戸幕府成立', formula: '1603年' },
        { label: '明治維新', formula: '1868年' },
        { label: '大日本帝国憲法', formula: '1889年' },
        { label: '日清戦争', formula: '1894〜1895年' },
        { label: '日露戦争', formula: '1904〜1905年' },
        { label: '太平洋戦争終戦', formula: '1945年8月15日' },
        { label: '日本国憲法施行', formula: '1947年5月3日' },
      ],
    },
  ],
};

export default function FormulasScreen() {
  const [subject, setSubject] = useState<Subject>('算数');
  const sections = FORMULAS[subject];
  const subjectInfo = SUBJECTS.find((s) => s.key === subject)!;

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, { backgroundColor: subjectInfo.color }]}>
        <Text style={styles.headerEmoji}>{subjectInfo.emoji}</Text>
        <View>
          <Text style={styles.headerTitle}>📋 公式・まとめ</Text>
          <Text style={styles.headerSub}>試験直前の最終確認に</Text>
        </View>
      </View>

      <View style={styles.subjectRow}>
        {SUBJECTS.map((s) => (
          <TouchableOpacity
            key={s.key}
            style={[styles.subjectBtn, subject === s.key && { backgroundColor: s.color }]}
            onPress={() => setSubject(s.key)}
            activeOpacity={0.8}
          >
            <Text style={styles.subjectBtnEmoji}>{s.emoji}</Text>
            <Text style={[styles.subjectBtnText, subject === s.key && styles.subjectBtnTextActive]}>
              {s.key}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        {sections.map((section) => (
          <View key={section.title} style={styles.section}>
            <Text style={[styles.sectionTitle, { color: subjectInfo.color }]}>{section.title}</Text>
            {section.items.map((item, i) => (
              <View key={i} style={styles.formulaRow}>
                <View style={[styles.formulaLabel, { borderLeftColor: subjectInfo.color }]}>
                  <Text style={styles.formulaLabelText}>{item.label}</Text>
                </View>
                <View style={styles.formulaBox}>
                  <Text style={[styles.formulaText, { color: subjectInfo.color }]}>{item.formula}</Text>
                  {item.note && <Text style={styles.formulaNote}>{item.note}</Text>}
                </View>
              </View>
            ))}
          </View>
        ))}
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  header: {
    paddingTop: 16,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  headerEmoji: { fontSize: 40 },
  headerTitle: { fontSize: 22, fontWeight: '900', color: '#FFFFFF' },
  headerSub: { fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: '500', marginTop: 2 },
  subjectRow: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5EAF0',
    padding: 10,
    gap: 8,
  },
  subjectBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#F0F3F7',
  },
  subjectBtnEmoji: { fontSize: 18 },
  subjectBtnText: { fontSize: 14, fontWeight: '700', color: '#666' },
  subjectBtnTextActive: { color: '#FFFFFF' },
  scroll: { flex: 1 },
  content: { padding: 16 },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '900',
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F3F7',
  },
  formulaRow: {
    borderBottomWidth: 1,
    borderBottomColor: '#F0F3F7',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  formulaLabel: {
    borderLeftWidth: 3,
    paddingLeft: 8,
    marginBottom: 6,
  },
  formulaLabelText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#333',
  },
  formulaBox: {
    backgroundColor: '#F8FAFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  formulaText: {
    fontSize: 15,
    fontWeight: '800',
    fontFamily: 'monospace',
  },
  formulaNote: {
    fontSize: 11,
    color: '#888',
    marginTop: 4,
    fontWeight: '400',
  },
});
