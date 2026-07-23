import React from 'react';
import {
  View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import CertPaywall from '../../components/CertPaywall';
import { VOCAB_MONTHLY_LABEL, VOCAB_YEARLY_LABEL } from '../../constants/pricing';
import { eikenQuestions } from '../../data/eiken_questions';

// 英検は「受験対策とは別枠の英語学習コンテンツ」として、英単語Pro（vocab）で開放する。
const FREE_QUESTION_LIMIT = 5;

// 実際の問題データから級別の問題数を集計（ハードコードせずズレを防ぐ）
const LEVEL_COUNT: Record<string, number> = {};
eikenQuestions.forEach((q) => { LEVEL_COUNT[q.level] = (LEVEL_COUNT[q.level] ?? 0) + 1; });

const LEVELS = [
  {
    key: '2kyu',
    name: '英検 2級',
    nameEn: 'Eiken Grade 2',
    emoji: '🥇',
    color: '#C62828',
    gradientColors: ['#C62828', '#8B0000'] as [string, string],
    cefr: 'CEFR B1–B2',
    target: '高校卒業レベル',
    topics: ['社会問題・環境・科学・文化', '長文読解・エッセイ', '高度な語彙・文法'],
  },
  {
    key: '3kyu',
    name: '英検 3級',
    nameEn: 'Eiken Grade 3',
    emoji: '🥈',
    color: '#1565C0',
    gradientColors: ['#1565C0', '#0D3A7C'] as [string, string],
    cefr: 'CEFR A2',
    target: '中学卒業レベル',
    topics: ['日常会話・対話文', '短文読解・Eメール', '基礎文法・語彙'],
  },
  {
    key: '4kyu',
    name: '英検 4級',
    nameEn: 'Eiken Grade 4',
    emoji: '🥉',
    color: '#2E7D32',
    gradientColors: ['#2E7D32', '#1B5E20'] as [string, string],
    cefr: 'CEFR A1',
    target: '中学中間レベル',
    topics: ['基礎語彙・短い対話', '簡単な文法', '身近なトピック'],
  },
];

const TOTAL_EIKEN_QUESTIONS = Object.values(LEVEL_COUNT).reduce((s, n) => s + n, 0);

export default function EikenScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <CertPaywall
        certKey="eiken"
        certName="英検"
        certEmoji="🇬🇧"
        accentColor="#C62828"
        totalQuestions={TOTAL_EIKEN_QUESTIONS}
        freeLimit={FREE_QUESTION_LIMIT}
        proMonthlyLabel={VOCAB_MONTHLY_LABEL}
        proYearlyLabel={VOCAB_YEARLY_LABEL}
        proFeatures={['英検2・3・4級 全問題アンロック', '語彙・文法・読解・リスニング 各カテゴリ対応', '全選択肢に日本語解説付き', 'ネイティブ音声（読み上げ）で実力養成']}
      >
        <LinearGradient colors={['#7B1FA2', '#4A0072']} style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Text style={styles.backBtnText}>← 戻る</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>🇬🇧 英検対策</Text>
          <Text style={styles.headerSub}>Eiken Test in Practical English Proficiency</Text>
        </LinearGradient>

        <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <Text style={styles.sectionTitle}>級を選んでスタート！</Text>

          <TouchableOpacity
            style={{ backgroundColor: '#4A0072', borderRadius: 16, padding: 16, marginBottom: 16, flexDirection: 'row', alignItems: 'center', gap: 12 }}
            onPress={() => router.push('/eiken/taisaku' as any)}
            activeOpacity={0.85}
          >
            <Text style={{ fontSize: 26 }}>🎯</Text>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 15, fontWeight: '800', color: '#FFF', marginBottom: 2 }}>二次試験・ライティング対策</Text>
              <Text style={{ fontSize: 11, color: 'rgba(255,255,255,0.75)', fontWeight: '500' }}>面接の流れと解答の型・英作文テンプレ・級別重要文法</Text>
            </View>
            <Text style={{ fontSize: 24, color: 'rgba(255,255,255,0.6)' }}>›</Text>
          </TouchableOpacity>

          {LEVELS.map(level => (
            <TouchableOpacity
              key={level.key}
              style={styles.card}
              onPress={() => router.push(`/eiken/${level.key}` as any)}
              activeOpacity={0.85}
            >
              <LinearGradient colors={level.gradientColors} style={styles.cardGradient}>
                <Text style={styles.cardEmoji}>{level.emoji}</Text>
                <View style={styles.cardBody}>
                  <View style={styles.cardTitleRow}>
                    <Text style={styles.cardTitle}>{level.name}</Text>
                    <View style={styles.cefrBadge}>
                      <Text style={styles.cefrText}>{level.cefr}</Text>
                    </View>
                  </View>
                  <Text style={styles.cardTarget}>{level.target}</Text>
                  {level.topics.map((t, i) => (
                    <Text key={i} style={styles.cardTopic}>• {t}</Text>
                  ))}
                  <Text style={styles.cardMeta}>{LEVEL_COUNT[level.key] ?? 0}問収録</Text>
                </View>
                <Text style={styles.cardArrow}>›</Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}

          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>英検について</Text>
            <Text style={styles.infoText}>
              実用英語技能検定（英検）は、公益財団法人日本英語検定協会が実施する英語の資格試験です。
              4級は中学中間程度、3級は中学卒業程度、2級は高校卒業程度の英語力を測定します。
            </Text>
          </View>
        </ScrollView>
      </CertPaywall>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 20 },
  backBtn: { marginBottom: 8 },
  backBtnText: { color: 'rgba(255,255,255,0.85)', fontSize: 14, fontWeight: '700' },
  headerTitle: { fontSize: 22, fontWeight: '900', color: '#FFFFFF', marginBottom: 4 },
  headerSub: { fontSize: 11, color: 'rgba(255,255,255,0.7)', fontWeight: '500' },
  scroll: { flex: 1 },
  content: { paddingHorizontal: 16, paddingTop: 20, paddingBottom: 40 },
  sectionTitle: { fontSize: 15, fontWeight: '800', color: '#1A1A2E', marginBottom: 16 },
  card: { borderRadius: 18, marginBottom: 14, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.15, shadowRadius: 10, elevation: 5 },
  cardGradient: { borderRadius: 18, padding: 18, flexDirection: 'row', alignItems: 'flex-start', gap: 14 },
  cardEmoji: { fontSize: 36, marginTop: 2 },
  cardBody: { flex: 1 },
  cardTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 4 },
  cardTitle: { fontSize: 18, fontWeight: '900', color: '#FFFFFF' },
  cefrBadge: { backgroundColor: 'rgba(255,255,255,0.25)', borderRadius: 8, paddingHorizontal: 8, paddingVertical: 2 },
  cefrText: { fontSize: 11, color: '#FFFFFF', fontWeight: '700' },
  cardTarget: { fontSize: 12, color: 'rgba(255,255,255,0.85)', fontWeight: '700', marginBottom: 6 },
  cardTopic: { fontSize: 11, color: 'rgba(255,255,255,0.75)', fontWeight: '500', marginBottom: 2 },
  cardMeta: { fontSize: 11, color: 'rgba(255,255,255,0.55)', fontWeight: '500', marginTop: 6 },
  cardArrow: { fontSize: 28, color: 'rgba(255,255,255,0.4)', alignSelf: 'center' },
  infoBox: { backgroundColor: '#FFF', borderRadius: 14, padding: 16, marginTop: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.06, shadowRadius: 6, elevation: 2 },
  infoTitle: { fontSize: 14, fontWeight: '800', color: '#1A1A2E', marginBottom: 8 },
  infoText: { fontSize: 12, color: '#555', lineHeight: 20 },
});
