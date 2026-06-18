import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  LayoutAnimation,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useBetaAccess } from '../../hooks/useBetaAccess';
import { useSubscription } from '../../hooks/useSubscription';
import { questions } from '../../data/questions';
import type { Question, SubjectKey } from '../../data/questions';

const D = {
  bg:          '#040C1C',
  glass:       'rgba(255,255,255,0.05)',
  glassMid:    'rgba(255,255,255,0.08)',
  glassBorder: 'rgba(255,255,255,0.09)',
  gold:        '#C8A84B',
  goldBorder:  'rgba(200,168,75,0.35)',
  white:       '#EDF4FF',
  soft:        '#7FA8CC',
  muted:       '#3E5870',
  pro:         '#3B82F6',
  max:         '#A855F7',
  correct:     '#10B981',
};

const glassBlur: any = Platform.OS === 'web'
  ? { backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }
  : {};

const SUBJECTS: { key: SubjectKey; label: string; emoji: string }[] = [
  { key: 'sansu',  label: '算数', emoji: '🔢' },
  { key: 'kokugo', label: '国語', emoji: '📖' },
  { key: 'rika',   label: '理科', emoji: '🔬' },
  { key: 'shakai', label: '社会', emoji: '🌏' },
  { key: 'eigo',   label: '英語', emoji: '🌐' },
];

const SCHOOL_META: Record<string, { name: string; emoji: string; hensachi: string }> = {
  'kankan':          { name: '関関同立附属',   emoji: '🎓', hensachi: '55〜68' },
  'toin':            { name: '大阪桐蔭',       emoji: '🌸', hensachi: '57〜62' },
  'kaimei':          { name: '開明',           emoji: '🌅', hensachi: '58〜62' },
  'kindai':          { name: '近畿大学附属',   emoji: '🎯', hensachi: '55〜60' },
  'kansai-hokuyo':   { name: '関西大学北陽',   emoji: '🎓', hensachi: '54〜58' },
  'myojo':           { name: '明星',           emoji: '✨', hensachi: '56〜62' },
  'tezukayama':      { name: '帝塚山学院',     emoji: '🌺', hensachi: '55〜60' },
  'kinrankai':       { name: '金蘭会',         emoji: '🌼', hensachi: '50〜56' },
  'otani':           { name: '大谷',           emoji: '🍁', hensachi: '46〜52' },
  'tokyo-meidai':    { name: '明大明治',       emoji: '🏛️', hensachi: '62〜66' },
  'tokyo-aoyama':    { name: '青山学院',       emoji: '🌿', hensachi: '58〜64' },
  'tokyo-chuo':      { name: '中央大学附属',   emoji: '🏫', hensachi: '57〜62' },
  'tokyo-hosei':     { name: '法政大学第二',   emoji: '⚖️', hensachi: '56〜60' },
  'tokyo-gakushiin': { name: '学習院',         emoji: '👑', hensachi: '54〜58' },
  'koko-hibiya':     { name: '都立日比谷',     emoji: '🏯', hensachi: '70+' },
  'koko-waseda':     { name: '早稲田大附属',   emoji: '⛩️', hensachi: '72〜75' },
  'koko-meidai':     { name: '明大明治高校',   emoji: '🏛️', hensachi: '68〜72' },
};

