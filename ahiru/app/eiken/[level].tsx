import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import MCQQuiz from '../../components/MCQQuiz';
import CertPaywall from '../../components/CertPaywall';
import HomeButton from '../../components/HomeButton';
import { eikenQuestions } from '../../data/eiken_questions';
import { VOCAB_MONTHLY_LABEL, VOCAB_YEARLY_LABEL } from '../../constants/pricing';

const FREE_QUESTION_LIMIT = 5;

const LEVEL_INFO: Record<string, { name: string; nameEn: string; emoji: string; color: string; cefr: string }> = {
  '2kyu': { name: '英検 2級', nameEn: 'Grade 2', emoji: '🥇', color: '#C62828', cefr: 'CEFR B1–B2' },
  '3kyu': { name: '英検 3級', nameEn: 'Grade 3', emoji: '🥈', color: '#1565C0', cefr: 'CEFR A2' },
  '4kyu': { name: '英検 4級', nameEn: 'Grade 4', emoji: '🥉', color: '#2E7D32', cefr: 'CEFR A1' },
};

const CATEGORY_LABELS: Record<string, string> = {
  vocabulary: '語彙',
  grammar: '文法',
  dialogue: '会話',
  reading: '読解',
  usage: '語法',
  idiom: '熟語',
  listening: 'リスニング',
};

export default function EikenLevelScreen() {
  // 直接このURLを開いた場合は戻り先が無く router.back() が無反応になるため、
  // その場合はホームへ逃がす。
  function safeBack() {
    if (router.canGoBack()) router.back();
    else router.replace('/');
  }
  const { level } = useLocalSearchParams<{ level: string }>();
  const router = useRouter();
  const info = LEVEL_INFO[level ?? ''] ?? { name: level, nameEn: '', emoji: '📖', color: '#7B1FA2', cefr: '' };

  const allQuestions = eikenQuestions
    .filter(q => q.level === level)
    .map(q => ({
      id: q.id,
      question: q.question,
      choices: q.choices,
      correctKey: q.correctKey,
      explanation: q.explanation,
      difficulty: q.difficulty,
      category: CATEGORY_LABELS[q.category] ?? q.category,
      audioScript: q.audioScript,
    }));

  if (allQuestions.length === 0) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={[styles.header, { backgroundColor: info.color }]}>
          <View style={styles.headerTopRow}>
            <TouchableOpacity onPress={() => safeBack()} style={styles.backBtn}>
              <Text style={styles.backBtnText}>← 戻る</Text>
            </TouchableOpacity>
            <HomeButton variant="light" />
          </View>
          <Text style={styles.headerTitle}>{info.emoji} {info.name}</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.emoji}>🚧</Text>
          <Text style={styles.title}>問題を準備中</Text>
          <Text style={styles.text}>{info.name}の問題は{'\n'}現在作成中です。近日公開予定。</Text>
          <TouchableOpacity style={[styles.btn, { backgroundColor: info.color }]} onPress={() => safeBack()}>
            <Text style={styles.btnText}>← 級一覧に戻る</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <CertPaywall
        certKey="eiken"
        certName={info.name}
        certEmoji={info.emoji}
        accentColor={info.color}
        totalQuestions={allQuestions.length}
        freeLimit={FREE_QUESTION_LIMIT}
        proMonthlyLabel={VOCAB_MONTHLY_LABEL}
        proYearlyLabel={VOCAB_YEARLY_LABEL}
        proFeatures={['英検2・3・4級 全問題アンロック', '語彙・熟語・文法・読解・リスニング 各カテゴリ対応', '全選択肢に日本語解説付き']}
      >
        {(hasAccess: boolean) => (
        <>
        <View style={[styles.header, { backgroundColor: info.color }]}>
          <View style={styles.headerTopRow}>
            <TouchableOpacity onPress={() => safeBack()} style={styles.backBtn}>
              <Text style={styles.backBtnText}>← 戻る</Text>
            </TouchableOpacity>
            <HomeButton variant="light" />
          </View>
          <Text style={styles.headerTitle}>{info.emoji} {info.name}</Text>
          <Text style={styles.headerSub}>{info.cefr}　{allQuestions.length}問収録</Text>
        </View>
        <MCQQuiz questions={hasAccess ? allQuestions : allQuestions.slice(0, FREE_QUESTION_LIMIT)} accentColor={info.color} />
        </>
        )}
      </CertPaywall>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FAF7F2' },
  header: { paddingHorizontal: 20, paddingVertical: 16 },
  headerTopRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 },
  backBtn: {},
  backBtnText: { color: 'rgba(255,255,255,0.85)', fontSize: 14, fontWeight: '700' },
  headerTitle: { fontSize: 18, fontWeight: '900', color: '#FFFFFF' },
  headerSub: { fontSize: 12, color: 'rgba(255,255,255,0.7)', fontWeight: '600', marginTop: 2 },
  body: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 32 },
  emoji: { fontSize: 64, marginBottom: 16 },
  title: { fontSize: 22, fontWeight: '900', color: '#221C18', marginBottom: 12 },
  text: { fontSize: 14, color: '#666', textAlign: 'center', lineHeight: 22, marginBottom: 32 },
  btn: { borderRadius: 14, paddingVertical: 14, paddingHorizontal: 32 },
  btnText: { fontSize: 15, fontWeight: '800', color: '#FFFFFF' },
});
