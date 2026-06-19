import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useBetaAccess } from '../../hooks/useBetaAccess';
import { useSubscription } from '../../hooks/useSubscription';
import { questions } from '../../data/questions';
import type { SubjectKey } from '../../data/questions';

const D = {
  bg:          '#040C1C',
  glass:       'rgba(255,255,255,0.05)',
  glassMid:    'rgba(255,255,255,0.08)',
  glassBorder: 'rgba(255,255,255,0.09)',
  gold:        '#C8A84B',
  goldDim:     'rgba(200,168,75,0.15)',
  goldBorder:  'rgba(200,168,75,0.35)',
  white:       '#EDF4FF',
  soft:        '#7FA8CC',
  muted:       '#3E5870',
  pro:         '#3B82F6',
  max:         '#A855F7',
  green:       '#10B981',
  orange:      '#F59E0B',
  red:         '#EF4444',
};

const glassBlur: any = Platform.OS === 'web'
  ? { backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }
  : {};

const SUBJECTS: { key: SubjectKey; label: string; emoji: string }[] = [
  { key: 'sansu',  label: '算数',  emoji: '🔢' },
  { key: 'kokugo', label: '国語',  emoji: '📖' },
  { key: 'rika',   label: '理科',  emoji: '🔬' },
  { key: 'shakai', label: '社会',  emoji: '🌏' },
  { key: 'eigo',   label: '英語',  emoji: '🌐' },
];

const SCHOOL_META: Record<string, { name: string; emoji: string; hensachi: string; region: string }> = {
  'seiko':           { name: '大阪星光学院',   emoji: '⭐', hensachi: '66〜68', region: '大阪' },
  'seifu-nankai':    { name: '清風南海',       emoji: '🌊', hensachi: '64〜66', region: '大阪' },
  'takatsuki':       { name: '高槻中学校',     emoji: '🌸', hensachi: '63〜66', region: '大阪' },
  'kankan':          { name: '関関同立附属',   emoji: '🎓', hensachi: '55〜68', region: '関西' },
  'toin':            { name: '大阪桐蔭',       emoji: '🌸', hensachi: '57〜62', region: '大阪' },
  'kaimei':          { name: '開明',           emoji: '🌅', hensachi: '58〜62', region: '大阪' },
  'kindai':          { name: '近畿大学附属',   emoji: '🎯', hensachi: '55〜60', region: '大阪' },
  'kansai-hokuyo':   { name: '関西大学北陽',   emoji: '🎓', hensachi: '54〜58', region: '大阪' },
  'myojo':           { name: '明星',           emoji: '✨', hensachi: '56〜62', region: '大阪' },
  'tezukayama':      { name: '帝塚山学院',     emoji: '🌺', hensachi: '55〜60', region: '奈良' },
  'kinrankai':       { name: '金蘭会',         emoji: '🌼', hensachi: '50〜56', region: '大阪' },
  'otani':           { name: '大谷',           emoji: '🍁', hensachi: '46〜52', region: '大阪' },
  'tokyo-meidai':    { name: '明大明治',       emoji: '🏛️', hensachi: '62〜66', region: '東京' },
  'tokyo-aoyama':    { name: '青山学院',       emoji: '🌿', hensachi: '58〜64', region: '東京' },
  'tokyo-chuo':      { name: '中央大学附属',   emoji: '🏫', hensachi: '57〜62', region: '東京' },
  'tokyo-hosei':     { name: '法政大学第二',   emoji: '⚖️', hensachi: '56〜60', region: '東京' },
  'tokyo-gakushiin': { name: '学習院',         emoji: '👑', hensachi: '54〜58', region: '東京' },
  'koko-hibiya':     { name: '都立日比谷',     emoji: '🏯', hensachi: '70+', region: '東京' },
  'koko-waseda':     { name: '早稲田大附属',   emoji: '⛩️', hensachi: '72〜75', region: '東京' },
  'koko-meidai':     { name: '明大明治高校',   emoji: '🏛️', hensachi: '68〜72', region: '東京' },
};

type StageKey = 'textbook' | 'kiso' | 'oyo' | 'mogi' | 'kakomon';

type Stage = {
  key: StageKey;
  label: string;
  emoji: string;
  desc: string;
  color: string;
  tier: 'free' | 'pro' | 'max';
  difficultyLabel: string;
};

