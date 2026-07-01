import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet,
  Platform, Alert, Modal,
} from 'react-native';
import { QUESTIONS, TakkenQuestion } from '../../data/questions';
import { useSubscription } from '../../hooks/useSubscription';
import { PLAN_PRICE_MAX } from '../../constants/proAccess';
import { recordAnswer } from '../../store/progress';

// ─── 本試験の科目別配点 ────────────────────────────────────
const EXAM_DISTRIBUTION: { subject: TakkenQuestion['subject']; count: number }[] = [
  { subject: '権利関係',      count: 14 },
  { subject: '法令上の制限',  count:  8 },
  { subject: '宅建業法',      count: 20 },
  { subject: '税・その他',    count:  8 },
];
const TOTAL_QUESTIONS = 50;
const EXAM_DURATION_SEC = 2 * 60 * 60; // 2時間

// ─── ユーティリティ ───────────────────────────────────────
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildExamSet(): TakkenQuestion[] {
  const result: TakkenQuestion[] = [];
  for (const { subject, count } of EXAM_DISTRIBUTION) {
    const pool = QUESTIONS.filter((q) => q.subject === subject);
    const picked = shuffle(pool).slice(0, count);
    result.push(...picked);
  }
  return result; // 科目順のまま出題（本番と同じ並び）
}

