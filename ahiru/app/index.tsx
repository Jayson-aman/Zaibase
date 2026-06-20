import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

// ── Premium dark navy palette ──────────────────────────────
const C = {
  bg:          '#040C1C',   // メインダーク紺
  bgAlt:       '#06111F',   // 少し明るいセクション用
  bgCard:      '#091728',   // カード背景
  gold:        '#C8A84B',   // ゴールドアクセント
  goldLight:   '#E4C96D',   // 明るいゴールド
  goldDim:     'rgba(200,168,75,0.18)',
  goldBorder:  'rgba(200,168,75,0.35)',
  blue:        '#4B8FE4',   // 明るい青
  blueLight:   '#A8CAFF',   // ソフト青
  red:         '#D95050',
  white:       '#EDF4FF',   // 見出し白
  soft:        '#7FA8CC',   // 本文ソフト青
  muted:       '#3E5870',   // 薄い文字
  glass:       'rgba(255,255,255,0.045)',
  glassMid:    'rgba(255,255,255,0.07)',
  glassBorder: 'rgba(255,255,255,0.09)',
  glassHover:  'rgba(255,255,255,0.11)',
  divider:     'rgba(255,255,255,0.06)',
};

const SERIF = Platform.select({
  ios: 'HiraMinProN-W6',
  web: '"Hiragino Mincho ProN", "Yu Mincho", "Noto Serif JP", Georgia, serif',
  default: undefined,
}) as string | undefined;

// Webのみ有効なぼかしスタイル
const glassBlur: any = Platform.OS === 'web'
  ? { backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }
  : {};

const SUBJECTS = [
  { name: '算数', emoji: '📐', desc: '計算・図形・文章題・速さ', color: '#4B8FE4' },
  { name: '国語', emoji: '📖', desc: '読解・漢字・文学史・作文', color: '#E06060' },
  { name: '理科', emoji: '🔬', desc: '実験・生物・物理・化学', color: '#3AB073' },
  { name: '社会', emoji: '🗾', desc: '地理・歴史・公民・時事', color: '#C8A84B' },
  { name: '英語', emoji: '🌍', desc: '文法・読解・会話・英作文', color: '#9B70D8' },
];

const CURRICULUM = [
  {
    level: '基礎',
    icon: '🌱',
    color: '#2A9460',
    target: '小3〜小4生',
    desc: '中学受験の土台固め。計算・漢字・基本概念をしっかり定着。',
    count: '各科目 20問',
  },
  {
    level: '標準',
    icon: '⭐',
    color: '#4B8FE4',
    target: '小5〜小6生（開成・甲陽レベル）',
    desc: '入試頻出問題を網羅。思考力・応用力を養う実戦問題。',
    count: '各科目 20問',
  },
  {
    level: '発展',
    icon: '🔥',
    color: '#C8A84B',
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
    tag: 'PRO',
    tagColor: '#9B70D8',
    image: require('../assets/images/feature-listen.png') as number,
  },
  {
    icon: '🤖',
    title: 'AI弱点コーチ',
    desc: '間違えた問題をAIが分析。\n苦手単元と復習ポイントをアドバイス。',
    tag: 'MAX',
    tagColor: C.red,
    image: require('../assets/images/feature-ai.png') as number,
  },
  {
    icon: '🏆',
    title: '全国ランキング',
    desc: '全利用者の中での自分の順位を表示。\n上位10%・TOP100バッジ獲得を目指す。',
    tag: '全員',
    tagColor: C.gold,
    image: require('../assets/images/feature-ranking.png') as number,
  },
  {
    icon: '📊',
    title: '科目別進捗管理',
    desc: '得意科目・苦手科目を一目で把握。\n保護者向けレポートも自動生成。',
    tag: '全員',
    tagColor: C.blue,
    image: require('../assets/mascots/mascot-home.png') as number,
  },
];

const VOICES = [
  {
    text: '灘中に合格しました。算数の最難関問題が本番と同じレベルで、毎日の練習が直接結果につながりました。',
    name: '小6 男子',
    result: '灘中 合格',
  },
  {
    text: 'AI弱点コーチで指摘された「速さの文章題」を集中的にやったら、苦手が得意になりました。',
    name: '小5 女子',
    result: '偏差値 +12',
  },
  {
    text: '聞き流しを毎朝の通学で使って、社会の知識量が格段に上がりました。隙間時間を無駄にしない。',
    name: '小6 男子',
    result: '開成中 合格',
  },
];