function QuestionCard({ q, index, isMax }: { q: Question; index: number; isMax: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  function toggle() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded((v) => !v);
    if (!expanded) setShowAnswer(false);
  }

  const isMaxOnly = q.maxOnly && !isMax;

  return (
    <View style={styles.qCard}>
      <TouchableOpacity onPress={toggle} activeOpacity={0.8} style={styles.qHeader}>
        <View style={styles.qHeaderLeft}>
          <View style={styles.qNumBadge}>
            <Text style={styles.qNum}>大問 {index + 1}</Text>
          </View>
          {q.maxOnly && (
            <View style={styles.maxBadge}>
              <Text style={styles.maxBadgeText}>MAX</Text>
            </View>
          )}
        </View>
        <Text style={styles.qChevron}>{expanded ? '▲' : '▼'}</Text>
      </TouchableOpacity>

      {isMaxOnly ? (
        <View style={styles.lockedOverlay}>
          <Text style={styles.lockedIcon}>⭐</Text>
          <Text style={styles.lockedText}>MAXプランで解放</Text>
        </View>
      ) : (
        <>
          <Text style={styles.qText}>{q.question}</Text>

          {!showAnswer ? (
            <TouchableOpacity
              style={styles.answerBtn}
              onPress={() => setShowAnswer(true)}
              activeOpacity={0.8}
            >
              <Text style={styles.answerBtnText}>解答・解説を見る</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.answerBlock}>
              <View style={styles.answerSection}>
                <Text style={styles.answerLabel}>【解答】</Text>
                <Text style={styles.answerText}>{q.answer}</Text>
              </View>
              {q.explanation && (
                <View style={styles.explanSection}>
                  <Text style={styles.explanLabel}>【解説】</Text>
                  <Text style={styles.explanText}>{q.explanation}</Text>
                </View>
              )}
              <TouchableOpacity
                style={styles.hideBtn}
                onPress={() => setShowAnswer(false)}
                activeOpacity={0.8}
              >
                <Text style={styles.hideBtnText}>閉じる</Text>
              </TouchableOpacity>
            </View>
          )}
        </>
      )}
    </View>
  );
}

