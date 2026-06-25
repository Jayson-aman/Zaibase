import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  TextInput,
} from 'react-native';
import { useFocusEffect } from 'expo-router';
import { loadProgress, ProgressData } from '../../store/progress';
import { subjectInfo, type SubjectKey } from '../../data/questions-meta';
import { useQuestionsBySubjectMap } from '../../hooks/useSubjectQuestions';
import { useSubscription } from '../../hooks/useSubscription';
import { getWeakPointCoaching } from '../../services/aiCoach';
import Paywall from '../../components/Paywall';

// ─── palette ────────────────────────────────────────────────────────────────
const C = {
  bg: '#F5F8FF',
  card: '#FFFFFF',
  primary: '#0EA5E9',
  coral: '#FF6B35',
  gold: '#F59E0B',
  green: '#10B981',
  purple: '#7C3AED',
  text: '#1E293B',
  sub: '#64748B',
  muted: '#94A3B8',
  divider: '#E2E8F0',
} as const;

const SUBJECTS: SubjectKey[] = ['sansu', 'kokugo', 'rika', 'shakai', 'eigo'];

type Grade = { label: string; color: string; desc: string; probability: number };
function gradeFromPct(pct: number): Grade {
  if (pct >= 80) return { label: 'A', color: C.green,  desc: '合格圏内',             probability: 85 };
  if (pct >= 65) return { label: 'B', color: C.primary, desc: '合格圏にほぼ届いている', probability: 65 };
  if (pct >= 50) return { label: 'C', color: C.gold,   desc: '努力次第で合格可能',    probability: 45 };
  return             { label: 'D', color: C.coral,  desc: 'さらなる学習が必要',    probability: 25 };
}

// ─── StepCard ───────────────────────────────────────────────────────────────
function StepCard({
  step,
  title,
  subtitle,
  badge,
  badgeColor,
  children,
}: {
  step: number;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  children: React.ReactNode;
}) {
  return (
    <View style={sc.card}>
      <View style={sc.header}>
        <View style={[sc.circle, { borderColor: badgeColor }]}>
          <Text style={[sc.num, { color: badgeColor }]}>{step}</Text>
        </View>
        <View style={sc.titleBlock}>
          <View style={sc.titleRow}>
            <Text style={sc.title}>{title}</Text>
            <View style={[sc.pill, { backgroundColor: badgeColor }]}>
              <Text style={sc.pillText}>{badge}</Text>
            </View>
          </View>
          <Text style={sc.sub}>{subtitle}</Text>
        </View>
      </View>
      <View style={sc.divider} />
      <View style={sc.body}>{children}</View>
    </View>
  );
}
const sc = StyleSheet.create({
  card: {
    backgroundColor: C.card,
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  num: { fontSize: 16, fontWeight: '800' },
  titleBlock: { flex: 1 },
  titleRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  title: { fontSize: 16, fontWeight: '700', color: C.text },
  pill: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10 },
  pillText: { fontSize: 11, fontWeight: '700', color: '#FFFFFF' },
  sub: { fontSize: 12, color: C.sub, marginTop: 2 },
  divider: { height: 1, backgroundColor: C.divider, marginHorizontal: 16 },
  body: { padding: 16 },
});

