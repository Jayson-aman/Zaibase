import React, { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { teikiQuestionsModule } from '../data/teiki-questions-lazy';
import { rich } from '../components/RichText';
import AnswerInput, { type SubmitResult } from '../components/AnswerInput';
import HomeButton from '../components/HomeButton';
import LadderCard from '../components/LadderCard';
import Paywall from '../components/Paywall';
import { useSubscription } from '../hooks/useSubscription';
import { useBetaAccess } from '../hooks/useBetaAccess';
import { logPurchaseEvent } from '../services/analytics';

/** 無料の人が解ける基本問題の数（1学年×1教科あたり）。続きは Pro / Max */
const FREE_QUESTIONS = 5;
import { subjectInfo, type SubjectKey } from '../data/questions-meta';
import { STEPS, FIRST_STEP_HINT, STEP_UP_PCT, STEP_DOWN_PCT, type StepLevel } from '../data/teiki-questions/start-guide';

const TERMS: { key: 'all' | '1' | '2' | '3'; label: string }[] = [
  { key: 'all', label: '全部' },
  { key: '1', label: '1学期末' },
  { key: '2', label: '2学期末' },
  { key: '3', label: '学年末' },
];
const GRADE_LABEL: Record<string, string> = { j1: '中1', j2: '中2', j3: '中3' };

export default function TeikiPractice() {
  const router = useRouter();
  const { grade = 'j1', subject = 'sansu' } = useLocalSearchParams<{ grade?: string; subject?: string }>();
  const mod = teikiQuestionsModule.use();
  const [term, setTerm] = useState<'all' | '1' | '2' | '3'>('all');
  // やさしいステップ1から始める。できたら次へ、むずかしければもどる
  const [step, setStep] = useState<StepLevel | 0>(1); // 0＝ぜんぶ（やさしい順）
  const [idx, setIdx] = useState(0);
  const [results, setResults] = useState<Record<string, SubmitResult>>({});
  const { isPro, isMax } = useSubscription();
  const { hasAccess: betaAccess } = useBetaAccess();
  const full = isPro || isMax || betaAccess;
  const [paywallVisible, setPaywallVisible] = useState(false);
  // Web の事前描画（静的ページ）には URL の ?grade= ?subject= が入らず、既定値で描かれる。
  // そのまま描くとブラウザで文言が食いちがい（React #418）になるので、読みこんだあとに描く。
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const allList = useMemo(
    () => {
      if (!mod) return [];
      const qs = mod.TEIKI_QUESTIONS.filter((q) => q.grade === grade && q.subject === subject && (term === 'all' || String(q.term) === term) && (step === 0 || mod.levelOf(q.id) === step));
      // ぜんぶ表示のときも、やさしい問題（ステップ1）を先頭に並べる（同じステップの中は教科書の順のまま）
      return step === 0 ? [...qs].sort((a, b) => mod.levelOf(a.id) - mod.levelOf(b.id)) : qs;
    },
    [mod, grade, subject, term, step],
  );
  // 無料の人は、いちばんやさしいステップ1の最初の5問まで（ステップ2・3は Pro / Max）
  const list = useMemo(() => (full ? allList : step <= 1 ? allList.slice(0, FREE_QUESTIONS) : []), [full, allList, step]);
  useEffect(() => { setIdx(0); }, [term, grade, subject, step]);

  const subjName = subject === 'sansu' ? '数学' : subjectInfo[subject as SubjectKey]?.name ?? '';
  const q = list[idx];
  const done = list.length > 0 && idx >= list.length;
  const correct = list.filter((x) => results[x.id]?.result === 'correct').length;
  const sub = q ? results[q.id] ?? null : null;

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7}><Text style={styles.back}>‹ 戻る</Text></TouchableOpacity>
        <HomeButton variant="light" />
      </View>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          <Text style={styles.title}>{mounted ? `📝 ${GRADE_LABEL[grade] ?? ''}${subjName} まずは、やさしい問題から` : '📝 まずは、やさしい問題から'}</Text>
          <View style={styles.startBox}>
            <Text style={styles.startTitle}>🌱 ゆっくり、ここから</Text>
            <Text style={styles.startBody}>むずかしくないよ。やさしい問題から、ひとつずつ。できたら次へ、むずかしかったら、いつでも前にもどっていいからね。{mounted ? FIRST_STEP_HINT[String(subject)] ?? '' : ''}</Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={[styles.chip, step === 0 && styles.chipOn]} onPress={() => setStep(0)} activeOpacity={0.85}>
              <Text style={[styles.chipText, step === 0 && styles.chipTextOn]}>ぜんぶ（やさしい順）</Text>
            </TouchableOpacity>
            {STEPS.map((st) => (
              <TouchableOpacity key={st.level} style={[styles.chip, step === st.level && styles.chipOn]} onPress={() => setStep(st.level)} activeOpacity={0.85}>
                <Text style={[styles.chipText, step === st.level && styles.chipTextOn]}>{st.label} {st.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.stepLead}>{step === 0 ? 'やさしい問題から順に、ぜんぶ並べました。' : STEPS.find((x) => x.level === step)?.lead}</Text>
          <View style={styles.row}>
            {TERMS.map((t) => (
              <TouchableOpacity key={t.key} style={[styles.chip, term === t.key && styles.chipOn]} onPress={() => setTerm(t.key)} activeOpacity={0.85}>
                <Text style={[styles.chipText, term === t.key && styles.chipTextOn]}>{t.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {!mod && <ActivityIndicator style={{ marginTop: 40 }} color="#B5622E" />}
          {mod && list.length === 0 && full && <Text style={styles.empty}>この範囲の問題は準備中です。</Text>}
          {mod && list.length === 0 && !full && (
            <View style={styles.expBox}>
              <Text style={styles.ans}>🔒 ステップ2・3は Pro / Max で</Text>
              <Text style={styles.exp}>ステップ1の最初の5問は無料で試せます。</Text>
              <TouchableOpacity style={styles.nextBtn} onPress={() => { logPurchaseEvent('teiki_lock_tapped', 'subscription'); setPaywallVisible(true); }} activeOpacity={0.85}>
                <Text style={styles.nextText}>プランを見る</Text>
              </TouchableOpacity>
            </View>
          )}
          {q && (
            <View style={styles.card}>
              <Text style={styles.meta}>{idx + 1} / {list.length} ・ {q.topic}</Text>
              <Text style={styles.qText}>{q.question}</Text>
              {q.choices && q.choices.length > 0 ? (
                <View style={styles.choices}>
                  {q.choices.map((c) => {
                    const picked = sub?.input === c;
                    const isAns = c === q.answer;
                    const done = sub != null;
                    return (
                      <TouchableOpacity
                        key={c}
                        disabled={done}
                        style={[styles.choice, done && isAns && styles.choiceOk, done && picked && !isAns && styles.choiceNg]}
                        onPress={() => setResults((p) => ({ ...p, [q.id]: { input: c, result: c === q.answer ? 'correct' : 'wrong' } }))}
                        activeOpacity={0.85}
                        accessibilityRole="button"
                      >
                        <Text style={styles.choiceText}>{done && isAns ? '◎ ' : done && picked ? '✕ ' : ''}{c}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              ) : (
                <AnswerInput
                  key={q.id}
                  question={{ question: q.question, answer: q.answer }}
                  submitted={sub}
                  tone="brown"
                  flush
                  onSubmit={(r) => setResults((p) => ({ ...p, [q.id]: r }))}
                />
              )}
              {sub && (
                <View style={styles.expBox}>
                  <Text style={styles.ans}>答え：{q.answer}</Text>
                  <Text style={styles.exp}>{rich(q.explanation)}</Text>
                  <TouchableOpacity style={styles.nextBtn} onPress={() => setIdx((i) => i + 1)} activeOpacity={0.85}>
                    <Text style={styles.nextText}>{idx + 1 >= list.length ? '結果を見る' : 'つぎの問題へ'}</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          )}
          {done && (
            <View style={styles.card}>
              <Text style={styles.title}>おつかれさま！</Text>
              <Text style={styles.qText}>{list.length}問中 {correct}問 正解</Text>
              {list.filter((x) => results[x.id]?.result !== 'correct').length > 0 && (
                <Text style={styles.exp}>
                  まちがえた所：{list.filter((x) => results[x.id]?.result !== 'correct').map((x) => x.topic).filter((v, i, a) => a.indexOf(v) === i).join('、')}
                </Text>
              )}
              {(() => {
                const pct = Math.round((correct / list.length) * 100);
                if (step !== 0 && step < 3 && pct >= STEP_UP_PCT) {
                  const nx = (step + 1) as StepLevel;
                  return (
                    <View style={styles.expBox}>
                      <Text style={styles.ans}>🌟 {STEPS[step - 1].label}、できたね！</Text>
                      <Text style={styles.exp}>つぎは「{STEPS[nx - 1].title}」に進んでみる？むずかしかったら、いつでももどれるよ。</Text>
                      <TouchableOpacity style={styles.nextBtn} onPress={() => { setResults({}); setIdx(0); setStep(nx); }} activeOpacity={0.85}>
                        <Text style={styles.nextText}>{STEPS[nx - 1].label}へ進む</Text>
                      </TouchableOpacity>
                    </View>
                  );
                }
                if (step > 1 && pct < STEP_DOWN_PCT) {
                  const pv = (step - 1) as StepLevel;
                  return (
                    <View style={styles.expBox}>
                      <Text style={styles.ans}>📘 ひとつ前で、ゆっくりならそう</Text>
                      <Text style={styles.exp}>ちょっと休けいして、やさしい問題でもう一度ならしてみよう。いつでもまた来ていいよ。</Text>
                      <TouchableOpacity style={styles.nextBtn} onPress={() => { setResults({}); setIdx(0); setStep(pv); }} activeOpacity={0.85}>
                        <Text style={styles.nextText}>{STEPS[pv - 1].label}にもどる</Text>
                      </TouchableOpacity>
                    </View>
                  );
                }
                return null;
              })()}
              {(step === 3 || step === 0) && (
              <LadderCard
                pct={Math.round((correct / list.length) * 100)}
                from="teiki"
                subject={String(subject)}
                grade={String(grade)}
                onRetry={() => { setResults({}); setIdx(0); }}
              />
              )}
              {!full && allList.length > list.length && (
                <View style={styles.expBox}>
                  <Text style={styles.ans}>🔒 続きの {allList.length - list.length} 問は Pro / Max で</Text>
                  <TouchableOpacity style={styles.nextBtn} onPress={() => { logPurchaseEvent('teiki_lock_tapped', 'subscription'); setPaywallVisible(true); }} activeOpacity={0.85}>
                    <Text style={styles.nextText}>プランを見る</Text>
                  </TouchableOpacity>
                </View>
              )}
              <TouchableOpacity style={styles.nextBtn} onPress={() => { setResults({}); setIdx(0); }} activeOpacity={0.85}>
                <Text style={styles.nextText}>もう一度やる</Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
      <Paywall visible={paywallVisible} onClose={() => setPaywallVisible(false)} onPurchased={() => setPaywallVisible(false)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#FAF7F2' },
  header: { backgroundColor: '#6B4226', paddingHorizontal: 20, paddingVertical: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  back: { color: 'rgba(255,255,255,0.9)', fontSize: 14, fontWeight: '700' },
  content: { padding: 16, paddingBottom: 60 },
  title: { fontSize: 19, fontWeight: '900', color: '#4A3320' },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 12 },
  chip: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, backgroundColor: '#fff', borderWidth: 1.5, borderColor: '#E0D4C2' },
  chipOn: { backgroundColor: '#B5622E', borderColor: '#B5622E' },
  chipText: { fontSize: 13, fontWeight: '700', color: '#4A3320' },
  chipTextOn: { color: '#fff' },
  startBox: { backgroundColor: '#F1F8F1', borderRadius: 12, borderWidth: 1.5, borderColor: '#BFE0C4', padding: 12, marginTop: 12 },
  startTitle: { fontSize: 14, fontWeight: '800', color: '#1E7A3C' },
  startBody: { fontSize: 12, lineHeight: 19, color: '#3E3126', marginTop: 3 },
  stepLead: { fontSize: 12, lineHeight: 18, color: '#6B5A48', marginTop: 8 },
  empty: { marginTop: 30, textAlign: 'center', color: '#8A7A68' },
  card: { backgroundColor: '#fff', borderRadius: 14, borderWidth: 1.5, borderColor: '#E8DCCB', padding: 16, marginTop: 16 },
  meta: { fontSize: 12, color: '#8A7A68', fontWeight: '700' },
  qText: { fontSize: 16, lineHeight: 26, fontWeight: '700', color: '#4A3320', marginTop: 8, marginBottom: 6 },
  choices: { marginTop: 8, gap: 8 },
  choice: { borderWidth: 1.5, borderColor: '#E0D4C2', borderRadius: 12, paddingVertical: 12, paddingHorizontal: 14, backgroundColor: '#FAF7F2' },
  choiceOk: { borderColor: '#1E7A3C', backgroundColor: '#E6F4EA' },
  choiceNg: { borderColor: '#C0392B', backgroundColor: '#FDECEA' },
  choiceText: { fontSize: 15, color: '#4A3320', fontWeight: '700' },
  expBox: { marginTop: 14, backgroundColor: '#F6F1E8', borderRadius: 10, padding: 12 },
  ans: { fontSize: 14, fontWeight: '800', color: '#1E7A3C' },
  exp: { fontSize: 13, lineHeight: 21, color: '#3E3126', marginTop: 6 },
  nextBtn: { marginTop: 12, alignSelf: 'flex-start', backgroundColor: '#B5622E', borderRadius: 22, paddingHorizontal: 20, paddingVertical: 10 },
  nextText: { color: '#fff', fontWeight: '800', fontSize: 14 },
});
