import React, { useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const SUBJECTS = [
  { name: '算数', emoji: '✏️', color: '#4A90D9', desc: '計算・図形・文章題' },
  { name: '国語', emoji: '📖', color: '#E74C3C', desc: '読解・漢字・文学' },
  { name: '理科', emoji: '🔬', color: '#27AE60', desc: '実験・生物・物理' },
  { name: '社会', emoji: '🗾', color: '#F39C12', desc: '地理・歴史・公民' },
  { name: '英語', emoji: '🌍', color: '#9B59B6', desc: '単語・文法・会話' },
];

const FEATURES = [
  {
    emoji: '📱',
    title: 'どこでも学習',
    desc: 'スマホ・タブレット・PCで使える。\n車の中でも、外出先でも。',
    color: '#E3F2FD',
  },
  {
    emoji: '🎧',
    title: '聞き流しモード',
    desc: '問題と答えを音声で読み上げ。\nながら勉強で効率アップ。',
    color: '#E8F5E9',
  },
  {
    emoji: '🤖',
    title: 'AI弱点コーチ',
    desc: '間違えた問題をAIが分析して\n復習ポイントをアドバイス。',
    color: '#FFF3E0',
  },
  {
    emoji: '🏆',
    title: '有名中学に対応',
    desc: '灘・開成・桜蔭レベルの問題から\n基礎まで全難易度対応。',
    color: '#FCE4EC',
  },
];

const VOICES = [
  { text: '毎日の通学中に聞き流しを使ったら\n社会の点数が20点上がった！', name: '小6・男子', school: '第一志望：開成中' },
  { text: 'AI弱点コーチに教えてもらってから\n算数の苦手な単元が得意になった', name: '小5・女子', school: '第一志望：桜蔭中' },
  { text: 'スマホでいつでもできるから\n隙間時間が全部勉強時間になった', name: '小6・男子', school: '第一志望：灘中' },
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
        {/* ─── Hero ─── */}
        <LinearGradient
          colors={['#0D3B8E', '#1E5FBE', '#3A80D2']}
          style={styles.hero}
        >
          <SafeAreaView>
            <Text style={styles.heroEyebrow}>🏫 中学受験対策アプリ</Text>
            <Text style={styles.heroTitle}>{'合格への\n近道はここにある'}</Text>
            <Text style={styles.heroSub}>
              算数・国語・理科・社会・英語{'\n'}
              5科目 250問以上の一問一答
            </Text>

            <View style={styles.heroStats}>
              <View style={styles.heroStat}>
                <Text style={styles.heroStatNum}>250+</Text>
                <Text style={styles.heroStatLabel}>問題数</Text>
              </View>
              <View style={styles.heroStatDivider} />
              <View style={styles.heroStat}>
                <Text style={styles.heroStatNum}>5</Text>
                <Text style={styles.heroStatLabel}>対応科目</Text>
              </View>
              <View style={styles.heroStatDivider} />
              <View style={styles.heroStat}>
                <Text style={styles.heroStatNum}>3</Text>
                <Text style={styles.heroStatLabel}>難易度</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.heroCta} onPress={handleStart} activeOpacity={0.85}>
              <Text style={styles.heroCtaText}>無料で今すぐ始める →</Text>
            </TouchableOpacity>
            <Text style={styles.heroCtaSub}>クレジットカード不要・登録なし</Text>
          </SafeAreaView>
        </LinearGradient>

        {/* ─── 対応科目 ─── */}
        <View style={styles.section}>
          <Text style={styles.sectionEyebrow}>SUBJECTS</Text>
          <Text style={styles.sectionTitle}>5科目フルカバー</Text>
          <Text style={styles.sectionDesc}>
            主要5科目を1つのアプリで。{'\n'}科目ごとに特訓できる。
          </Text>
          <View style={styles.subjectsGrid}>
            {SUBJECTS.map((s) => (
              <View key={s.name} style={[styles.subjectCard, { borderColor: s.color }]}>
                <Text style={styles.subjectEmoji}>{s.emoji}</Text>
                <Text style={[styles.subjectName, { color: s.color }]}>{s.name}</Text>
                <Text style={styles.subjectDesc}>{s.desc}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* ─── 特長 ─── */}
        <LinearGradient colors={['#F8FAFE', '#EFF4FF']} style={styles.featuresSection}>
          <Text style={styles.sectionEyebrow}>FEATURES</Text>
          <Text style={styles.sectionTitle}>選ばれる4つの理由</Text>
          {FEATURES.map((f) => (
            <View key={f.title} style={[styles.featureCard, { backgroundColor: f.color }]}>
              <Text style={styles.featureEmoji}>{f.emoji}</Text>
              <View style={styles.featureBody}>
                <Text style={styles.featureTitle}>{f.title}</Text>
                <Text style={styles.featureDesc}>{f.desc}</Text>
              </View>
            </View>
          ))}
        </LinearGradient>

        {/* ─── どこでも使える ─── */}
        <View style={styles.deviceSection}>
          <Text style={styles.sectionEyebrow}>ANYWHERE</Text>
          <Text style={styles.sectionTitle}>{'いつでも\nどこでも'}</Text>
          <View style={styles.deviceCards}>
            {[
              { emoji: '📱', name: 'スマホ', desc: 'iOS・Android' },
              { emoji: '💻', name: 'タブレット', desc: 'iPad・Androidタブ' },
              { emoji: '🖥️', name: 'パソコン', desc: 'Mac・Windows' },
            ].map((d) => (
              <View key={d.name} style={styles.deviceCard}>
                <Text style={styles.deviceEmoji}>{d.emoji}</Text>
                <Text style={styles.deviceName}>{d.name}</Text>
                <Text style={styles.deviceDesc}>{d.desc}</Text>
              </View>
            ))}
          </View>
          <View style={styles.scenarioCard}>
            <Text style={styles.scenarioTitle}>こんな場所で使えます</Text>
            {['🚗 車の中（聞き流しモード）', '🚃 電車・バスの中', '☕ カフェや図書館', '🏠 自宅のリビング'].map((s) => (
              <Text key={s} style={styles.scenarioItem}>{s}</Text>
            ))}
          </View>
        </View>

        {/* ─── 声 ─── */}
        <LinearGradient colors={['#1A1A2E', '#2D1B69']} style={styles.voicesSection}>
          <Text style={[styles.sectionEyebrow, { color: 'rgba(255,255,255,0.6)' }]}>VOICES</Text>
          <Text style={[styles.sectionTitle, { color: '#fff' }]}>使った子の声</Text>
          {VOICES.map((v, i) => (
            <View key={i} style={styles.voiceCard}>
              <Text style={styles.voiceQuote}>"</Text>
              <Text style={styles.voiceText}>{v.text}</Text>
              <Text style={styles.voiceName}>{v.name}　{v.school}</Text>
            </View>
          ))}
        </LinearGradient>

        {/* ─── 料金 ─── */}
        <View style={styles.pricingSection}>
          <Text style={styles.sectionEyebrow}>PRICING</Text>
          <Text style={styles.sectionTitle}>シンプルな料金</Text>

          <View style={styles.pricingCard}>
            <Text style={styles.pricingPlanName}>無料プラン</Text>
            <Text style={styles.pricingPrice}>¥0</Text>
            <Text style={styles.pricingPriceLabel}>ずっと無料</Text>
            {['✓ クイズ（全科目・全問題）', '✓ 進捗管理', '✓ 難易度別チャレンジ'].map((f) => (
              <Text key={f} style={styles.pricingFeature}>{f}</Text>
            ))}
          </View>

          <View style={[styles.pricingCard, styles.pricingCardPro]}>
            <Text style={[styles.pricingPlanName, { color: '#9B59B6' }]}>プロプラン</Text>
            <Text style={[styles.pricingPrice, { color: '#9B59B6' }]}>¥980</Text>
            <Text style={styles.pricingPriceLabel}>/月（税込）</Text>
            {[
              '✓ 聞き流しモード（算数・国語・理科・社会・英語）',
              '✓ 地理マップ全レイヤー',
              '✓ 歴史イラスト・合戦シーン',
              '✓ キャラクターマスコット',
            ].map((f) => (
              <Text key={f} style={styles.pricingFeature}>{f}</Text>
            ))}
          </View>

          <View style={[styles.pricingCard, styles.pricingCardMax]}>
            <View style={styles.pricingBadge}>
              <Text style={styles.pricingBadgeText}>おすすめ</Text>
            </View>
            <Text style={[styles.pricingPlanName, { color: '#E74C3C' }]}>マックスプラン</Text>
            <Text style={[styles.pricingPrice, { color: '#E74C3C' }]}>¥1,980</Text>
            <Text style={styles.pricingPriceLabel}>/月（税込）</Text>
            {[
              '✓ プロの全機能',
              '✓ AI弱点コーチ（苦手を自動分析）',
            ].map((f) => (
              <Text key={f} style={[styles.pricingFeature, { color: '#E74C3C', fontWeight: '800' }]}>{f}</Text>
            ))}
          </View>
        </View>

        {/* ─── 最後のCTA ─── */}
        <LinearGradient colors={['#0D3B8E', '#1E5FBE']} style={styles.finalCta}>
          <Text style={styles.finalCtaTitle}>{'今日から\n受験勉強を始めよう！'}</Text>
          <Text style={styles.finalCtaDesc}>
            まずは無料で試してみてください。{'\n'}
            登録もクレジットカードも不要です。
          </Text>
          <TouchableOpacity style={styles.finalCtaBtn} onPress={handleStart} activeOpacity={0.85}>
            <Text style={styles.finalCtaBtnText}>無料で始める →</Text>
          </TouchableOpacity>
        </LinearGradient>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2026 Zaibase Group</Text>
          <Text style={styles.footerText}>運営：南條 雅哉 / info@zaibase.group</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#fff' },
  scroll: { flex: 1 },
  scrollContent: { paddingBottom: 0 },

  // Hero
  hero: {
    paddingHorizontal: 28,
    paddingTop: 20,
    paddingBottom: 48,
  },
  heroEyebrow: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '700',
    marginBottom: 16,
    marginTop: 16,
  },
  heroTitle: {
    fontSize: 52,
    fontWeight: '900',
    color: '#fff',
    lineHeight: 62,
    marginBottom: 16,
    letterSpacing: -1,
  },
  heroSub: {
    fontSize: 22,
    color: 'rgba(255,255,255,0.85)',
    lineHeight: 34,
    marginBottom: 32,
    fontWeight: '500',
  },
  heroStats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 36,
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  heroStat: { flex: 1, alignItems: 'center' },
  heroStatNum: { fontSize: 40, fontWeight: '900', color: '#fff' },
  heroStatLabel: { fontSize: 16, color: 'rgba(255,255,255,0.75)', fontWeight: '600' },
  heroStatDivider: { width: 1, height: 48, backgroundColor: 'rgba(255,255,255,0.25)' },
  heroCta: {
    backgroundColor: '#FFD700',
    borderRadius: 20,
    paddingVertical: 22,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
  },
  heroCtaText: { fontSize: 28, fontWeight: '900', color: '#1A1A2E' },
  heroCtaSub: { textAlign: 'center', fontSize: 16, color: 'rgba(255,255,255,0.65)', fontWeight: '500' },

  // Sections
  section: { paddingHorizontal: 24, paddingVertical: 48 },
  featuresSection: { paddingHorizontal: 24, paddingVertical: 48 },
  sectionEyebrow: { fontSize: 14, fontWeight: '800', color: '#1E5FBE', letterSpacing: 3, marginBottom: 8 },
  sectionTitle: { fontSize: 38, fontWeight: '900', color: '#1A1A2E', marginBottom: 12, lineHeight: 46 },
  sectionDesc: { fontSize: 20, color: '#555', lineHeight: 32, marginBottom: 28, fontWeight: '500' },

  // Subjects
  subjectsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  subjectCard: {
    width: (width - 60) / 2,
    borderRadius: 18,
    borderWidth: 2,
    padding: 18,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  subjectEmoji: { fontSize: 40, marginBottom: 8 },
  subjectName: { fontSize: 26, fontWeight: '900', marginBottom: 4 },
  subjectDesc: { fontSize: 16, color: '#666', fontWeight: '500' },

  // Features
  featureCard: {
    flexDirection: 'row',
    borderRadius: 20,
    padding: 22,
    marginBottom: 14,
    alignItems: 'flex-start',
    gap: 18,
  },
  featureEmoji: { fontSize: 44 },
  featureBody: { flex: 1 },
  featureTitle: { fontSize: 24, fontWeight: '900', color: '#1A1A2E', marginBottom: 6 },
  featureDesc: { fontSize: 18, color: '#444', lineHeight: 28, fontWeight: '500' },

  // Devices
  deviceSection: { paddingHorizontal: 24, paddingVertical: 48, backgroundColor: '#fff' },
  deviceCards: { flexDirection: 'row', gap: 12, marginBottom: 24 },
  deviceCard: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F7FA',
    borderRadius: 18,
    padding: 18,
  },
  deviceEmoji: { fontSize: 40, marginBottom: 8 },
  deviceName: { fontSize: 18, fontWeight: '800', color: '#1A1A2E', marginBottom: 4 },
  deviceDesc: { fontSize: 14, color: '#666', textAlign: 'center' },
  scenarioCard: {
    backgroundColor: '#E3F2FD',
    borderRadius: 20,
    padding: 22,
  },
  scenarioTitle: { fontSize: 22, fontWeight: '800', color: '#1E5FBE', marginBottom: 14 },
  scenarioItem: { fontSize: 20, color: '#1A1A2E', lineHeight: 38, fontWeight: '600' },

  // Voices
  voicesSection: { paddingHorizontal: 24, paddingVertical: 48 },
  voiceCard: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 20,
    padding: 22,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  voiceQuote: { fontSize: 48, color: '#FFD700', lineHeight: 40, marginBottom: 8 },
  voiceText: { fontSize: 20, color: '#fff', lineHeight: 32, fontWeight: '600', marginBottom: 14 },
  voiceName: { fontSize: 16, color: 'rgba(255,255,255,0.55)', fontWeight: '700' },

  // Pricing
  pricingSection: { paddingHorizontal: 24, paddingVertical: 48, backgroundColor: '#F5F7FA' },
  pricingCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  pricingCardPro: { borderWidth: 2, borderColor: '#9B59B6' },
  pricingCardMax: { borderWidth: 3, borderColor: '#E74C3C', position: 'relative' },
  pricingBadge: {
    backgroundColor: '#E74C3C',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  pricingBadgeText: { fontSize: 14, fontWeight: '800', color: '#fff' },
  pricingPlanName: { fontSize: 24, fontWeight: '900', color: '#1A1A2E', marginBottom: 4 },
  pricingPrice: { fontSize: 48, fontWeight: '900', color: '#1A1A2E' },
  pricingPriceLabel: { fontSize: 16, color: '#888', marginBottom: 14 },
  pricingFeature: { fontSize: 18, color: '#333', lineHeight: 32, fontWeight: '600' },

  // Final CTA
  finalCta: { paddingHorizontal: 28, paddingVertical: 60, alignItems: 'center' },
  finalCtaTitle: { fontSize: 48, fontWeight: '900', color: '#fff', textAlign: 'center', lineHeight: 58, marginBottom: 16 },
  finalCtaDesc: { fontSize: 20, color: 'rgba(255,255,255,0.8)', textAlign: 'center', lineHeight: 32, marginBottom: 36, fontWeight: '500' },
  finalCtaBtn: {
    backgroundColor: '#FFD700',
    borderRadius: 20,
    paddingVertical: 22,
    paddingHorizontal: 48,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
  },
  finalCtaBtnText: { fontSize: 28, fontWeight: '900', color: '#1A1A2E' },

  // Footer
  footer: { paddingVertical: 24, paddingHorizontal: 24, backgroundColor: '#1A1A2E', alignItems: 'center', gap: 6 },
  footerText: { fontSize: 14, color: 'rgba(255,255,255,0.4)', fontWeight: '500' },
});