// ─── LockedContent ───────────────────────────────────────────────────────────
function LockedContent({
  text,
  buttonLabel,
  buttonColor,
  onUnlock,
}: {
  text: string;
  buttonLabel: string;
  buttonColor: string;
  onUnlock: () => void;
}) {
  return (
    <View style={lk.wrap}>
      <Text style={lk.lock}>🔒</Text>
      <Text style={lk.desc}>{text}</Text>
      <TouchableOpacity
        style={[lk.btn, { backgroundColor: buttonColor }]}
        onPress={onUnlock}
        activeOpacity={0.85}
      >
        <Text style={lk.btnText}>{buttonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}
const lk = StyleSheet.create({
  wrap: { alignItems: 'center', paddingVertical: 8 },
  lock: { fontSize: 32, marginBottom: 10 },
  desc: { fontSize: 13, color: C.sub, textAlign: 'center', lineHeight: 20, marginBottom: 16 },
  btn: { paddingHorizontal: 24, paddingVertical: 12, borderRadius: 24 },
  btnText: { fontSize: 14, fontWeight: '700', color: '#FFFFFF' },
});

// ─── main screen ─────────────────────────────────────────────────────────────
export default function CoachScreen() {
  const { bySubject: questionsBySubject } = useQuestionsBySubjectMap();
  const [progressData, setProgressData] = useState<ProgressData>({});
  const { isPro, isMax } = useSubscription();
  const [paywallVisible, setPaywallVisible] = useState(false);

  // つまずき分析 state
  const [coachLoading, setCoachLoading] = useState(false);
  const [coachAdvice, setCoachAdvice] = useState<string | null>(null);

  // 記述AI添削 state
  const [essayInput, setEssayInput] = useState('');
  const [essayLoading, setEssayLoading] = useState(false);
  const [essayFeedback, setEssayFeedback] = useState<string | null>(null);

  useFocusEffect(
    useCallback(() => {
      loadProgress().then(setProgressData);
    }, []),
  );

  // ── derived data ──────────────────────────────────────────────────────────
  const subjectPct = (s: SubjectKey) => {
    const p = progressData[s];
    const total = p?.total ?? 0;
    return total > 0 ? Math.round(((p?.correct ?? 0) / total) * 100) : 0;
  };
  const studiedSubjects = SUBJECTS.filter((s) => (progressData[s]?.total ?? 0) > 0);
  const totalCorrect = SUBJECTS.reduce((n, s) => n + (progressData[s]?.correct ?? 0), 0);
  const totalQuestions = SUBJECTS.reduce((n, s) => n + (progressData[s]?.total ?? 0), 0);
  const overallPct = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
  const overallGrade = gradeFromPct(overallPct);

  const wrongCountBySubject = [...SUBJECTS]
    .map((s) => ({ key: s, count: progressData[s]?.wrongQuestionIds?.length ?? 0 }))
    .sort((a, b) => b.count - a.count);
  const maxWrong = Math.max(...wrongCountBySubject.map((x) => x.count), 1);

  const worstSubject = studiedSubjects.reduce<SubjectKey | null>(
    (w, s) => (w == null || subjectPct(s) < subjectPct(w) ? s : w),
    null,
  );

  // ── handlers ──────────────────────────────────────────────────────────────
  function aiErrorMessage(err: unknown): string {
    if (err != null && typeof err === 'object' && 'message' in err) {
      const msg = String((err as { message: unknown }).message);
      if (msg.length > 0 && msg.length < 200) return msg;
    }
    return 'しばらく待ってからもう一度お試しください。';
  }

  async function handleAskCoach() {
    if (!isPro) { setPaywallVisible(true); return; }
    if (!worstSubject) {
      Alert.alert('まだデータがありません', '問題に挑戦するとAIが弱点を分析できるようになります。');
      return;
    }
    const wrongIds = progressData[worstSubject]?.wrongQuestionIds ?? [];
    const items = wrongIds
      .map((id) => (questionsBySubject?.[worstSubject] ?? []).find((q) => q.id === id))
      .filter((q): q is NonNullable<typeof q> => q != null)
      .map((q) => ({ question: q.question, answer: q.answer }));
    if (items.length === 0) {
      Alert.alert('まだデータがありません', '問題に挑戦するとAIが弱点を分析できるようになります。');
      return;
    }
    setCoachLoading(true);
    setCoachAdvice(null);
    try {
      const advice = await getWeakPointCoaching(subjectInfo[worstSubject].name, items);
      setCoachAdvice(advice);
    } catch (err) {
      Alert.alert('AIコーチ', aiErrorMessage(err));
    } finally {
      setCoachLoading(false);
    }
  }

  async function handleEssaySubmit() {
    if (!isMax) { setPaywallVisible(true); return; }
    if (!essayInput.trim()) { Alert.alert('記述を入力してください'); return; }
    setEssayLoading(true);
    setEssayFeedback(null);
    try {
      // uses coaching endpoint as placeholder — a dedicated gradeEssay function can be added later
      const feedback = await getWeakPointCoaching('記述問題', [
        { question: '次の記述をわかりやすさ・正確さ・表現の観点で採点・添削してください', answer: essayInput.trim() },
      ]);
      setEssayFeedback(feedback);
    } catch (err) {
      Alert.alert('AI添削', aiErrorMessage(err));
    } finally {
      setEssayLoading(false);
    }
  }

  // ── render ────────────────────────────────────────────────────────────────
  return (
    <SafeAreaView style={s.safe}>
      <ScrollView
        style={s.scroll}
        contentContainerStyle={s.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ─── header ───────────────────────────────────────── */}
        <View style={s.header}>
          <Text style={s.headerTitle}>🎓 AIコーチ</Text>
          <Text style={s.headerSub}>あなただけの学習プランを提案します</Text>
        </View>

        {/* ─── Step 1: つまずき分析 ─────────────────────────── */}
        <StepCard
          step={1}
          title="つまずき検知"
          subtitle="苦手な単元を特定して集中対策"
          badge="Pro"
          badgeColor={C.coral}
        >
          {isPro ? (
            <View>
              <Text style={s.sectionLabel}>科目別まちがい数</Text>
              {wrongCountBySubject.map(({ key, count }) => {
                const info = subjectInfo[key];
                const pct = subjectPct(key);
                const barW = count / maxWrong;
                const barColor = pct >= 70 ? C.green : pct >= 50 ? C.gold : C.coral;
                return (
                  <View key={key} style={s.barRow}>
                    <Text style={s.barEmoji}>{info.emoji}</Text>
                    <View style={s.barMeta}>
                      <View style={s.barLabelRow}>
                        <Text style={s.barSubject}>{info.name}</Text>
                        <Text style={s.barDetail}>
                          {count > 0 ? `${count}問まちがい` : 'まちがいなし'}
                          {pct > 0 ? `  正解率 ${pct}%` : ''}
                        </Text>
                      </View>
                      <View style={s.barTrack}>
                        <View style={[s.barFill, { width: `${barW * 100}%`, backgroundColor: barColor }]} />
                      </View>
                    </View>
                  </View>
                );
              })}

              {worstSubject != null && (
                <TouchableOpacity
                  style={s.coachBtn}
                  onPress={handleAskCoach}
                  activeOpacity={0.85}
                  disabled={coachLoading}
                >
                  {coachLoading ? (
                    <ActivityIndicator color="#FFF" />
                  ) : (
                    <Text style={s.coachBtnText}>
                      🤖 {subjectInfo[worstSubject].name}の弱点をAIに相談する
                    </Text>
                  )}
                </TouchableOpacity>
              )}

              {coachAdvice != null && (
                <View style={s.adviceBox}>
                  <Text style={s.adviceTitle}>AIコーチのアドバイス</Text>
                  <Text style={s.adviceText}>{coachAdvice}</Text>
                </View>
              )}

              {studiedSubjects.length === 0 && (
                <Text style={s.emptyHint}>クイズを解くと弱点が表示されます。まず問題に挑戦してみましょう！</Text>
              )}
            </View>
          ) : (
            <LockedContent
              text="まちがえた問題をAIが分析して苦手単元を特定し、集中的な復習プランを自動生成します。"
              buttonLabel="Proプランで解放 ¥1,000/月"
              buttonColor={C.coral}
              onUnlock={() => setPaywallVisible(true)}
            />
          )}
        </StepCard>

        {/* ─── Step 2: 合格判定 ─────────────────────────────── */}
        <StepCard
          step={2}
          title="合格可能性判定"
          subtitle="志望校への合格ラインを確認"
          badge="Pro"
          badgeColor={C.primary}
        >
          {isPro ? (
            <View>
              {studiedSubjects.length === 0 ? (
                <Text style={s.emptyHint}>
                  クイズを解くと合格可能性が表示されます。まず問題に挑戦してみましょう！
                </Text>
              ) : (
                <View>
                  {/* overall grade circle */}
                  <View style={s.gradeRow}>
                    <View style={[s.gradeCircle, { borderColor: overallGrade.color }]}>
                      <Text style={[s.gradeLetter, { color: overallGrade.color }]}>
                        {overallGrade.label}
                      </Text>
                      <Text style={[s.gradePctText, { color: overallGrade.color }]}>
                        {overallPct}%
                      </Text>
                    </View>
                    <View style={s.gradeInfo}>
                      <Text style={s.gradeDesc}>{overallGrade.desc}</Text>
                      <View style={s.probRow}>
                        <Text style={s.probLabel}>合格可能性</Text>
                        <Text style={[s.probValue, { color: overallGrade.color }]}>
                          {overallGrade.probability}%
                        </Text>
                      </View>
                      <View style={s.probTrack}>
                        <View
                          style={[
                            s.probFill,
                            { width: `${overallGrade.probability}%`, backgroundColor: overallGrade.color },
                          ]}
                        />
                      </View>
                    </View>
                  </View>

                  {/* per-subject grid */}
                  <Text style={s.sectionLabel}>科目別判定</Text>
                  <View style={s.subjectGrid}>
                    {SUBJECTS.map((sub) => {
                      const pct = subjectPct(sub);
                      const g = gradeFromPct(pct);
                      const info = subjectInfo[sub];
                      const studied = studiedSubjects.includes(sub);
                      return (
                        <View key={sub} style={s.subjectCell}>
                          <Text style={s.cellEmoji}>{info.emoji}</Text>
                          <Text style={s.cellName}>{info.name}</Text>
                          <View
                            style={[s.gradePill, { backgroundColor: studied ? g.color : C.muted }]}
                          >
                            <Text style={s.gradePillText}>{studied ? g.label : '—'}</Text>
                          </View>
                        </View>
                      );
                    })}
                  </View>

                  <Text style={s.disclaimer}>※ 判定は学習データに基づく参考値です。</Text>
                </View>
              )}
            </View>
          ) : (
            <LockedContent
              text="学習実績をもとに志望校への合格可能性を判定します。科目別のA〜D判定と合格ラインまでの差分を表示。"
              buttonLabel="Proプランで解放 ¥1,000/月"
              buttonColor={C.primary}
              onUnlock={() => setPaywallVisible(true)}
            />
          )}
        </StepCard>

        {/* ─── Step 3: 記述AI添削 ───────────────────────────── */}
        <StepCard
          step={3}
          title="記述問題AI添削"
          subtitle="記述の答えをAIが採点・アドバイス"
          badge="Max"
          badgeColor={C.purple}
        >
          {isMax ? (
            <View>
              <View style={s.essayLabelRow}>
                <Text style={s.sectionLabel}>記述の答えを入力してください</Text>
                <Text style={[s.charCount, essayInput.length >= 180 && s.charCountWarn]}>
                  {essayInput.length}/200
                </Text>
              </View>
              <TextInput
                style={s.essayInput}
                value={essayInput}
                onChangeText={setEssayInput}
                multiline
                numberOfLines={5}
                maxLength={200}
                placeholder="ここに記述問題の答えを書いてください…"
                placeholderTextColor={C.muted}
                textAlignVertical="top"
              />
              <TouchableOpacity
                style={[s.essayBtn, essayLoading && s.essayBtnDisabled]}
                onPress={handleEssaySubmit}
                activeOpacity={0.85}
                disabled={essayLoading}
              >
                {essayLoading ? (
                  <ActivityIndicator color="#FFF" />
                ) : (
                  <Text style={s.essayBtnText}>✏️ AIに添削してもらう</Text>
                )}
              </TouchableOpacity>

              {essayFeedback != null && (
                <View style={s.essayFeedback}>
                  <Text style={s.essayFeedbackTitle}>AIの添削コメント</Text>
                  <Text style={s.essayFeedbackText}>{essayFeedback}</Text>
                </View>
              )}
            </View>
          ) : (
            <LockedContent
              text="記述問題の答えを入力すると、AIがわかりやすさ・正確さ・表現の観点で採点・フィードバックします。どこが惜しかったか、より良い表現はどうか丁寧に指導します。"
              buttonLabel="Maxプランで解放 ¥2,000/月"
              buttonColor={C.purple}
              onUnlock={() => setPaywallVisible(true)}
            />
          )}
        </StepCard>

        <View style={{ height: 32 }} />
      </ScrollView>

      <Paywall
        visible={paywallVisible}
        onClose={() => setPaywallVisible(false)}
        onPurchased={() => setPaywallVisible(false)}
      />
    </SafeAreaView>
  );
}

// ─── styles ──────────────────────────────────────────────────────────────────
const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  scroll: { flex: 1 },
  scrollContent: { paddingTop: 16, paddingBottom: 24 },

  // header
  header: { paddingHorizontal: 20, paddingBottom: 20 },
  headerTitle: { fontSize: 24, fontWeight: '800', color: C.text, marginBottom: 4 },
  headerSub: { fontSize: 14, color: C.sub },

  // shared labels
  sectionLabel: { fontSize: 13, fontWeight: '600', color: C.sub, marginBottom: 12 },
  emptyHint: { fontSize: 13, color: C.sub, textAlign: 'center', lineHeight: 20 },

  // bar chart (weakness)
  barRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  barEmoji: { fontSize: 20, width: 28 },
  barMeta: { flex: 1, marginLeft: 8 },
  barLabelRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  barSubject: { fontSize: 13, fontWeight: '600', color: C.text },
  barDetail: { fontSize: 11, color: C.muted },
  barTrack: { height: 6, backgroundColor: C.divider, borderRadius: 3, overflow: 'hidden' },
  barFill: { height: 6, borderRadius: 3 },

  // coach button
  coachBtn: {
    backgroundColor: C.coral,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  coachBtnText: { fontSize: 14, fontWeight: '700', color: '#FFF' },

  // advice box
  adviceBox: {
    backgroundColor: '#F0F9FF',
    borderRadius: 12,
    padding: 14,
    marginTop: 12,
    borderLeftWidth: 3,
    borderLeftColor: C.primary,
  },
  adviceTitle: { fontSize: 12, fontWeight: '700', color: C.primary, marginBottom: 6 },
  adviceText: { fontSize: 13, color: C.text, lineHeight: 20 },

  // grade circle (admission)
  gradeRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  gradeCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  gradeLetter: { fontSize: 28, fontWeight: '900', lineHeight: 32 },
  gradePctText: { fontSize: 12, fontWeight: '600' },
  gradeInfo: { flex: 1 },
  gradeDesc: { fontSize: 14, fontWeight: '600', color: C.text, marginBottom: 8 },
  probRow: { flexDirection: 'row', alignItems: 'baseline', gap: 6, marginBottom: 4 },
  probLabel: { fontSize: 12, color: C.sub },
  probValue: { fontSize: 20, fontWeight: '800' },
  probTrack: { height: 6, backgroundColor: C.divider, borderRadius: 3, overflow: 'hidden' },
  probFill: { height: 6, borderRadius: 3 },

  // subject grid (admission)
  subjectGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 12 },
  subjectCell: {
    flex: 1,
    minWidth: 60,
    backgroundColor: '#F8FAFF',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  cellEmoji: { fontSize: 18, marginBottom: 4 },
  cellName: { fontSize: 11, color: C.sub, marginBottom: 4 },
  gradePill: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8 },
  gradePillText: { fontSize: 13, fontWeight: '800', color: '#FFF' },
  disclaimer: { fontSize: 11, color: C.muted, textAlign: 'center' },

  // essay (Max)
  essayLabelRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 },
  charCount: { fontSize: 11, color: C.muted },
  charCountWarn: { color: C.coral },
  essayInput: {
    backgroundColor: '#F8FAFF',
    borderRadius: 10,
    padding: 12,
    fontSize: 14,
    color: C.text,
    minHeight: 110,
    borderWidth: 1,
    borderColor: C.divider,
    marginBottom: 12,
  },
  essayBtn: {
    backgroundColor: C.purple,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  essayBtnDisabled: { opacity: 0.6 },
  essayBtnText: { fontSize: 14, fontWeight: '700', color: '#FFF' },
  essayFeedback: {
    backgroundColor: '#F5F3FF',
    borderRadius: 12,
    padding: 14,
    marginTop: 12,
    borderLeftWidth: 3,
    borderLeftColor: C.purple,
  },
  essayFeedbackTitle: { fontSize: 12, fontWeight: '700', color: C.purple, marginBottom: 6 },
  essayFeedbackText: { fontSize: 13, color: C.text, lineHeight: 20 },
});
