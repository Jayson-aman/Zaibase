import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import { subjectInfo, SubjectKey } from '../../data/questions';
import { getDailyQuestions, getTodayDayLabel } from '../../utils/dailyChallenge';
import { useSubscription } from '../../hooks/useSubscription';
import { useBetaAccess } from '../../hooks/useBetaAccess';
import BetaGateModal from '../../components/BetaGateModal';

const SUBJECTS: SubjectKey[] = ['sansu', 'kokugo', 'rika', 'shakai', 'eigo'];

export default function DailyChallengeScreen() {
  const router = useRouter();
  const todayLabel = getTodayDayLabel();
  const { isMax: subIsMax, loading: subLoading } = useSubscription();
  const { hasAccess: betaAccess, loading: betaLoading, unlock } = useBetaAccess();
  const loading = subLoading || betaLoading;
  const isMax = subIsMax || betaAccess;
  const [paywallVisible, setPaywallVisible] = useState(false);

  if (loading) {
    return (
      <SafeAreaView style={[styles.safe, { alignItems: 'center', justifyContent: 'center' }]}>
        <ActivityIndicator color="#FF6B35" size="large" />
      </SafeAreaView>
    );
  }

  if (!isMax) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Text style={styles.backBtnText}>← 戻る</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>🔥 MAX日替わり30問</Text>
          <View style={styles.headerRight} />
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 32 }}>
          <Text style={{ fontSize: 64, marginBottom: 16 }}>🔒</Text>
          <Text style={{ fontSize: 28, fontWeight: '900', color: '#fff', marginBottom: 12, textAlign: 'center' }}>
            MAXプラン限定
          </Text>
          <Text style={{ fontSize: 18, color: '#aaa', textAlign: 'center', lineHeight: 28, marginBottom: 32 }}>
            日替わり30問は MAXプランの方のみご利用いただけます。
          </Text>
          <TouchableOpacity
            style={{ backgroundColor: '#E74C3C', borderRadius: 16, paddingVertical: 18, paddingHorizontal: 40 }}
            onPress={() => setPaywallVisible(true)}
          >
            <Text style={{ fontSize: 20, fontWeight: '800', color: '#fff' }}>👑 MAXプランを見る</Text>
          </TouchableOpacity>
        </View>
        <BetaGateModal
          visible={paywallVisible}
          onClose={() => setPaywallVisible(false)}
          onUnlocked={() => setPaywallVisible(false)}
          unlock={unlock}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backBtnText}>← 戻る</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>🔥 MAX日替わり30問</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.heroBadge}>
          <Text style={styles.heroBadgeDay}>{todayLabel}</Text>
          <Text style={styles.heroTitle}>今日のチャレンジ</Text>
          <Text style={styles.heroSub}>
            四谷・日能研レベルの難問を各科目30問。{'\n'}毎日セットが変わります。
          </Text>
        </View>

        <Text style={styles.pickLabel}>科目を選んでスタート</Text>

        {SUBJECTS.map((subject) => {
          const info = subjectInfo[subject];
          const count = getDailyQuestions(subject).length;
          return (
            <TouchableOpacity
              key={subject}
              style={[styles.subjectCard, { borderLeftColor: info.color }]}
              onPress={() => router.push(`/quiz/${subject}?mode=daily`)}
              activeOpacity={0.85}
            >
              <Text style={styles.subjectEmoji}>{info.emoji}</Text>
              <View style={styles.subjectInfo}>
                <Text style={styles.subjectName}>{info.name}</Text>
                <Text style={styles.subjectCount}>🔥 {count}問 · 発展レベル</Text>
              </View>
              <View style={[styles.subjectArrow, { backgroundColor: info.color }]}>
                <Text style={styles.subjectArrowText}>▶</Text>
              </View>
            </TouchableOpacity>
          );
        })}

        <View style={styles.note}>
          <Text style={styles.noteText}>
            💡 日替わりセットは毎日午前0時に切り替わります。{'\n'}
            同じ日目は同じ問題セットです。
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: '#1A1A1A',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  backBtn: {
    minWidth: 60,
    paddingVertical: 6,
  },
  backBtnText: {
    fontSize: 20,
    color: '#FF6B35',
    fontWeight: '700',
  },
  headerTitle: {
    flex: 1,
    fontSize: 24,
    fontWeight: '900',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  headerRight: {
    minWidth: 60,
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  heroBadge: {
    backgroundColor: '#1A1A1A',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginBottom: 28,
    borderWidth: 1.5,
    borderColor: '#C0392B',
  },
  heroBadgeDay: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FF6B35',
    backgroundColor: 'rgba(192,57,43,0.2)',
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 10,
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: '900',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  heroSub: {
    fontSize: 18,
    color: '#AAA',
    textAlign: 'center',
    lineHeight: 28,
    fontWeight: '500',
  },
  pickLabel: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 14,
  },
  subjectCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
    borderLeftWidth: 6,
    gap: 14,
  },
  subjectEmoji: {
    fontSize: 38,
  },
  subjectInfo: {
    flex: 1,
  },
  subjectName: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  subjectCount: {
    fontSize: 18,
    color: '#FF6B35',
    fontWeight: '600',
  },
  subjectArrow: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subjectArrowText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '900',
  },
  note: {
    marginTop: 16,
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  noteText: {
    fontSize: 17,
    color: '#888',
    lineHeight: 26,
    fontWeight: '500',
  },
});