export default function LandingPage() {
  const router = useRouter();
  function handleStart() { router.replace('/(tabs)/'); }

  return (
    <View style={styles.root}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

        {/* ─── NAV ─────────────────────────────── */}
        <View style={[styles.nav, glassBlur]}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.navLogo}
            resizeMode="contain"
          />
          <TouchableOpacity style={styles.navCta} onPress={handleStart} activeOpacity={0.8}>
            <Text style={styles.navCtaText}>無料で始める</Text>
          </TouchableOpacity>
        </View>

        {/* ─── HERO ────────────────────────────── */}
        <View style={styles.hero}>
          {/* 背景装飾 */}
          <View style={styles.heroDecorCircle1} />
          <View style={styles.heroDecorCircle2} />

          <View style={styles.heroInner}>
            {/* タグバッジ */}
            <View style={styles.heroTag}>
              <Text style={styles.heroTagText}>✦  2026年度入試対応</Text>
            </View>

            {/* メインタイトル（明朝体） */}
            <Text style={styles.heroTitle}>
              合格への正攻法を、ここに。
            </Text>

            {/* デコライン */}
            <View style={styles.heroDivider}>
              <View style={styles.heroDividerLine} />
              <View style={styles.heroDividerDot} />
              <View style={styles.heroDividerLine} />
            </View>

            <Text style={styles.heroSub}>
              算数・国語・理科・社会・英語{'\n'}
              5科目 830問以上 × 18校学校別コース{'\n'}
              AI弱点コーチで最難関中学を目指す。
            </Text>

            <TouchableOpacity style={styles.heroCta} onPress={handleStart} activeOpacity={0.85}>
              <Text style={styles.heroCtaText}>無料で今すぐ始める  →</Text>
            </TouchableOpacity>
            <Text style={styles.heroCtaSub}>登録不要・クレジットカード不要</Text>

            {/* スタッツ */}
            <View style={[styles.heroStats, glassBlur]}>
              {[
                { num: '830', unit: '問', label: '問題数' },
                { num: '5', unit: '科目', label: '対応科目' },
                { num: '3', unit: '段階', label: '難易度' },
                { num: 'AI', unit: '搭載', label: '弱点分析' },
              ].map((s, i) => (
                <React.Fragment key={s.label}>
                  {i > 0 && <View style={styles.heroStatDiv} />}
                  <View style={styles.heroStat}>
                    <Text style={styles.heroStatNum}>
                      {s.num}<Text style={styles.heroStatUnit}>{s.unit}</Text>
                    </Text>
                    <Text style={styles.heroStatLabel}>{s.label}</Text>
                  </View>
                </React.Fragment>
              ))}
            </View>
          </View>
        </View>

        {/* ─── カリキュラム ──────────────────────── */}
        <View style={styles.section}>
          <SectionLabel label="カリキュラム構成" />
          <Text style={styles.sectionTitle}>基礎から最難関まで</Text>
          <Text style={styles.sectionDesc}>
            3段階の難易度で受験本番まで完全網羅。
          </Text>
          {CURRICULUM.map((c) => (
            <View key={c.level} style={[styles.currCard, glassBlur]}>
              <View style={[styles.currLeft, { backgroundColor: c.color }]}>
                <Text style={styles.currIcon}>{c.icon}</Text>
                <Text style={styles.currLevel}>{c.level}</Text>
              </View>
              <View style={styles.currRight}>
                <View style={styles.currMain}>
                  <Text style={styles.currTarget}>{c.target}</Text>
                  <Text style={styles.currDesc}>{c.desc}</Text>
                  <View style={[styles.currCountBadge, { borderColor: c.color }]}>
                    <Text style={[styles.currCountText, { color: c.color }]}>{c.count}</Text>
                  </View>
                </View>
                <View style={styles.currSubjects}>
                  {SUBJECTS.map((s) => (
                    <View key={s.name} style={[styles.currSubTag, { borderColor: c.color + '60' }]}>
                      <Text style={styles.currSubEmoji}>{s.emoji}</Text>
                      <Text style={[styles.currSubName, { color: c.color }]}>{s.name}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* ─── 5科目 ───────────────────────────── */}
        <View style={[styles.section, { backgroundColor: C.bgAlt }]}>
          <SectionLabel label="5科目フルカバー" />
          <Text style={styles.sectionTitle}>1つのアプリで全科目</Text>
          <Text style={styles.sectionDesc}>
            科目ごとに特訓できる専用モード搭載。
          </Text>
          <View style={styles.subjectsGrid}>
            {SUBJECTS.map((s) => (
              <View key={s.name} style={[styles.subjectCard, glassBlur]}>
                <View style={[styles.subjectIconCircle, { backgroundColor: s.color + '22', borderColor: s.color + '55' }]}>
                  <Text style={styles.subjectEmoji}>{s.emoji}</Text>
                </View>
                <Text style={[styles.subjectName, { color: s.color }]}>{s.name}</Text>
                <Text style={styles.subjectDesc}>{s.desc}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* ─── 特長 ────────────────────────────── */}
        <View style={styles.section}>
          <SectionLabel label="選ばれる理由" />
          <Text style={styles.sectionTitle}>4つの強み</Text>
          <Text style={styles.sectionDesc}>
            合格実績を支えるテクノロジーと問題クオリティ。
          </Text>
          <View style={styles.featuresGrid}>
            {FEATURES.map((f) => (
              <View key={f.title} style={[styles.featureCard, glassBlur]}>
                <Image source={f.image} style={styles.featureImage} resizeMode="contain" />
                <View style={styles.featureOverlay}>
                  <View style={[styles.featureTag, { backgroundColor: f.tagColor }]}>
                    <Text style={styles.featureTagText}>{f.tag}</Text>
                  </View>
                </View>
                <View style={styles.featureBody}>
                  <Text style={styles.featureIcon}>{f.icon}</Text>
                  <Text style={styles.featureTitle}>{f.title}</Text>
                  <Text style={styles.featureDesc}>{f.desc}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* ─── いつでも・どこでも ─────────────────── */}
        <View style={[styles.section, { backgroundColor: C.bgAlt }]}>
          <SectionLabel label="マルチデバイス" />
          <Text style={styles.sectionTitle}>いつでも・どこでも</Text>
          <View style={styles.deviceRow}>
            {[
              { emoji: '📱', name: 'スマートフォン', sub: 'iOS・Android' },
              { emoji: '💻', name: 'タブレット', sub: 'iPad対応' },
              { emoji: '🖥️', name: 'パソコン', sub: 'Mac・Windows' },
            ].map((d) => (
              <View key={d.name} style={[styles.deviceCard, glassBlur]}>
                <Text style={styles.deviceEmoji}>{d.emoji}</Text>
                <Text style={styles.deviceName}>{d.name}</Text>
                <Text style={styles.deviceSub}>{d.sub}</Text>
              </View>
            ))}
          </View>
          <View style={[styles.scenarioBox, glassBlur]}>
            <Text style={styles.scenarioTitle}>📍 こんな場所で活用</Text>
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

        {/* ─── 合格者の声 ─────────────────────── */}
        <View style={[styles.section, { backgroundColor: '#030810' }]}>
          <SectionLabel label="合格者・保護者の声" goldMode />
          <Text style={[styles.sectionTitle, { color: C.white }]}>実績が語る</Text>
          {VOICES.map((v, i) => (
            <View key={i} style={[styles.voiceCard, glassBlur]}>
              <Text style={styles.voiceQuoteMark}>&ldquo;</Text>
              <Text style={styles.voiceText}>{v.text}</Text>
              <View style={styles.voiceFooter}>
                <Text style={styles.voiceName}>— {v.name}</Text>
                <View style={styles.voiceResultBadge}>
                  <Text style={styles.voiceResultText}>{v.result}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* ─── 料金プラン ─────────────────────── */}
        <View style={styles.section}>
          <SectionLabel label="料金プラン" />
          <Text style={styles.sectionTitle}>シンプルな料金設定</Text>

          {/* 無料 */}
          <View style={[styles.planCard, glassBlur]}>
            <Text style={styles.planName}>無料プラン</Text>
            <View style={styles.planPriceRow}>
              <Text style={styles.planPrice}>¥0</Text>
              <Text style={styles.planPricePeriod}> / ずっと無料</Text>
            </View>
            <View style={styles.planDivider} />
            {['✓ 全科目クイズ（全問題）', '✓ 3段階難易度選択', '✓ 全国ランキング閲覧', '✓ 科目別進捗管理'].map((f) => (
              <Text key={f} style={styles.planFeature}>{f}</Text>
            ))}
            <TouchableOpacity style={styles.planBtnOutline} onPress={handleStart} activeOpacity={0.8}>
              <Text style={styles.planBtnOutlineText}>無料で始める</Text>
            </TouchableOpacity>
          </View>

          {/* PRO */}
          <View style={[styles.planCard, styles.planCardPro, glassBlur]}>
            <View style={[styles.planBadge, { backgroundColor: '#7B2D8B' }]}>
              <Text style={styles.planBadgeText}>人気</Text>
            </View>
            <Text style={[styles.planName, { color: '#C07AE0' }]}>PRO プラン</Text>
            <View style={styles.planPriceRow}>
              <Text style={[styles.planPrice, { color: '#C07AE0' }]}>¥980</Text>
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
              <Text key={f} style={[styles.planFeature, { color: '#D4AAFF' }]}>{f}</Text>
            ))}
            <TouchableOpacity style={[styles.planBtn, { backgroundColor: '#7B2D8B' }]} onPress={handleStart} activeOpacity={0.85}>
              <Text style={styles.planBtnText}>PRO プランを始める</Text>
            </TouchableOpacity>
          </View>

          {/* MAX */}
          <View style={[styles.planCard, styles.planCardMax, glassBlur]}>
            <View style={[styles.planBadge, { backgroundColor: C.gold }]}>
              <Text style={[styles.planBadgeText, { color: '#060D1E' }]}>最上位</Text>
            </View>
            <Text style={[styles.planName, { color: C.gold }]}>MAX プラン</Text>
            <View style={styles.planPriceRow}>
              <Text style={[styles.planPrice, { color: C.gold }]}>¥2,200</Text>
              <Text style={styles.planPricePeriod}> / 月（税込）</Text>
            </View>
            <View style={styles.planDivider} />
            {[
              '✓ PROプランの全機能',
              '✓ AI弱点コーチ（間違い問題をAI分析）',
              '✓ 苦手単元の自動特定＆アドバイス',
            ].map((f) => (
              <Text key={f} style={[styles.planFeature, { color: C.goldLight }]}>{f}</Text>
            ))}
            <TouchableOpacity style={[styles.planBtn, { backgroundColor: C.gold }]} onPress={handleStart} activeOpacity={0.85}>
              <Text style={[styles.planBtnText, { color: '#060D1E' }]}>MAX プランを始める</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ─── Final CTA ──────────────────────── */}
        <View style={styles.finalCta}>
          <View style={styles.finalDecoTop} />
          <Text style={styles.finalCtaSubLabel}>✦  さあ、始めよう</Text>
          <Text style={styles.finalCtaTitle}>今日から、{'\n'}合格への道を歩む。</Text>
          <Text style={styles.finalCtaDesc}>
            登録不要・クレジットカード不要。{'\n'}
            まず無料で全問題にチャレンジしてみてください。
          </Text>
          <TouchableOpacity style={styles.finalCtaBtn} onPress={handleStart} activeOpacity={0.85}>
            <Text style={styles.finalCtaBtnText}>無料で始める  →</Text>
          </TouchableOpacity>
          <View style={styles.finalDecoBottom} />
        </View>

        {/* ─── FOOTER ─────────────────────────── */}
        <View style={styles.footer}>
          <Text style={styles.footerBrand}>
            <Text style={{ color: C.gold }}>Zaibase.Group</Text>
            {'  '}中学受験対策
          </Text>
          <View style={styles.footerDivider} />
          <Text style={styles.footerText}>info@zaibase.group</Text>
          <Text style={[styles.footerText, { marginTop: 12 }]}>
            © 2026 Zaibase Group. All rights reserved.
          </Text>
        </View>

      </ScrollView>
    </View>
  );
}

// ── セクションラベルコンポーネント ────────────────────────
function SectionLabel({ label, goldMode }: { label: string; goldMode?: boolean }) {
  return (
    <View style={sLabelStyles.wrap}>
      <View style={[sLabelStyles.line, goldMode && { backgroundColor: C.gold }]} />
      <Text style={[sLabelStyles.text, goldMode && { color: C.gold }]}>{label}</Text>
      <View style={[sLabelStyles.line, goldMode && { backgroundColor: C.gold }]} />
    </View>
  );
}
const sLabelStyles = StyleSheet.create({
  wrap:  { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 10 },
  line:  { flex: 1, height: 1, backgroundColor: C.glassBorder },
  text:  { fontSize: 13, fontWeight: '700', color: C.muted, letterSpacing: 2.5 },
});

// ── スタイル ──────────────────────────────────────────────
const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bg },
  scroll: { flex: 1 },
  scrollContent: { paddingBottom: 0 },

  // NAV
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 14,
    backgroundColor: 'rgba(4,12,28,0.92)',
    borderBottomWidth: 1,
    borderBottomColor: C.glassBorder,
    position: 'relative',
    zIndex: 10,
  },
  navLogo: { height: 44, width: 200 },
  navCta: {
    borderWidth: 1,
    borderColor: C.glassBorder,
    paddingHorizontal: 18,
    paddingVertical: 9,
    borderRadius: 6,
    backgroundColor: C.glass,
  },
  navCtaText: { color: C.white, fontSize: 14, fontWeight: '700', letterSpacing: 0.3 },

  // HERO
  hero: {
    backgroundColor: C.bg,
    overflow: 'hidden',
    position: 'relative',
  },
  heroDecorCircle1: {
    position: 'absolute',
    top: -120,
    right: -80,
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: 'rgba(75,143,228,0.06)',
  },
  heroDecorCircle2: {
    position: 'absolute',
    bottom: 40,
    left: -60,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(200,168,75,0.05)',
  },
  heroInner: {
    paddingHorizontal: 28,
    paddingTop: 52,
    paddingBottom: 52,
  },
  heroTag: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: C.goldBorder,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 3,
    marginBottom: 28,
    backgroundColor: C.goldDim,
  },
  heroTagText: {
    color: C.gold,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 2,
  },
  heroTitle: {
    fontFamily: SERIF,
    fontSize: 36,
    fontWeight: '700',
    color: C.white,
    lineHeight: 50,
    marginBottom: 28,
    letterSpacing: -0.5,
    includeFontPadding: false,
  },
  heroDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 24,
  },
  heroDividerLine: { flex: 1, height: 1, backgroundColor: C.glassBorder },
  heroDividerDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: C.gold },
  heroSub: {
    fontSize: 18,
    color: C.soft,
    lineHeight: 32,
    marginBottom: 36,
    fontWeight: '400',
  },
  heroCta: {
    backgroundColor: C.gold,
    borderRadius: 4,
    paddingVertical: 20,
    alignItems: 'center',
    marginBottom: 14,
    shadowColor: C.gold,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 10,
  },
  heroCtaText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#040C1C',
    letterSpacing: 0.5,
  },
  heroCtaSub: {
    textAlign: 'center',
    fontSize: 13,
    color: C.muted,
    fontWeight: '500',
    marginBottom: 40,
  },
  heroStats: {
    flexDirection: 'row',
    backgroundColor: C.glass,
    borderWidth: 1,
    borderColor: C.glassBorder,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 8,
  },
  heroStat: { flex: 1, alignItems: 'center' },
  heroStatNum: {
    fontSize: 26,
    fontWeight: '900',
    color: C.gold,
    includeFontPadding: false,
  },
  heroStatUnit: { fontSize: 13, fontWeight: '700', color: C.gold },
  heroStatLabel: { fontSize: 12, color: C.muted, fontWeight: '600', marginTop: 4 },
  heroStatDiv: {
    width: 1,
    backgroundColor: C.divider,
    marginVertical: 4,
  },

  // SECTION共通
  section: {
    paddingHorizontal: 20,
    paddingVertical: 52,
    backgroundColor: C.bg,
  },
  sectionTitle: {
    fontFamily: SERIF,
    fontSize: 32,
    fontWeight: '700',
    color: C.white,
    marginBottom: 10,
    letterSpacing: -0.3,
    includeFontPadding: false,
  },
  sectionDesc: {
    fontSize: 16,
    color: C.soft,
    lineHeight: 28,
    marginBottom: 28,
    fontWeight: '400',
  },

  // カリキュラム
  currCard: {
    flexDirection: 'row',
    borderRadius: 10,
    marginBottom: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: C.glassBorder,
    backgroundColor: C.glass,
  },
  currLeft: {
    width: 82,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  currIcon: { fontSize: 28, marginBottom: 6 },
  currLevel: { fontSize: 16, fontWeight: '900', color: '#FFF' },
  currRight: { flex: 1, padding: 14, flexDirection: 'row', gap: 10, alignItems: 'center' },
  currMain: { flex: 1 },
  currTarget: {
    fontSize: 15,
    fontWeight: '800',
    color: C.white,
    marginBottom: 6,
  },
  currDesc: {
    fontSize: 14,
    color: C.soft,
    lineHeight: 22,
    marginBottom: 10,
    fontWeight: '400',
  },
  currCountBadge: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  currCountText: { fontSize: 13, fontWeight: '700' },
  currSubjects: { width: 70, gap: 5 },
  currSubTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 3,
    backgroundColor: C.glass,
  },
  currSubEmoji: { fontSize: 11 },
  currSubName: { fontSize: 12, fontWeight: '800' },

  // 科目
  subjectsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  subjectCard: {
    width: (width - 52) / 2,
    borderRadius: 10,
    padding: 18,
    borderWidth: 1,
    borderColor: C.glassBorder,
    backgroundColor: C.glass,
    alignItems: 'center',
  },
  subjectIconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  subjectEmoji: { fontSize: 28 },
  subjectName: { fontSize: 20, fontWeight: '900', marginBottom: 6, textAlign: 'center' },
  subjectDesc: { fontSize: 13, color: C.muted, fontWeight: '400', lineHeight: 20, textAlign: 'center' },

  // 特長
  featuresGrid: { gap: 16 },
  featureCard: {
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: C.glassBorder,
    backgroundColor: C.glass,
  },
  featureImage: {
    width: '100%',
    aspectRatio: 4 / 3,
  },
  featureOverlay: {
    position: 'absolute',
    top: 14,
    right: 14,
  },
  featureTag: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  featureTagText: { fontSize: 13, fontWeight: '900', color: '#FFF' },
  featureBody: { padding: 18, paddingTop: 14 },
  featureIcon: { fontSize: 28, marginBottom: 6 },
  featureTitle: {
    fontFamily: SERIF,
    fontSize: 22,
    fontWeight: '700',
    color: C.white,
    marginBottom: 6,
  },
  featureDesc: { fontSize: 15, color: C.soft, lineHeight: 24, fontWeight: '400' },

  // デバイス
  deviceRow: { flexDirection: 'row', gap: 10, marginBottom: 16 },
  deviceCard: {
    flex: 1,
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: C.glassBorder,
    backgroundColor: C.glass,
  },
  deviceEmoji: { fontSize: 28, marginBottom: 8 },
  deviceName: { fontSize: 13, fontWeight: '800', color: C.white, textAlign: 'center', marginBottom: 4 },
  deviceSub: { fontSize: 11, color: C.muted, textAlign: 'center' },
  scenarioBox: {
    borderRadius: 10,
    padding: 18,
    borderWidth: 1,
    borderColor: C.glassBorder,
    backgroundColor: C.glass,
  },
  scenarioTitle: { fontSize: 15, fontWeight: '800', color: C.white, marginBottom: 14 },
  scenarioGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  scenarioItem: {
    backgroundColor: C.glassMid,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 9,
    width: (width - 76) / 2,
  },
  scenarioText: { fontSize: 13, color: C.soft, fontWeight: '600' },

  // 合格者の声
  voiceCard: {
    borderRadius: 12,
    padding: 22,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: C.glassBorder,
    backgroundColor: C.glass,
  },
  voiceQuoteMark: {
    fontFamily: SERIF,
    fontSize: 64,
    color: C.gold,
    lineHeight: 50,
    marginBottom: 8,
    opacity: 0.7,
    includeFontPadding: false,
  },
  voiceText: {
    fontFamily: SERIF,
    fontSize: 17,
    color: C.white,
    lineHeight: 30,
    fontWeight: '400',
    marginBottom: 16,
  },
  voiceFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  voiceName: { fontSize: 14, color: C.muted, fontWeight: '600' },
  voiceResultBadge: {
    backgroundColor: C.goldDim,
    borderWidth: 1,
    borderColor: C.goldBorder,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 4,
  },
  voiceResultText: { fontSize: 13, fontWeight: '800', color: C.gold },

  // 料金
  planCard: {
    borderRadius: 12,
    padding: 24,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: C.glassBorder,
    backgroundColor: C.glass,
  },
  planCardPro: { borderColor: 'rgba(123,45,139,0.5)' },
  planCardMax: { borderColor: C.goldBorder },
  planBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 12,
  },
  planBadgeText: { fontSize: 12, fontWeight: '900', color: '#FFF' },
  planName: {
    fontFamily: SERIF,
    fontSize: 22,
    fontWeight: '700',
    color: C.white,
    marginBottom: 6,
  },
  planPriceRow: { flexDirection: 'row', alignItems: 'baseline', marginBottom: 6 },
  planPrice: { fontSize: 44, fontWeight: '900', color: C.white, includeFontPadding: false },
  planPricePeriod: { fontSize: 14, color: C.muted, fontWeight: '500' },
  planDivider: { height: 1, backgroundColor: C.divider, marginVertical: 16 },
  planFeature: { fontSize: 15, color: C.soft, lineHeight: 32, fontWeight: '500' },
  planBtn: {
    borderRadius: 6,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 16,
  },
  planBtnText: { fontSize: 16, fontWeight: '900', color: '#FFF' },
  planBtnOutline: {
    borderRadius: 6,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 16,
    borderWidth: 1,
    borderColor: C.glassBorder,
  },
  planBtnOutlineText: { fontSize: 16, fontWeight: '700', color: C.white },

  // Final CTA
  finalCta: {
    backgroundColor: '#030913',
    paddingHorizontal: 28,
    paddingVertical: 72,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: C.glassBorder,
    position: 'relative',
    overflow: 'hidden',
  },
  finalDecoTop: {
    position: 'absolute',
    top: -80,
    left: width / 2 - 120,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: 'rgba(200,168,75,0.06)',
  },
  finalDecoBottom: {
    position: 'absolute',
    bottom: -60,
    right: -60,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(75,143,228,0.05)',
  },
  finalCtaSubLabel: {
    fontSize: 13,
    color: C.gold,
    fontWeight: '700',
    letterSpacing: 3,
    marginBottom: 20,
  },
  finalCtaTitle: {
    fontFamily: SERIF,
    fontSize: 42,
    fontWeight: '700',
    color: C.white,
    textAlign: 'center',
    lineHeight: 60,
    marginBottom: 20,
    letterSpacing: -0.5,
    includeFontPadding: false,
  },
  finalCtaDesc: {
    fontSize: 16,
    color: C.soft,
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 36,
    fontWeight: '400',
  },
  finalCtaBtn: {
    backgroundColor: C.gold,
    borderRadius: 4,
    paddingVertical: 22,
    paddingHorizontal: 52,
    shadowColor: C.gold,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.45,
    shadowRadius: 20,
    elevation: 12,
  },
  finalCtaBtnText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#040C1C',
    letterSpacing: 0.5,
  },

  // FOOTER
  footer: {
    backgroundColor: '#020710',
    paddingVertical: 36,
    paddingHorizontal: 24,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: C.divider,
    gap: 6,
  },
  footerBrand: {
    fontFamily: SERIF,
    fontSize: 18,
    fontWeight: '700',
    color: C.white,
    marginBottom: 6,
  },
  footerDivider: {
    width: 40,
    height: 1,
    backgroundColor: C.divider,
    marginVertical: 12,
  },
  footerText: { fontSize: 12, color: C.muted, fontWeight: '400' },
});
