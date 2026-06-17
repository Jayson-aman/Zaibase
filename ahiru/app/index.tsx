import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

// 日能研スタイル カラーパレット
const C = {
  navy: '#003087',      // 深紺
  navyDark: '#001F5C',  // 濃紺
  navyLight: '#E8EDF7', // 薄紺
  red: '#CC0033',       // 赤
  redLight: '#FFF0F3',  // 薄赤
  white: '#FFFFFF',
  gray: '#F5F7FA',
  grayBorder: '#E0E6EF',
  textDark: '#1A1A2E',
  textMid: '#555',
  textLight: '#888',
  gold: '#D4AC0D',
};

const SUBJECTS = [
  { name: '算数', emoji: '📐', desc: '計算・図形・文章題・速さ', color: C.navy },
  { name: '国語', emoji: '📖', desc: '読解・漢字・文学史・作文', color: '#C0392B' },
  { name: '理科', emoji: '🔬', desc: '実験・生物・物理・化学', color: '#1A7A4A' },
  { name: '社会', emoji: '🗾', desc: '地理・歴史・公民・時事', color: '#B07A00' },
  { name: '英語', emoji: '🌍', desc: '文法・読解・会話・英作文', color: '#6B21A8' },
];

const CURRICULUM = [
  {
    level: '基礎',
    icon: '🌱',
    color: '#27AE60',
    target: '小3〜小4生',
    desc: '中学受験の土台固め。計算・漢字・基本概念をしっかり定着。',
    count: '各科目 20問',
  },
  {
    level: '標準',
    icon: '⭐',
    color: C.navy,
    target: '小5〜小6生（開成・甲陽レベル）',
    desc: '入試頻出問題を網羅。思考力・応用力を養う実戦問題。',
    count: '各科目 20問',
  },
  {
    level: '発展',
    icon: '🔥',
    color: C.red,
    target: '小6生最上位（灘・東大寺レベル）',
    desc: '四谷大塚・日能研コース相当の最難関問題。本番直前対策。',
    count: '各科目 20問＋',
  },
];

const FEATURES = [
  {
    icon: '🎧',
    title: '聞き流しモード',
    desc: '問題と解答を音声で読み上げ。\n通学中・就寝前でも学習できる。',
    tag: 'Pro',
    tagColor: '#9B59B6',
  },
  {
    icon: '🤖',
    title: 'AI弱点コーチ',
    desc: '間違えた問題をAIが分析。\n苦手単元と復習ポイントをアドバイス。',
    tag: 'Max',
    tagColor: C.red,
  },
  {
    icon: '🏆',
    title: '全国ランキング',
    desc: '全利用者の中での自分の順位を表示。\n上位10%・TOP100バッジ獲得を目指す。',
    tag: '全員',
    tagColor: C.gold,
  },
  {
    icon: '📊',
    title: '科目別進捗管理',
    desc: '得意科目・苦手科目を一目で把握。\n保護者向けレポートも自動生成。',
    tag: '全員',
    tagColor: C.navy,
  },
];

const VOICES = [
  {
    text: '灘中に合格しました。算数の最難関問題が本番と同じレベルで、毎日の練習が直接結果につながりました。',
    name: '小6 男子',
    result: '灘中 合格',
    stars: 5,
  },
  {
    text: 'AI弱点コーチで指摘された「速さの文章題」を集中的にやったら、苦手が得意になりました。',
    name: '小5 女子',
    result: '偏差値 +12',
    stars: 5,
  },
  {
    text: '聞き流しを毎朝の通学で使って、社会の知識量が格段に上がりました。隙間時間を無駄にしない。',
    name: '小6 男子',
    result: '開成中 合格',
    stars: 5,
  },
];

