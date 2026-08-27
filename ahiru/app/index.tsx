// アプリの入口。
//
// もとは長い前置き（サービス紹介）を最初に出していたが、
// 使う人が最初に決めるのは「中学受験か、高校受験か」の一点なので、
// そこだけを聞く画面にした。紹介は /features に分けてある。

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useExamType, type ExamType } from '../store/examType';

const CHOICES: {
  key: ExamType;
  label: string;
  target: string;
  detail: string;
  color: string;
  emoji: string;
}[] = [
  {
    key: 'chugaku',
    label: '中学受験',
    target: '小学4年〜6年',
    detail: '算数・国語・理科・社会・英語',
    color: '#B5622E',
    emoji: '🎒',
  },
  {
    key: 'koko',
    label: '高校受験',
    target: '中学1年〜3年',
    detail: '数学・国語・理科・社会・英語',
    color: '#6B4226',
    emoji: '🏫',
  },
];

export default function EntryPage() {
  const router = useRouter();
  const { examType, setExamType, loading } = useExamType();

  // 一度選んでいれば、次からは入口を飛ばしてそのままアプリへ
  React.useEffect(() => {
    if (!loading && examType != null) router.replace('/(tabs)/');
  }, [loading, examType, router]);

  async function choose(v: ExamType) {
    await setExamType(v);
    router.replace('/(tabs)/');
  }

  if (loading || examType != null) {
    return (
      <SafeAreaView style={styles.root}>
        <View style={styles.center}>
          <ActivityIndicator color="#B5622E" />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.inner}>
        <View style={styles.head}>
          <Image
            source={require('../assets/icon.png')}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.appName}>中学受験・高校受験対策</Text>
        </View>

        <Text style={styles.question}>どちらの受験ですか？</Text>
        <Text style={styles.note}>
          選んだほうに合わせて、問題・教科書・テスト対策を出し分けます。あとから変えられます。
        </Text>

        <View style={styles.choices}>
          {CHOICES.map((c) => (
            <TouchableOpacity
              key={c.key}
              style={[styles.card, { borderColor: c.color }]}
              onPress={() => choose(c.key)}
              activeOpacity={0.85}
            >
              <View style={[styles.cardBadge, { backgroundColor: c.color }]}>
                <Text style={styles.cardEmoji}>{c.emoji}</Text>
              </View>
              <View style={styles.cardBody}>
                <Text style={[styles.cardLabel, { color: c.color }]}>{c.label}</Text>
                <Text style={styles.cardTarget}>{c.target}</Text>
                <Text style={styles.cardDetail}>{c.detail}</Text>
              </View>
              <Text style={[styles.cardArrow, { color: c.color }]}>›</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.featuresLink}
          onPress={() => router.push('/features')}
          activeOpacity={0.7}
        >
          <Text style={styles.featuresLinkText}>このアプリでできること を見る</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#FAF7F2' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  inner: { flex: 1, paddingHorizontal: 20, paddingTop: 28, justifyContent: 'center' },

  head: { alignItems: 'center', marginBottom: 34 },
  icon: { width: 76, height: 76, borderRadius: 17, marginBottom: 12 },
  appName: { fontSize: 15, fontWeight: '800', color: '#2B2420', letterSpacing: 0.2 },

  question: {
    fontSize: 24,
    fontWeight: '900',
    color: '#2B2420',
    textAlign: 'center',
    letterSpacing: -0.4,
    marginBottom: 8,
  },
  note: {
    fontSize: 12.5,
    color: '#6E645C',
    textAlign: 'center',
    lineHeight: 19,
    marginBottom: 24,
    paddingHorizontal: 8,
  },

  choices: { gap: 12 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 2,
    paddingVertical: 18,
    paddingHorizontal: 16,
  },
  cardBadge: {
    width: 46,
    height: 46,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  cardEmoji: { fontSize: 24 },
  cardBody: { flex: 1 },
  cardLabel: { fontSize: 19, fontWeight: '900', letterSpacing: -0.3, marginBottom: 2 },
  cardTarget: { fontSize: 12.5, fontWeight: '700', color: '#6E645C' },
  cardDetail: { fontSize: 11.5, color: '#9C9186', marginTop: 2 },
  cardArrow: { fontSize: 26, fontWeight: '300', marginLeft: 6 },

  featuresLink: { marginTop: 28, alignItems: 'center', paddingVertical: 10 },
  featuresLinkText: {
    fontSize: 13,
    color: '#2B2420',
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});