export default function SchoolExamScreen() {
  const { course } = useLocalSearchParams<{ course: string }>();
  const router = useRouter();
  const { hasAccess: betaAccess } = useBetaAccess();
  const { tier: subTier } = useSubscription();
  const isPro = subTier === 'pro' || subTier === 'max' || betaAccess;
  const isMax = subTier === 'max' || betaAccess;

  const [activeSubject, setActiveSubject] = useState<SubjectKey>('sansu');

  const meta = SCHOOL_META[course ?? ''] ?? { name: course, emoji: '🏫', hensachi: '—' };

  const subjectQuestions = useMemo(() => {
    return questions.filter(
      (q) =>
        q.course === course &&
        q.subject === activeSubject &&
        q.examType !== undefined &&
        (isMax || !q.maxOnly),
    );
  }, [course, activeSubject, isMax]);

  // Show MAX-only as locked cards when user has PRO
  const allSubjectQuestions = useMemo(() => {
    return questions.filter(
      (q) =>
        q.course === course &&
        q.subject === activeSubject &&
        q.examType !== undefined,
    );
  }, [course, activeSubject]);

  const displayQuestions = isPro ? allSubjectQuestions : subjectQuestions.slice(0, 3);

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
          <Text style={styles.hensachi}>偏差値 {meta.hensachi}</Text>
        </View>
        <View style={{ width: 40 }} />
      </View>

      {/* Subject tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.subjectScroll}
        contentContainerStyle={styles.subjectRow}
      >
        {SUBJECTS.map((s) => {
          const count = questions.filter(
            (q) => q.course === course && q.subject === s.key && q.examType !== undefined,
          ).length;
          if (count === 0) return null;
          const active = activeSubject === s.key;
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
              <Text style={[styles.subjectCount, active && styles.subjectCountActive]}>
                {count}問
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Questions */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {displayQuestions.length === 0 ? (
          <View style={styles.empty}>
            <Text style={styles.emptyIcon}>📝</Text>
            <Text style={styles.emptyText}>この科目の問題は準備中です</Text>
          </View>
        ) : (
          displayQuestions.map((q, i) => (
            <QuestionCard key={q.id} q={q} index={i} isMax={isMax} />
          ))
        )}

        {!isPro && (
          <TouchableOpacity
            style={styles.upgradeCard}
            onPress={() => router.push('/paywall')}
            activeOpacity={0.85}
          >
            <Text style={styles.upgradeIcon}>🔓</Text>
            <Text style={styles.upgradeTitle}>PROで全問題を解く</Text>
            <Text style={styles.upgradeSub}>15問すべて + 詳しい解説</Text>
          </TouchableOpacity>
        )}
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
  schoolEmoji: { fontSize: 24, marginBottom: 2 },
  schoolName: { color: D.white, fontSize: 17, fontWeight: '700' },
  hensachi: { color: D.soft, fontSize: 11, marginTop: 2 },
  subjectScroll: { maxHeight: 70, borderBottomWidth: 1, borderBottomColor: D.glassBorder },
  subjectRow: { flexDirection: 'row', paddingHorizontal: 12, paddingVertical: 8, gap: 8 },
  subjectTab: {
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: D.glass,
    borderWidth: 1,
    borderColor: D.glassBorder,
    minWidth: 64,
  },
  subjectTabActive: {
    backgroundColor: 'rgba(200,168,75,0.2)',
    borderColor: D.gold,
  },
  subjectEmoji: { fontSize: 14 },
  subjectLabel: { color: D.soft, fontSize: 12, fontWeight: '600', marginTop: 1 },
  subjectLabelActive: { color: D.gold },
  subjectCount: { color: D.muted, fontSize: 10 },
  subjectCountActive: { color: D.gold },
  scroll: { flex: 1 },
  content: { padding: 16, paddingBottom: 40 },
  qCard: {
    backgroundColor: D.glass,
    borderWidth: 1,
    borderColor: D.glassBorder,
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    ...glassBlur,
  },
  qHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  qHeaderLeft: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  qNumBadge: {
    backgroundColor: 'rgba(200,168,75,0.2)',
    borderWidth: 1,
    borderColor: D.goldBorder,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  qNum: { color: D.gold, fontSize: 12, fontWeight: '700' },
  maxBadge: {
    backgroundColor: 'rgba(168,85,247,0.3)',
    borderWidth: 1,
    borderColor: D.max,
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  maxBadgeText: { color: '#C084FC', fontSize: 10, fontWeight: '700' },
  qChevron: { color: D.muted, fontSize: 12 },
  qText: {
    color: D.white,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 14,
  },
  answerBtn: {
    backgroundColor: 'rgba(200,168,75,0.15)',
    borderWidth: 1,
    borderColor: D.goldBorder,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  answerBtnText: { color: D.gold, fontSize: 14, fontWeight: '700' },
  answerBlock: {
    borderTopWidth: 1,
    borderTopColor: D.glassBorder,
    paddingTop: 14,
    gap: 12,
  },
  answerSection: {
    backgroundColor: 'rgba(16,185,129,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(16,185,129,0.3)',
    borderRadius: 10,
    padding: 12,
  },
  answerLabel: { color: D.correct, fontSize: 12, fontWeight: '700', marginBottom: 6 },
  answerText: { color: D.white, fontSize: 14, lineHeight: 22 },
  explanSection: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 10,
    padding: 12,
  },
  explanLabel: { color: D.soft, fontSize: 12, fontWeight: '700', marginBottom: 6 },
  explanText: { color: D.soft, fontSize: 13, lineHeight: 21 },
  hideBtn: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: D.glass,
    borderWidth: 1,
    borderColor: D.glassBorder,
  },
  hideBtnText: { color: D.muted, fontSize: 12 },
  lockedOverlay: {
    alignItems: 'center',
    paddingVertical: 20,
    gap: 6,
  },
  lockedIcon: { fontSize: 28 },
  lockedText: { color: D.muted, fontSize: 13 },
  empty: {
    alignItems: 'center',
    paddingVertical: 60,
    gap: 12,
  },
  emptyIcon: { fontSize: 40 },
  emptyText: { color: D.muted, fontSize: 15 },
  upgradeCard: {
    backgroundColor: 'rgba(59,130,246,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(59,130,246,0.4)',
    borderRadius: 14,
    padding: 20,
    alignItems: 'center',
    marginTop: 8,
    gap: 4,
  },
  upgradeIcon: { fontSize: 28 },
  upgradeTitle: { color: D.pro, fontSize: 16, fontWeight: '700' },
  upgradeSub: { color: D.soft, fontSize: 13 },
});