export default function LandingPage() {
  const router = useRouter();

  function handleStart() {
    router.replace('/(tabs)/');
  }

  return (
    <View style={styles.root}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ── ヘッダーナビ ── */}
        <View style={styles.nav}>
          <View style={styles.navLogoWrap}>
            <Text style={styles.navLogoZ}>Z</Text>
            <View style={styles.navLogoTextWrap}>
              <Text style={styles.navLogoMain}>
                aibase<Text style={styles.navLogoDot}>.</Text>Group
              </Text>
              <Text style={styles.navLogoSub}>中学受験対策</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.navCta} onPress={handleStart} activeOpacity={0.85}>
            <Text style={styles.navCtaText}>無料で始める</Text>
          </TouchableOpacity>
        </View>

        {/* ── ヒーロー ── */}
        <View style={styles.hero}>
          <View style={styles.heroTag}>
            <Text style={styles.heroTagText}>2026年度入試対応</Text>
          </View>
          <Text style={styles.heroTitle} adjustsFontSizeToFit numberOfLines={1}>
            合格への正攻法を、ここに。
          </Text>
          <Text style={styles.heroSub}>
            算数・国語・理科・社会・英語{'\n'}
            5科目 830問以上 × 18校学校別コース{'\n'}
            AI弱点コーチで最難関中学を目指す。
          </Text>

          <TouchableOpacity style={styles.heroCta} onPress={handleStart} activeOpacity={0.85}>
            <Text style={styles.heroCtaText}>無料で今すぐ始める →</Text>
          </TouchableOpacity>
          <Text style={styles.heroCtaSub}>登録不要・クレジットカード不要</Text>

          {/* 実績バー */}
          <View style={styles.heroStats}>
            <View style={styles.heroStat}>
              <Text style={styles.heroStatNum}>830<Text style={styles.heroStatUnit}>問</Text></Text>
              <Text style={styles.heroStatLabel}>問題数</Text>
            </View>
            <View style={styles.heroStatDiv} />
            <View style={styles.heroStat}>
              <Text style={styles.heroStatNum}>5<Text style={styles.heroStatUnit}>科目</Text></Text>
              <Text style={styles.heroStatLabel}>対応科目</Text>
            </View>
            <View style={styles.heroStatDiv} />
            <View style={styles.heroStat}>
              <Text style={styles.heroStatNum}>3<Text style={styles.heroStatUnit}>段階</Text></Text>
              <Text style={styles.heroStatLabel}>難易度</Text>
            </View>
            <View style={styles.heroStatDiv} />
            <View style={styles.heroStat}>
              <Text style={styles.heroStatNum}>AI<Text style={styles.heroStatUnit}>搭載</Text></Text>
              <Text style={styles.heroStatLabel}>弱点分析</Text>
            </View>
          </View>
        </View>

        {/* ── カリキュラム構成 ── */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionAccent} />
            <Text style={styles.sectionTitle}>カリキュラム構成</Text>
          </View>
          <Text style={styles.sectionDesc}>
            基礎から最難関まで、3段階の難易度で完全網羅。
          </Text>
          {CURRICULUM.map((c) => (
            <View key={c.level} style={styles.curriculumCard}>
              <View style={[styles.curriculumLeft, { backgroundColor: c.color }]}>
                <Text style={styles.curriculumIcon}>{c.icon}</Text>
                <Text style={styles.curriculumLevel}>{c.level}</Text>
              </View>
              <View style={styles.curriculumRight}>
                <Text style={styles.curriculumTarget}>{c.target}</Text>
                <Text style={styles.curriculumDesc}>{c.desc}</Text>
                <View style={styles.curriculumCount}>
                  <Text style={styles.curriculumCountText}>{c.count}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* ── 5科目フルカバー ── */}
        <View style={[styles.section, { backgroundColor: C.navyLight }]}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionAccent} />
            <Text style={styles.sectionTitle}>5科目フルカバー</Text>
          </View>
          <Text style={styles.sectionDesc}>
            主要5科目を1つのアプリで。科目ごとに特訓できる。
          </Text>
          <View style={styles.subjectsGrid}>
            {SUBJECTS.map((s) => (
              <View key={s.name} style={styles.subjectCard}>
                <Text style={styles.subjectEmoji}>{s.emoji}</Text>
                <Text style={[styles.subjectName, { color: s.color }]}>{s.name}</Text>
                <Text style={styles.subjectDesc}>{s.desc}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* ── 特長 ── */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionAccent} />
            <Text style={styles.sectionTitle}>選ばれる4つの理由</Text>
          </View>
          <View style={styles.featuresGrid}>
            {FEATURES.map((f) => (
              <View key={f.title} style={styles.featureCard}>
                <View style={styles.featureTop}>
                  <Text style={styles.featureIcon}>{f.icon}</Text>
                  <View style={[styles.featureTag, { backgroundColor: f.tagColor }]}>
                    <Text style={styles.featureTagText}>{f.tag}</Text>
                  </View>
                </View>
                <Text style={styles.featureTitle}>{f.title}</Text>
                <Text style={styles.featureDesc}>{f.desc}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* ── いつでも・どこでも ── */}
        <View style={[styles.deviceSection]}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionAccent} />
            <Text style={styles.sectionTitle}>いつでも・どこでも</Text>
          </View>
          <View style={styles.deviceRow}>
            {[
              { emoji: '📱', name: 'スマートフォン', sub: 'iOS・Android' },
              { emoji: '💻', name: 'タブレット', sub: 'iPad・Androidタブ' },
              { emoji: '🖥️', name: 'パソコン', sub: 'Mac・Windows' },
            ].map((d) => (
              <View key={d.name} style={styles.deviceCard}>
                <Text style={styles.deviceEmoji}>{d.emoji}</Text>
                <Text style={styles.deviceName}>{d.name}</Text>
                <Text style={styles.deviceSub}>{d.sub}</Text>
              </View>
            ))}
          </View>
          <View style={styles.scenarioBox}>
            <Text style={styles.scenarioTitle}>📍 こんな場所で使えます</Text>
            <View style={styles.scenarioGrid}>
              {[
                '🚗 車の中（聞き流しモード）',
                '🚃 電車・バスの通学中',
                '🏠 自宅のリビング',
                '☕ 図書館・カフェ',
              ].map((s) => (
                <View key={s} style={styles.scenarioItem}>
                  <Text style={styles.scenarioText}>{s}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* ── 合格者の声 ── */}
        <View style={[styles.section, { backgroundColor: C.navy }]}>
          <View style={styles.sectionHeader}>
            <View style={[styles.sectionAccent, { backgroundColor: C.red }]} />
            <Text style={[styles.sectionTitle, { color: C.white }]}>合格者・保護者の声</Text>
          </View>
          {VOICES.map((v, i) => (
            <View key={i} style={styles.voiceCard}>
              <View style={styles.voiceResultBadge}>
                <Text style={styles.voiceResultText}>{v.result}</Text>
              </View>
              <Text style={styles.voiceText}>「{v.text}」</Text>
              <Text style={styles.voiceName}>— {v.name}</Text>
            </View>
          ))}
        </View>

        {/* ── 料金プラン ── */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionAccent} />
            <Text style={styles.sectionTitle}>シンプルな料金プラン</Text>
          </View>

          {/* 無料 */}
          <View style={styles.planCard}>
            <Text style={styles.planName}>無料プラン</Text>
            <View style={styles.planPriceRow}>
              <Text style={styles.planPrice}>¥0</Text>
              <Text style={styles.planPricePeriod}> / ずっと無料</Text>
            </View>
            <View style={styles.planDivider} />
            {['✓ 全科目クイズ（全問題）', '✓ 3段階難易度選択', '✓ 全国ランキング閲覧', '✓ 科目別進捗管理'].map((f) => (
              <Text key={f} style={styles.planFeature}>{f}</Text>
            ))}
            <TouchableOpacity style={styles.planBtnSecondary} onPress={handleStart} activeOpacity={0.85}>
              <Text style={styles.planBtnSecondaryText}>無料で始める</Text>
            </TouchableOpacity>
          </View>

          {/* Pro */}
          <View style={[styles.planCard, styles.planCardPro]}>
            <View style={styles.planBadge}>
              <Text style={styles.planBadgeText}>人気</Text>
            </View>
            <Text style={[styles.planName, { color: '#7B2D8B' }]}>プロプラン</Text>
            <View style={styles.planPriceRow}>
              <Text style={[styles.planPrice, { color: '#7B2D8B' }]}>¥980</Text>
              <Text style={styles.planPricePeriod}> / 月（税込）</Text>
            </View>
            <View style={styles.planDivider} />
            {[
              '✓ 無料プランの全機能',
              '✓ 聞き流しモード（全5科目）',
              '✓ 地理マップ全レイヤー',
              '✓ 歴史イラスト・合戦シーン',
              '✓ キャラクターマスコット全解放',
            ].map((f) => (
              <Text key={f} style={[styles.planFeature, { color: '#4A0070' }]}>{f}</Text>
            ))}
            <TouchableOpacity style={[styles.planBtn, { backgroundColor: '#7B2D8B' }]} onPress={handleStart} activeOpacity={0.85}>
              <Text style={styles.planBtnText}>プロを始める</Text>
            </TouchableOpacity>
          </View>

          {/* Max */}
          <View style={[styles.planCard, styles.planCardMax]}>
            <View style={[styles.planBadge, { backgroundColor: C.red }]}>
              <Text style={styles.planBadgeText}>おすすめ</Text>
            </View>
            <Text style={[styles.planName, { color: C.red }]}>マックスプラン</Text>
            <View style={styles.planPriceRow}>
              <Text style={[styles.planPrice, { color: C.red }]}>¥1,980</Text>
              <Text style={styles.planPricePeriod}> / 月（税込）</Text>
            </View>
            <View style={styles.planDivider} />
            {[
              '✓ プロプランの全機能',
              '✓ AI弱点コーチ（間違い問題をAI分析）',
              '✓ 苦手単元の自動特定＆アドバイス',
            ].map((f) => (
              <Text key={f} style={[styles.planFeature, { color: C.red, fontWeight: '800' }]}>{f}</Text>
            ))}
            <TouchableOpacity style={[styles.planBtn, { backgroundColor: C.red }]} onPress={handleStart} activeOpacity={0.85}>
              <Text style={styles.planBtnText}>マックスを始める</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ── 最終CTA ── */}
        <View style={styles.finalCta}>
          <View style={styles.finalCtaAccent} />
          <Text style={styles.finalCtaTitle}>今日から、始めよう。</Text>
          <Text style={styles.finalCtaDesc}>
            登録不要・クレジットカード不要。{'\n'}
            まず無料で全問題にチャレンジしてみてください。
          </Text>
          <TouchableOpacity style={styles.finalCtaBtn} onPress={handleStart} activeOpacity={0.85}>
            <Text style={styles.finalCtaBtnText}>無料で始める →</Text>
          </TouchableOpacity>
        </View>

        {/* フッター */}
        <View style={styles.footer}>
          <Text style={styles.footerLogo}>
            <Text style={{ color: '#7BA7DC', fontWeight: '900' }}>Zaibase.Group</Text> 中学受験対策
          </Text>
          <Text style={styles.footerText}>運営: 南條 雅哉 / Zaibase Group</Text>
          <Text style={styles.footerText}>info@zaibase.group</Text>
          <Text style={[styles.footerText, { marginTop: 8 }]}>© 2026 Zaibase Group. All rights reserved.</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.white },
  scroll: { flex: 1 },
  scrollContent: { paddingBottom: 0 },

  // ナビ
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: C.white,
    borderBottomWidth: 1,
    borderBottomColor: C.grayBorder,
  },
  navLogoWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  navLogoZ: {
    fontSize: 42,
    fontWeight: '900',
    color: C.navy,
    lineHeight: 46,
    letterSpacing: -2,
  },
  navLogoTextWrap: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  navLogoMain: {
    fontSize: 18,
    fontWeight: '900',
    color: C.navy,
    letterSpacing: 0.3,
  },
  navLogoDot: {
    color: C.red,
  },
  navLogoSub: {
    fontSize: 11,
    fontWeight: '700',
    color: C.textLight,
    letterSpacing: 0.5,
  },
  navCta: {
    backgroundColor: C.navy,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
  },
  navCtaText: { color: C.white, fontSize: 15, fontWeight: '800' },

  // ヒーロー
  hero: {
    backgroundColor: C.white,
    paddingHorizontal: 28,
    paddingTop: 40,
    paddingBottom: 48,
    borderBottomWidth: 4,
    borderBottomColor: C.navy,
  },
  heroTag: {
    alignSelf: 'flex-start',
    backgroundColor: C.red,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 4,
    marginBottom: 20,
  },
  heroTagText: { color: C.white, fontSize: 14, fontWeight: '800', letterSpacing: 1 },
  heroTitle: {
    fontSize: 44,
    fontWeight: '900',
    color: C.navyDark,
    lineHeight: 52,
    marginBottom: 20,
    letterSpacing: -1,
    includeFontPadding: false,
  },
  heroSub: {
    fontSize: 20,
    color: C.textMid,
    lineHeight: 34,
    marginBottom: 36,
    fontWeight: '500',
  },
  heroCta: {
    backgroundColor: C.red,
    borderRadius: 8,
    paddingVertical: 22,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: C.red,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
  },
  heroCtaText: { fontSize: 26, fontWeight: '900', color: C.white, letterSpacing: 0.5 },
  heroCtaSub: {
    textAlign: 'center',
    fontSize: 15,
    color: C.textLight,
    fontWeight: '500',
    marginBottom: 36,
  },
  heroStats: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: C.grayBorder,
    paddingTop: 28,
  },
  heroStat: { flex: 1, alignItems: 'center' },
  heroStatNum: { fontSize: 32, fontWeight: '900', color: C.navy },
  heroStatUnit: { fontSize: 16, fontWeight: '700', color: C.navy },
  heroStatLabel: { fontSize: 13, color: C.textLight, fontWeight: '600', marginTop: 4 },
  heroStatDiv: { width: 1, backgroundColor: C.grayBorder, marginVertical: 4 },

  // セクション共通
  section: {
    paddingHorizontal: 24,
    paddingVertical: 48,
    backgroundColor: C.white,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 10,
  },
  sectionAccent: {
    width: 4,
    height: 28,
    backgroundColor: C.navy,
    borderRadius: 2,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: C.navyDark,
    letterSpacing: 0.5,
  },
  sectionDesc: {
    fontSize: 18,
    color: C.textMid,
    lineHeight: 30,
    marginBottom: 28,
    fontWeight: '500',
  },

  // カリキュラム
  curriculumCard: {
    flexDirection: 'row',
    borderRadius: 12,
    marginBottom: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: C.grayBorder,
    backgroundColor: C.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  curriculumLeft: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
  },
  curriculumIcon: { fontSize: 28, marginBottom: 4 },
  curriculumLevel: { fontSize: 15, fontWeight: '900', color: C.white },
  curriculumRight: { flex: 1, padding: 16 },
  curriculumTarget: {
    fontSize: 14,
    fontWeight: '800',
    color: C.navy,
    marginBottom: 6,
  },
  curriculumDesc: {
    fontSize: 15,
    color: C.textMid,
    lineHeight: 24,
    marginBottom: 8,
    fontWeight: '500',
  },
  curriculumCount: {
    alignSelf: 'flex-start',
    backgroundColor: C.navyLight,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  curriculumCountText: {
    fontSize: 13,
    fontWeight: '700',
    color: C.navy,
  },

  // 科目
  subjectsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  subjectCard: {
    width: (width - 60) / 2,
    backgroundColor: C.white,
    borderRadius: 12,
    padding: 18,
    borderWidth: 1,
    borderColor: C.grayBorder,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  subjectEmoji: { fontSize: 36, marginBottom: 8 },
  subjectName: { fontSize: 22, fontWeight: '900', marginBottom: 4 },
  subjectDesc: { fontSize: 14, color: C.textLight, fontWeight: '500', lineHeight: 22 },

  // 特長
  featuresGrid: { gap: 14 },
  featureCard: {
    backgroundColor: C.gray,
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: C.grayBorder,
  },
  featureTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureIcon: { fontSize: 36 },
  featureTag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  featureTagText: { fontSize: 13, fontWeight: '800', color: C.white },
  featureTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: C.navyDark,
    marginBottom: 6,
  },
  featureDesc: {
    fontSize: 16,
    color: C.textMid,
    lineHeight: 26,
    fontWeight: '500',
  },

  // デバイス
  deviceSection: {
    paddingHorizontal: 24,
    paddingVertical: 48,
    backgroundColor: C.navyLight,
  },
  deviceRow: { flexDirection: 'row', gap: 10, marginBottom: 20 },
  deviceCard: {
    flex: 1,
    backgroundColor: C.white,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: C.grayBorder,
  },
  deviceEmoji: { fontSize: 32, marginBottom: 8 },
  deviceName: { fontSize: 14, fontWeight: '800', color: C.navyDark, textAlign: 'center', marginBottom: 4 },
  deviceSub: { fontSize: 12, color: C.textLight, textAlign: 'center' },
  scenarioBox: {
    backgroundColor: C.white,
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: C.grayBorder,
  },
  scenarioTitle: {
    fontSize: 17,
    fontWeight: '900',
    color: C.navyDark,
    marginBottom: 14,
  },
  scenarioGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  scenarioItem: {
    backgroundColor: C.navyLight,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    width: (width - 88) / 2,
  },
  scenarioText: { fontSize: 15, color: C.navy, fontWeight: '700' },

  // 声
  voiceCard: {
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderRadius: 12,
    padding: 20,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  voiceResultBadge: {
    alignSelf: 'flex-start',
    backgroundColor: C.red,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 6,
    marginBottom: 12,
  },
  voiceResultText: { fontSize: 14, fontWeight: '900', color: C.white },
  voiceText: {
    fontSize: 17,
    color: 'rgba(255,255,255,0.9)',
    lineHeight: 30,
    fontWeight: '500',
    marginBottom: 10,
  },
  voiceName: { fontSize: 14, color: 'rgba(255,255,255,0.5)', fontWeight: '700' },

  // 料金
  planCard: {
    backgroundColor: C.white,
    borderRadius: 12,
    padding: 24,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: C.grayBorder,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  planCardPro: { borderWidth: 2, borderColor: '#7B2D8B' },
  planCardMax: { borderWidth: 2, borderColor: C.red },
  planBadge: {
    alignSelf: 'flex-start',
    backgroundColor: C.navy,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 10,
  },
  planBadgeText: { fontSize: 13, fontWeight: '900', color: C.white },
  planName: { fontSize: 22, fontWeight: '900', color: C.navyDark, marginBottom: 6 },
  planPriceRow: { flexDirection: 'row', alignItems: 'baseline', marginBottom: 6 },
  planPrice: { fontSize: 44, fontWeight: '900', color: C.navyDark },
  planPricePeriod: { fontSize: 16, color: C.textLight, fontWeight: '600' },
  planDivider: { height: 1, backgroundColor: C.grayBorder, marginVertical: 16 },
  planFeature: {
    fontSize: 16,
    color: C.textDark,
    lineHeight: 32,
    fontWeight: '600',
  },
  planBtn: {
    borderRadius: 8,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 16,
  },
  planBtnText: { fontSize: 18, fontWeight: '900', color: C.white },
  planBtnSecondary: {
    borderRadius: 8,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 16,
    borderWidth: 2,
    borderColor: C.navy,
  },
  planBtnSecondaryText: { fontSize: 18, fontWeight: '900', color: C.navy },

  // 最終CTA
  finalCta: {
    backgroundColor: C.navy,
    paddingHorizontal: 28,
    paddingVertical: 60,
    alignItems: 'center',
  },
  finalCtaAccent: {
    width: 48,
    height: 4,
    backgroundColor: C.red,
    borderRadius: 2,
    marginBottom: 24,
  },
  finalCtaTitle: {
    fontSize: 42,
    fontWeight: '900',
    color: C.white,
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: -0.5,
  },
  finalCtaDesc: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.75)',
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: 36,
    fontWeight: '500',
  },
  finalCtaBtn: {
    backgroundColor: C.red,
    borderRadius: 8,
    paddingVertical: 22,
    paddingHorizontal: 48,
    shadowColor: C.red,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  finalCtaBtnText: { fontSize: 24, fontWeight: '900', color: C.white },

  // フッター
  footer: {
    backgroundColor: C.navyDark,
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
    gap: 6,
  },
  footerLogo: { fontSize: 20, fontWeight: '900', color: C.white, marginBottom: 8 },
  footerText: { fontSize: 13, color: 'rgba(255,255,255,0.45)', fontWeight: '500' },
});
