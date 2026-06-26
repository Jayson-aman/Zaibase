import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { categoryInfo, type FPCategory } from '../../data/questions-meta';

const categories: { key: FPCategory; count: string }[] = [
  { key: 'life',        count: '35問' },
  { key: 'risk',        count: '35問' },
  { key: 'investment',  count: '30問' },
  { key: 'tax',         count: '35問' },
  { key: 'real_estate', count: '30問' },
  { key: 'estate',      count: '35問' },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>FP資格対策</Text>
        <Text style={styles.subtitle}>ファイナンシャルプランナー 3級・2級</Text>

        <TouchableOpacity
          style={styles.startAll}
          onPress={() => router.push('/quiz')}
        >
          <Text style={styles.startAllText}>📝 全科目でクイズを始める</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.startAll, styles.weakBtn]}
          onPress={() => router.push({ pathname: '/quiz', params: { mode: 'weak' } })}
        >
          <Text style={styles.startAllText}>🔴 苦手問題を集中特訓</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>科目別</Text>

        <View style={styles.grid}>
          {categories.map(({ key, count }) => {
            const info = categoryInfo[key];
            return (
              <TouchableOpacity
                key={key}
                style={[styles.card, { borderTopColor: info.color }]}
                onPress={() => router.push({ pathname: '/quiz', params: { category: key } })}
              >
                <Text style={styles.cardEmoji}>{info.emoji}</Text>
                <Text style={styles.cardName}>{info.name}</Text>
                <Text style={styles.cardCount}>{count}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F0F9FF' },
  container: { padding: 20, paddingBottom: 40 },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0369A1',
    textAlign: 'center',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 24,
  },
  startAll: {
    backgroundColor: '#0EA5E9',
    borderRadius: 14,
    padding: 18,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#0EA5E9',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  weakBtn: {
    backgroundColor: '#EF4444',
    shadowColor: '#EF4444',
  },
  startAllText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#374151',
    marginTop: 8,
    marginBottom: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  card: {
    width: '47%',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 18,
    borderTopWidth: 4,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  cardEmoji: { fontSize: 30, marginBottom: 6 },
  cardName: { fontSize: 15, fontWeight: '700', color: '#1E293B' },
  cardCount: { fontSize: 12, color: '#94A3B8', marginTop: 4 },
});