const STAGES: Stage[] = [
  {
    key: 'textbook',
    label: 'テキスト本文',
    emoji: '📚',
    desc: '単元の解説・公式・重要事項をまとめて学習',
    color: D.green,
    tier: 'pro',
    difficultyLabel: '解説',
  },
  {
    key: 'kiso',
    label: '基礎問題',
    emoji: '📝',
    desc: '基本的な計算・知識を確認する標準問題',
    color: '#38BDF8',
    tier: 'free',
    difficultyLabel: '基礎',
  },
  {
    key: 'oyo',
    label: '応用問題',
    emoji: '⚡',
    desc: '入試頻出の発展問題・思考力問題',
    color: D.orange,
    tier: 'pro',
    difficultyLabel: '応用',
  },
  {
    key: 'mogi',
    label: '模擬試験',
    emoji: '🎯',
    desc: '本番形式の時間制限付き模擬テスト',
    color: D.red,
    tier: 'max',
    difficultyLabel: '総合',
  },
  {
    key: 'kakomon',
    label: '過去入試問題',
    emoji: '🏆',
    desc: '実際の入試問題・学校別傾向を完全対策',
    color: D.gold,
    tier: 'max',
    difficultyLabel: '入試',
  },
];

export default function SchoolCurriculumScreen() {
  const { course } = useLocalSearchParams<{ course: string }>();
  const router = useRouter();
  const { hasAccess: betaAccess } = useBetaAccess();
  const { tier: subTier } = useSubscription();
  const isPro = subTier === 'pro' || subTier === 'max' || betaAccess;
  const isMax = subTier === 'max' || betaAccess;

  const [activeSubject, setActiveSubject] = useState<SubjectKey>('sansu');

  const meta = SCHOOL_META[course ?? ''] ?? { name: course ?? '学校', emoji: '🏫', hensachi: '—', region: '—' };

  // Question counts per stage
  const stageCounts = useMemo(() => {
    const all = questions.filter((q) => q.course === course && q.subject === activeSubject);
    const general = questions.filter((q) => (!q.course || q.course === 'general') && q.subject === activeSubject);
    return {
      textbook: 0, // lessons-based
      kiso: (general.filter((q) => q.difficulty === 'basic').length) + (all.filter((q) => q.difficulty === 'basic').length),
      oyo: (general.filter((q) => q.difficulty === 'advanced').length) + (all.filter((q) => q.difficulty === 'advanced').length),
      mogi: Math.min(all.length + general.filter((q) => q.difficulty === 'advanced').length, 30),
      kakomon: all.length,
    };
  }, [course, activeSubject]);

  function hasAccess(tier: Stage['tier']): boolean {
    if (tier === 'free') return true;
    if (tier === 'pro') return isPro;
    return isMax;
  }

  function handleStage(stage: Stage) {
    if (!hasAccess(stage.tier)) {
      router.push('/paywall' as any);
      return;
    }

    switch (stage.key) {
      case 'textbook':
        // Navigate to textbook tab
        router.push('/(tabs)/textbook' as any);
        break;
      case 'kiso':
        router.push(`/quiz/${activeSubject}?difficulty=basic&course=${course}` as any);
        break;
      case 'oyo':
        router.push(`/quiz/${activeSubject}?difficulty=advanced&course=${course}` as any);
        break;
      case 'mogi':
        router.push(`/quiz/${activeSubject}?mode=mock&course=${course}` as any);
        break;
      case 'kakomon':
        router.push(`/quiz/${activeSubject}?mode=kakomon&course=${course}` as any);
        break;
    }
  }

  // Subjects that have questions for this school
  const availableSubjects = useMemo(() => {
    return SUBJECTS.filter((s) => {
      const schoolQ = questions.filter((q) => q.course === course && q.subject === s.key);
      const generalQ = questions.filter((q) => (!q.course || q.course === 'general') && q.subject === s.key);
      return schoolQ.length > 0 || generalQ.length > 5;
    });
  }, [course]);

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <View style={styles.topBarCenter}>
          <Text style={styles.schoolEmoji}>{meta.emoji}</Text>
          <Text style={styles.schoolName}>{meta.name}</Text>
          <Text style={styles.hensachi}>偏差値 {meta.hensachi} ｜ {meta.region}</Text>
        </View>
        <View style={{ width: 40 }} />
      </View>

      {/* Learning Path Banner */}
      <View style={styles.pathBanner}>
        <Text style={styles.pathLabel}>📈 学習ロードマップ</Text>
        <View style={styles.pathFlow}>
          {['テキスト', '基礎', '応用', '模試', '過去問'].map((step, i, arr) => (
            <React.Fragment key={step}>
              <Text style={styles.pathStep}>{step}</Text>
              {i < arr.length - 1 && <Text style={styles.pathArrow}>→</Text>}
            </React.Fragment>
          ))}
        </View>
      </View>

      {/* Subject selector */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.subjectScroll}
        contentContainerStyle={styles.subjectRow}
      >
        {(availableSubjects.length > 0 ? availableSubjects : SUBJECTS).map((s) => {
          const active = activeSubject === s.key;
          const count = questions.filter((q) => q.course === course && q.subject === s.key).length;
          return (
            <TouchableOpacity
              key={s.key}
              style={[styles.subjectTab, active && styles.subjectTabActive]}
              onPress={() => setActiveSubject(s.key)}
              activeOpacity={0.8}
            >
              <Text style={styles.subjectEmoji}>{s.emoji}</Text>
              <Text style={[styles.subjectLabel, active && styles.subjectLabelActive]}>
                {s.label}
              </Text>
              {count > 0 && (
                <View style={[styles.countBadge, active && styles.countBadgeActive]}>
                  <Text style={[styles.countBadgeText, active && styles.countBadgeTextActive]}>
                    {count}問
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Stage cards */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {STAGES.map((stage, idx) => {
          const unlocked = hasAccess(stage.tier);
          const count = stageCounts[stage.key];

          return (
            <TouchableOpacity
              key={stage.key}
              style={[styles.stageCard, { borderColor: unlocked ? stage.color + '66' : D.glassBorder }]}
              onPress={() => handleStage(stage)}
              activeOpacity={0.85}
            >
              {/* Step number ribbon */}
              <View style={[styles.stepRibbon, { backgroundColor: unlocked ? stage.color : D.muted }]}>
                <Text style={styles.stepNum}>STEP {idx + 1}</Text>
              </View>

              <View style={styles.stageRow}>
                {/* Left */}
                <View style={[styles.stageIconWrap, { backgroundColor: stage.color + '22' }]}>
                  <Text style={styles.stageEmoji}>{stage.emoji}</Text>
                </View>

                {/* Center */}
                <View style={styles.stageInfo}>
                  <Text style={[styles.stageLabel, !unlocked && styles.stageLabelLocked]}>
                    {stage.label}
                  </Text>
                  <Text style={styles.stageDesc}>{stage.desc}</Text>
                  <View style={styles.stageMeta}>
                    <View style={[styles.diffBadge, { backgroundColor: stage.color + '33' }]}>
                      <Text style={[styles.diffBadgeText, { color: stage.color }]}>
                        {stage.difficultyLabel}
                      </Text>
                    </View>
                    {stage.key !== 'textbook' && count > 0 && (
                      <Text style={styles.stageCount}>{count}問</Text>
                    )}
                    {stage.key === 'textbook' && (
                      <Text style={styles.stageCount}>解説あり</Text>
                    )}
                  </View>
                </View>

                {/* Right */}
                <View style={styles.stageRight}>
                  {!unlocked ? (
                    <View style={[styles.tierBadge,
                      stage.tier === 'pro' ? styles.tierPro : styles.tierMax
                    ]}>
                      <Text style={styles.tierText}>
                        {stage.tier === 'pro' ? 'PRO' : 'MAX'}
                      </Text>
                    </View>
                  ) : (
                    <View style={[styles.goBtn, { backgroundColor: stage.color + '33', borderColor: stage.color + '88' }]}>
                      <Text style={[styles.goBtnText, { color: stage.color }]}>開始 ›</Text>
                    </View>
                  )}
                </View>
              </View>

              {/* Progress dots */}
              {unlocked && count > 0 && stage.key !== 'textbook' && (
                <View style={styles.progressRow}>
                  {Array.from({ length: Math.min(count, 10) }).map((_, i) => (
                    <View key={i} style={[styles.progressDot, { backgroundColor: stage.color + '55' }]} />
                  ))}
                  {count > 10 && (
                    <Text style={[styles.progressMore, { color: stage.color }]}>+{count - 10}</Text>
                  )}
                </View>
              )}
            </TouchableOpacity>
          );
        })}

        {/* Info note */}
        <View style={styles.infoNote}>
          <Text style={styles.infoNoteText}>
            💡 テキスト→基礎→応用→模試→過去問の順に進むと効果的です
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: D.bg },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: D.glassBorder,
  },
  backBtn: { width: 40, alignItems: 'flex-start' },
  backArrow: { color: D.soft, fontSize: 28, fontWeight: '300' },
  topBarCenter: { flex: 1, alignItems: 'center' },
  schoolEmoji: { fontSize: 22, marginBottom: 2 },
  schoolName: { color: D.white, fontSize: 17, fontWeight: '700' },
  hensachi: { color: D.soft, fontSize: 11, marginTop: 2 },

  pathBanner: {
    backgroundColor: 'rgba(200,168,75,0.08)',
    borderBottomWidth: 1,
    borderBottomColor: D.goldBorder,
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 4,
  },
  pathLabel: { color: D.gold, fontSize: 11, fontWeight: '700' },
  pathFlow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  pathStep: { color: D.soft, fontSize: 11 },
  pathArrow: { color: D.muted, fontSize: 11 },

  subjectScroll: {
    maxHeight: 68,
    borderBottomWidth: 1,
    borderBottomColor: D.glassBorder,
  },
  subjectRow: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 8,
    alignItems: 'center',
  },
  subjectTab: {
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: D.glass,
    borderWidth: 1,
    borderColor: D.glassBorder,
    minWidth: 58,
    gap: 2,
  },
  subjectTabActive: {
    backgroundColor: 'rgba(200,168,75,0.15)',
    borderColor: D.gold,
  },
  subjectEmoji: { fontSize: 14 },
  subjectLabel: { color: D.soft, fontSize: 11, fontWeight: '600' },
  subjectLabelActive: { color: D.gold },
  countBadge: {
    backgroundColor: D.glass,
    borderRadius: 6,
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  countBadgeActive: { backgroundColor: D.goldDim },
  countBadgeText: { color: D.muted, fontSize: 9, fontWeight: '600' },
  countBadgeTextActive: { color: D.gold },

  scroll: { flex: 1 },
  content: { padding: 14, paddingBottom: 40, gap: 12 },

  stageCard: {
    backgroundColor: D.glass,
    borderWidth: 1,
    borderRadius: 16,
    overflow: 'hidden',
    ...glassBlur,
  },
  stepRibbon: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  stepNum: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },
  stageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    gap: 12,
  },
  stageIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  stageEmoji: { fontSize: 24 },
  stageInfo: { flex: 1, gap: 4 },
  stageLabel: { color: D.white, fontSize: 15, fontWeight: '700' },
  stageLabelLocked: { color: D.muted },
  stageDesc: { color: D.soft, fontSize: 12, lineHeight: 17 },
  stageMeta: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 4 },
  diffBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  diffBadgeText: { fontSize: 11, fontWeight: '700' },
  stageCount: { color: D.muted, fontSize: 11 },

  stageRight: { flexShrink: 0, alignItems: 'center' },
  tierBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
  },
  tierPro: {
    backgroundColor: 'rgba(59,130,246,0.2)',
    borderColor: 'rgba(59,130,246,0.5)',
  },
  tierMax: {
    backgroundColor: 'rgba(168,85,247,0.2)',
    borderColor: 'rgba(168,85,247,0.5)',
  },
  tierText: { color: D.white, fontSize: 11, fontWeight: '700' },
  goBtn: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
  },
  goBtnText: { fontSize: 13, fontWeight: '700' },

  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingBottom: 12,
    gap: 4,
  },
  progressDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  progressMore: { fontSize: 10, fontWeight: '700', marginLeft: 2 },

  infoNote: {
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderRadius: 10,
    padding: 12,
    marginTop: 4,
  },
  infoNoteText: {
    color: D.muted,
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
  },
});