function formatTime(sec: number): string {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// ─── フェーズ ─────────────────────────────────────────────
type Phase = 'start' | 'exam' | 'result';

export default function ExamScreen() {
  const { isMax, loading } = useSubscription();
  const [phase, setPhase]               = useState<Phase>('start');
  const [questions, setQuestions]       = useState<TakkenQuestion[]>([]);
  const [answers, setAnswers]           = useState<(number | null)[]>([]);
  const [current, setCurrent]           = useState(0);
  const [timeLeft, setTimeLeft]         = useState(EXAM_DURATION_SEC);
  const [showPaywall, setShowPaywall]   = useState(false);
  const [reviewIdx, setReviewIdx]       = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ─── タイマー ─────────────────────────────────────────
  useEffect(() => {
    if (phase !== 'exam') return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          setPhase('result');
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [phase]);

  const startExam = useCallback(() => {
    if (!isMax) { setShowPaywall(true); return; }
    const qs = buildExamSet();
    setQuestions(qs);
    setAnswers(new Array(qs.length).fill(null));
    setCurrent(0);
    setTimeLeft(EXAM_DURATION_SEC);
    setPhase('exam');
  }, [isMax]);

  const submitExam = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    // 進捗記録
    questions.forEach((q, i) => {
      const ans = answers[i];
      if (ans !== null) recordAnswer(q.id, ans === q.correctAnswer);
    });
    setPhase('result');
  }, [questions, answers]);

  const confirmSubmit = useCallback(() => {
    const unanswered = answers.filter((a) => a === null).length;
    if (unanswered > 0) {
      Alert.alert(
        '提出確認',
        `未回答が ${unanswered} 問あります。提出しますか？`,
        [
          { text: 'キャンセル', style: 'cancel' },
          { text: '提出する', onPress: submitExam },
        ],
      );
    } else {
      submitExam();
    }
  }, [answers, submitExam]);

  // ─── 採点 ─────────────────────────────────────────────
  const score = questions.reduce((acc, q, i) => acc + (answers[i] === q.correctAnswer ? 1 : 0), 0);
  const bySubject = EXAM_DISTRIBUTION.map(({ subject, count }) => {
    const qs = questions.filter((q) => q.subject === subject);
    const correct = qs.reduce((a, q, i) => {
      const globalIdx = questions.indexOf(q);
      return a + (answers[globalIdx] === q.correctAnswer ? 1 : 0);
    }, 0);
    return { subject, correct, total: count };
  });

  // ─── ペイウォール ─────────────────────────────────────
  if (showPaywall) {
    return (
      <Modal visible transparent animationType="slide" onRequestClose={() => setShowPaywall(false)}>
        <View style={styles.paywallOverlay}>
          <View style={styles.paywallCard}>
            <Text style={styles.paywallEmoji}>🏆</Text>
            <Text style={styles.paywallTitle}>Maxプラン限定機能</Text>
            <Text style={styles.paywallDesc}>
              本試験模擬モードは{'\n'}Maxプランでご利用いただけます。
            </Text>
            <View style={styles.paywallFeatures}>
              <Text style={styles.paywallFeature}>📝 本番形式 50問・2時間タイマー</Text>
              <Text style={styles.paywallFeature}>🤖 AI弱点コーチ</Text>
              <Text style={styles.paywallFeature}>🏆 合格予測スコア</Text>
            </View>
            <TouchableOpacity style={styles.paywallBtn}>
              <Text style={styles.paywallBtnText}>{PLAN_PRICE_MAX} でアップグレード</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowPaywall(false)} style={styles.paywallClose}>
              <Text style={styles.paywallCloseText}>閉じる</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  // ─── スタート画面 ─────────────────────────────────────
  if (phase === 'start') {
    return (
      <ScrollView style={styles.root} contentContainerStyle={styles.startContent}>
        <Text style={styles.startTitle}>📝 本試験模擬モード</Text>
        <Text style={styles.startSubtitle}>実際の宅建試験と同じ形式で腕試し</Text>

        <View style={styles.infoCard}>
          <Row label="出題数" value="50問" />
          <Row label="試験時間" value="2時間" />
          <Row label="合格ライン目安" value="35点以上" />
        </View>

        <Text style={styles.sectionTitle}>科目別出題数</Text>
        <View style={styles.subjectCard}>
          {EXAM_DISTRIBUTION.map(({ subject, count }) => (
            <View key={subject} style={styles.subjectRow}>
              <Text style={styles.subjectName}>{subject}</Text>
              <Text style={styles.subjectCount}>{count}問</Text>
            </View>
          ))}
          <View style={[styles.subjectRow, styles.subjectTotal]}>
            <Text style={[styles.subjectName, { fontWeight: '700' }]}>合計</Text>
            <Text style={[styles.subjectCount, { fontWeight: '700', color: '#1E40AF' }]}>50問</Text>
          </View>
        </View>

        <Text style={styles.caution}>
          ⚠️ 試験中は解答を変更できます。提出後は採点画面に移行します。
        </Text>

        <TouchableOpacity
          style={[styles.startBtn, loading && { opacity: 0.5 }]}
          onPress={startExam}
          disabled={loading}
        >
          <Text style={styles.startBtnText}>試験を開始する →</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  // ─── 結果画面 ─────────────────────────────────────────
  if (phase === 'result') {
    const passed = score >= 35;
    return (
      <ScrollView style={styles.root} contentContainerStyle={styles.resultContent}>
        <Text style={styles.resultTitle}>採点結果</Text>
        <View style={[styles.scoreBig, passed ? styles.scorePassed : styles.scoreFailed]}>
          <Text style={styles.scoreNum}>{score}</Text>
          <Text style={styles.scoreDenom}>/50</Text>
        </View>
        <Text style={[styles.passLabel, passed ? styles.passedText : styles.failedText]}>
          {passed ? '🎉 合格圏内！' : '📚 もう少し！'}
        </Text>

        <Text style={styles.sectionTitle}>科目別成績</Text>
        <View style={styles.subjectCard}>
          {bySubject.map(({ subject, correct, total }) => {
            const pct = Math.round((correct / total) * 100);
            return (
              <View key={subject} style={styles.subjectRow}>
                <Text style={styles.subjectName}>{subject}</Text>
                <Text style={styles.subjectCount}>{correct}/{total}</Text>
                <View style={styles.barBg}>
                  <View style={[styles.barFill, { width: `${pct}%` as any, backgroundColor: pct >= 60 ? '#22C55E' : '#EF4444' }]} />
                </View>
              </View>
            );
          })}
        </View>

        <Text style={styles.sectionTitle}>問題の見直し</Text>
        {questions.map((q, i) => {
          const correct = answers[i] === q.correctAnswer;
          return (
            <TouchableOpacity
              key={q.id}
              style={[styles.reviewItem, correct ? styles.reviewCorrect : styles.reviewWrong]}
              onPress={() => setReviewIdx(reviewIdx === i ? null : i)}
            >
              <View style={styles.reviewHeader}>
                <Text style={styles.reviewNum}>Q{i + 1}</Text>
                <Text style={styles.reviewMark}>{correct ? '○' : '✕'}</Text>
                <Text style={styles.reviewSubject}>{q.subject}</Text>
              </View>
              <Text style={styles.reviewQ} numberOfLines={reviewIdx === i ? undefined : 2}>{q.question}</Text>
              {reviewIdx === i && (
                <View style={styles.reviewDetail}>
                  {q.choices.map((c, ci) => (
                    <Text
                      key={ci}
                      style={[
                        styles.reviewChoice,
                        ci === q.correctAnswer && styles.reviewChoiceCorrect,
                        ci === answers[i] && ci !== q.correctAnswer && styles.reviewChoiceWrong,
                      ]}
                    >
                      {ci + 1}. {c}
                    </Text>
                  ))}
                  <Text style={styles.reviewExplanation}>{q.correctExplanation}</Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}

        <TouchableOpacity style={styles.restartBtn} onPress={() => setPhase('start')}>
          <Text style={styles.restartBtnText}>もう一度挑戦する</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  // ─── 試験画面 ─────────────────────────────────────────
  const q = questions[current];
  const answered = answers[current];
  const isLowTime = timeLeft < 600; // 残り10分

  return (
    <View style={styles.root}>
      {/* ヘッダー */}
      <View style={styles.examHeader}>
        <Text style={[styles.timer, isLowTime && styles.timerLow]}>{formatTime(timeLeft)}</Text>
        <Text style={styles.examProgress}>{current + 1} / {TOTAL_QUESTIONS}</Text>
        <TouchableOpacity style={styles.submitHeaderBtn} onPress={confirmSubmit}>
          <Text style={styles.submitHeaderText}>提出</Text>
        </TouchableOpacity>
      </View>

      {/* 問題番号マップ */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.questionMap}>
        {questions.map((_, i) => (
          <TouchableOpacity
            key={i}
            style={[
              styles.mapDot,
              answers[i] !== null && styles.mapDotAnswered,
              i === current && styles.mapDotCurrent,
            ]}
            onPress={() => setCurrent(i)}
          >
            <Text style={[styles.mapDotText, i === current && { color: '#fff' }]}>{i + 1}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* 問題 */}
      <ScrollView style={styles.examBody} contentContainerStyle={styles.examBodyContent}>
        <Text style={styles.subjectBadge}>{q.subject}</Text>
        <Text style={styles.questionText}>{q.question}</Text>

        {q.choices.map((c, ci) => (
          <TouchableOpacity
            key={ci}
            style={[styles.choiceBtn, answered === ci && styles.choiceBtnSelected]}
            onPress={() => {
              const next = [...answers];
              next[current] = ci;
              setAnswers(next);
            }}
          >
            <Text style={[styles.choiceNum, answered === ci && { color: '#fff' }]}>{ci + 1}</Text>
            <Text style={[styles.choiceText, answered === ci && { color: '#fff' }]}>{c}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* ナビゲーション */}
      <View style={styles.navRow}>
        <TouchableOpacity
          style={[styles.navBtn, current === 0 && styles.navBtnDisabled]}
          onPress={() => setCurrent((c) => c - 1)}
          disabled={current === 0}
        >
          <Text style={styles.navBtnText}>← 前の問題</Text>
        </TouchableOpacity>
        {current < TOTAL_QUESTIONS - 1 ? (
          <TouchableOpacity style={[styles.navBtn, styles.navBtnNext]} onPress={() => setCurrent((c) => c + 1)}>
            <Text style={[styles.navBtnText, { color: '#fff' }]}>次の問題 →</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={[styles.navBtn, styles.navBtnSubmit]} onPress={confirmSubmit}>
            <Text style={[styles.navBtnText, { color: '#fff' }]}>提出する ✓</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

// ─── スタイル ─────────────────────────────────────────────
const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#F8FAFC' },

  // start
  startContent: { padding: 20, paddingTop: Platform.OS === 'ios' ? 60 : 40, paddingBottom: 40 },
  startTitle: { fontSize: 26, fontWeight: '800', color: '#1E293B', textAlign: 'center', marginBottom: 6 },
  startSubtitle: { fontSize: 14, color: '#64748B', textAlign: 'center', marginBottom: 24 },
  infoCard: { backgroundColor: '#fff', borderRadius: 14, padding: 16, marginBottom: 20, elevation: 2, shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 8, shadowOffset: { width: 0, height: 2 } },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#F1F5F9' },
  infoLabel: { fontSize: 14, color: '#64748B' },
  infoValue: { fontSize: 14, fontWeight: '700', color: '#1E293B' },
  sectionTitle: { fontSize: 15, fontWeight: '700', color: '#374151', marginBottom: 10, marginTop: 4 },
  subjectCard: { backgroundColor: '#fff', borderRadius: 14, padding: 12, marginBottom: 16, elevation: 2, shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 8, shadowOffset: { width: 0, height: 2 } },
  subjectRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#F1F5F9' },
  subjectTotal: { borderBottomWidth: 0 },
  subjectName: { flex: 1, fontSize: 14, color: '#374151' },
  subjectCount: { fontSize: 14, color: '#64748B', minWidth: 36, textAlign: 'right' },
  caution: { fontSize: 12, color: '#92400E', backgroundColor: '#FEF3C7', borderRadius: 8, padding: 12, marginBottom: 24 },
  startBtn: { backgroundColor: '#1E40AF', borderRadius: 14, paddingVertical: 16, alignItems: 'center' },
  startBtnText: { color: '#fff', fontSize: 17, fontWeight: '800' },

  // exam
  examHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingTop: Platform.OS === 'ios' ? 56 : 16, paddingBottom: 12, backgroundColor: '#1E293B' },
  timer: { fontSize: 22, fontWeight: '800', color: '#60A5FA', minWidth: 90 },
  timerLow: { color: '#F87171' },
  examProgress: { fontSize: 14, color: '#94A3B8' },
  submitHeaderBtn: { backgroundColor: '#1E40AF', paddingHorizontal: 14, paddingVertical: 6, borderRadius: 8 },
  submitHeaderText: { color: '#fff', fontSize: 13, fontWeight: '700' },
  questionMap: { maxHeight: 44, backgroundColor: '#1E293B', paddingBottom: 8 },
  mapDot: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#334155', alignItems: 'center', justifyContent: 'center', marginLeft: 6 },
  mapDotAnswered: { backgroundColor: '#22C55E' },
  mapDotCurrent: { backgroundColor: '#1E40AF' },
  mapDotText: { fontSize: 11, fontWeight: '700', color: '#94A3B8' },
  examBody: { flex: 1 },
  examBodyContent: { padding: 16, paddingBottom: 8 },
  subjectBadge: { alignSelf: 'flex-start', backgroundColor: '#DBEAFE', color: '#1E40AF', fontSize: 12, fontWeight: '700', paddingHorizontal: 10, paddingVertical: 3, borderRadius: 20, marginBottom: 12 },
  questionText: { fontSize: 16, color: '#1E293B', lineHeight: 26, marginBottom: 16, fontWeight: '500' },
  choiceBtn: { flexDirection: 'row', alignItems: 'flex-start', backgroundColor: '#fff', borderRadius: 12, padding: 14, marginBottom: 10, borderWidth: 2, borderColor: '#E2E8F0' },
  choiceBtnSelected: { backgroundColor: '#1E40AF', borderColor: '#1E40AF' },
  choiceNum: { fontSize: 15, fontWeight: '800', color: '#1E40AF', width: 22 },
  choiceText: { flex: 1, fontSize: 14, color: '#374151', lineHeight: 22 },
  navRow: { flexDirection: 'row', padding: 12, gap: 8, backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#E2E8F0', paddingBottom: Platform.OS === 'ios' ? 28 : 12 },
  navBtn: { flex: 1, paddingVertical: 12, borderRadius: 10, backgroundColor: '#F1F5F9', alignItems: 'center' },
  navBtnDisabled: { opacity: 0.3 },
  navBtnNext: { backgroundColor: '#1E40AF' },
  navBtnSubmit: { backgroundColor: '#16A34A' },
  navBtnText: { fontSize: 14, fontWeight: '700', color: '#374151' },

  // result
  resultContent: { padding: 20, paddingTop: Platform.OS === 'ios' ? 60 : 40, paddingBottom: 40 },
  resultTitle: { fontSize: 24, fontWeight: '800', color: '#1E293B', textAlign: 'center', marginBottom: 20 },
  scoreBig: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', borderRadius: 20, paddingVertical: 24, marginBottom: 12 },
  scorePassed: { backgroundColor: '#DCFCE7' },
  scoreFailed: { backgroundColor: '#FEE2E2' },
  scoreNum: { fontSize: 72, fontWeight: '900', color: '#1E293B', lineHeight: 72 },
  scoreDenom: { fontSize: 28, color: '#64748B', marginBottom: 8, marginLeft: 4 },
  passLabel: { textAlign: 'center', fontSize: 20, fontWeight: '800', marginBottom: 24 },
  passedText: { color: '#16A34A' },
  failedText: { color: '#DC2626' },
  barBg: { flex: 1, height: 6, backgroundColor: '#E2E8F0', borderRadius: 3, marginLeft: 8, overflow: 'hidden' },
  barFill: { height: 6, borderRadius: 3 },
  reviewItem: { borderRadius: 12, padding: 12, marginBottom: 8, borderWidth: 1 },
  reviewCorrect: { backgroundColor: '#F0FDF4', borderColor: '#BBF7D0' },
  reviewWrong: { backgroundColor: '#FFF1F2', borderColor: '#FECDD3' },
  reviewHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 4 },
  reviewNum: { fontSize: 12, fontWeight: '700', color: '#64748B' },
  reviewMark: { fontSize: 16, fontWeight: '900' },
  reviewSubject: { fontSize: 11, color: '#94A3B8' },
  reviewQ: { fontSize: 13, color: '#374151', lineHeight: 20 },
  reviewDetail: { marginTop: 10, paddingTop: 10, borderTopWidth: 1, borderTopColor: '#E2E8F0' },
  reviewChoice: { fontSize: 13, color: '#374151', paddingVertical: 4, paddingHorizontal: 8, marginBottom: 4, borderRadius: 6, backgroundColor: '#F8FAFC' },
  reviewChoiceCorrect: { backgroundColor: '#DCFCE7', color: '#166534' },
  reviewChoiceWrong: { backgroundColor: '#FEE2E2', color: '#991B1B' },
  reviewExplanation: { fontSize: 13, color: '#374151', lineHeight: 20, marginTop: 8, padding: 8, backgroundColor: '#F1F5F9', borderRadius: 8 },
  restartBtn: { backgroundColor: '#1E40AF', borderRadius: 14, paddingVertical: 16, alignItems: 'center', marginTop: 20 },
  restartBtnText: { color: '#fff', fontSize: 16, fontWeight: '800' },

  // paywall
  paywallOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  paywallCard: { backgroundColor: '#fff', borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 28, paddingBottom: Platform.OS === 'ios' ? 48 : 28 },
  paywallEmoji: { fontSize: 40, textAlign: 'center', marginBottom: 8 },
  paywallTitle: { fontSize: 20, fontWeight: '800', color: '#1E293B', textAlign: 'center', marginBottom: 8 },
  paywallDesc: { fontSize: 14, color: '#64748B', textAlign: 'center', marginBottom: 20, lineHeight: 22 },
  paywallFeatures: { backgroundColor: '#F8FAFC', borderRadius: 12, padding: 14, marginBottom: 20 },
  paywallFeature: { fontSize: 14, color: '#374151', paddingVertical: 4 },
  paywallBtn: { backgroundColor: '#1E40AF', borderRadius: 14, paddingVertical: 16, alignItems: 'center', marginBottom: 12 },
  paywallBtnText: { color: '#fff', fontSize: 16, fontWeight: '800' },
  paywallClose: { alignItems: 'center', paddingVertical: 8 },
  paywallCloseText: { color: '#94A3B8', fontSize: 14 },
});
