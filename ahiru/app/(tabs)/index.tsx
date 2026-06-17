import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import SubjectCard from '../../components/SubjectCard';
import ListenMode from '../../components/ListenMode';
import Paywall from '../../components/Paywall';
import SchoolSlideshow from '../../components/SchoolSlideshow';
import AnimatedMascot from '../../components/AnimatedMascot';
import { homeMascot } from '../../data/images';
import { useProGate } from '../../hooks/useProGate';
import {
  questionsBySubject,
  subjectInfo,
  SubjectKey,
} from '../../data/questions';
import { primeSpeech } from '../../utils/speech';

const SUBJECTS: SubjectKey[] = ['sansu', 'kokugo', 'rika', 'shakai', 'eigo'];

type Difficulty = 'all' | 'basic' | 'standard' | 'advanced';

const DIFFICULTY_OPTIONS: {
  key: Difficulty;
  label: string;
  icon: string;
  color: string;
  desc: string;
}[] = [
  { key: 'all', label: 'すべて', icon: '📚', color: '#1E5FBE', desc: '全問題' },
  { key: 'basic', label: '基礎', icon: '🌱', color: '#27AE60', desc: '基礎レベル' },
  { key: 'standard', label: '標準', icon: '⭐', color: '#F39C12', desc: '開成・甲陽レベル' },
  { key: 'advanced', label: '発展', icon: '🔥', color: '#E74C3C', desc: '灘・東大寺レベル' },
];

function getQuestionCount(subject: SubjectKey, difficulty: Difficulty): number {
  const qs = questionsBySubject[subject];
  if (difficulty === 'all') return qs.length;
  return qs.filter((q) => q.difficulty === difficulty).length;
}

export default function HomeScreen() {
  const router = useRouter();
  const [listenPickerActive, setListenPickerActive] = useState(false);
  const [listenVisible, setListenVisible] = useState(false);
  const [listenSubject, setListenSubject] = useState<SubjectKey | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty>('all');

  function handleSubject(subject: SubjectKey) {
    const params = difficulty !== 'all' ? `?difficulty=${difficulty}` : '';
    router.push(`/quiz/${subject}${params}`);
  }

  function handleListenStartPress() {
    primeSpeech();
    requirePro(() => setListenPickerActive(true));
  }

  function handleListenSubject(subject: SubjectKey) {
    primeSpeech();
    requirePro(() => {
      setListenSubject(subject);
      setListenVisible(true);
      setListenPickerActive(false);
    });
  }

  function handleListenClose() {
    setListenVisible(false);
    setListenSubject(null);
  }

  function handleCancelListenPicker() {
    setListenPickerActive(false);
  }

  const listenInfo = listenSubject ? subjectInfo[listenSubject] : null;
  const { isPro, paywallVisible, setPaywallVisible, requirePro } = useProGate();
  const selectedDiff = DIFFICULTY_OPTIONS.find((d) => d.key === difficulty)!;

  const listenQuestions =
    listenSubject == null
      ? []
      : difficulty === 'all'
        ? questionsBySubject[listenSubject]
        : questionsBySubject[listenSubject].filter((q) => q.difficulty === difficulty);

  return (
    <SafeAreaView style={styles.container}>
      <SchoolSlideshow>
        <Text style={styles.appTitle}>📚 中学受験対策</Text>
        <Text style={styles.appSubtitle}>一問一答トレーニング</Text>
      </SchoolSlideshow>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {!listenPickerActive && (
          <View style={styles.mascotBanner}>
            <AnimatedMascot
              source={homeMascot}
              style={styles.mascotImage}
              fallbackEmoji="📚"
              animation="bounce"
              accessibilityLabel="勉強応援キャラクター"
            />
            <View style={styles.mascotTextWrap}>
              <Text style={styles.mascotTitle}>一緒に頑張ろう！</Text>
              <Text style={styles.mascotSub}>
                クイズも聞き流しも、イラスト付きで覚えやすい
              </Text>
            </View>
          </View>
        )}

        {!listenPickerActive && (
          <TouchableOpacity
            style={styles.listenStartBtn}
            onPress={handleListenStartPress}
            activeOpacity={0.85}
          >
            <Text style={styles.listenStartBtnText}>
              🔊 聞き流しスタート{!isPro ? ' 👑 Pro' : ''}
            </Text>
          </TouchableOpacity>
        )}

        {!listenPickerActive && (
          <>
            <Text style={styles.sectionTitle}>難易度を選ぶ</Text>
            <View style={styles.difficultyRow}>
              {DIFFICULTY_OPTIONS.map((opt) => {
                const active = difficulty === opt.key;
                return (
                  <TouchableOpacity
                    key={opt.key}
                    style={[styles.diffBtn, active && { backgroundColor: opt.color }]}
                    onPress={() => setDifficulty(opt.key)}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.diffBtnIcon}>{opt.icon}</Text>
                    <Text style={[styles.diffBtnLabel, active && styles.diffBtnLabelActive]}>
                      {opt.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            {difficulty !== 'all' && (
              <View style={[styles.diffInfoBanner, { borderColor: selectedDiff.color }]}>
                <Text style={[styles.diffInfoText, { color: selectedDiff.color }]}>
                  {selectedDiff.icon} {selectedDiff.desc}の問題のみ表示
                </Text>
              </View>
            )}
          </>
        )}

        <Text style={[styles.sectionTitle, listenPickerActive ? undefined : { marginTop: 16 }]}>
          {listenPickerActive
            ? '聞き流しする科目を選んでください'
            : '科目を選んでスタート！'}
        </Text>

        {listenPickerActive && (
          <TouchableOpacity style={styles.cancelBtn} onPress={handleCancelListenPicker}>
            <Text style={styles.cancelBtnText}>← 戻る</Text>
          </TouchableOpacity>
        )}

        <View style={styles.grid}>
          {SUBJECTS.map((subject) => (
            <SubjectCard
              key={subject}
              subject={subject}
              questionCount={getQuestionCount(subject, difficulty)}
              onPress={() =>
                listenPickerActive
                  ? handleListenSubject(subject)
                  : handleSubject(subject)
              }
            />
          ))}
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>📖 使い方</Text>
          <Text style={styles.infoText}>① 科目をタップ（または 🔊 聞き流し）</Text>
          <Text style={styles.infoText}>② 問題カードをタップして答えを確認</Text>
          <Text style={styles.infoText}>③ ✓正解 / ✗不正解 を記録</Text>
          <Text style={styles.infoText}>④ 進捗タブで成績を確認</Text>
        </View>

        <View style={styles.inspirationCard}>
          <Text style={styles.inspirationText}>
            「継続は力なり」毎日少しずつ積み重ねよう！ 💪
          </Text>
        </View>
      </ScrollView>

      {listenSubject && listenInfo && (
        <ListenMode
          visible={listenVisible && isPro}
          questions={listenQuestions}
          subjectName={listenInfo.name}
          subjectEmoji={listenInfo.emoji}
          subjectColor={listenInfo.color}
          autoStart
          onClose={handleListenClose}
        />
      )}

      <Paywall
        visible={paywallVisible}
        onClose={() => setPaywallVisible(false)}
        onPurchased={() => {
          setPaywallVisible(false);
          setListenPickerActive(true);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  appTitle: {
    fontSize: 42,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 1,
    marginBottom: 6,
  },
  appSubtitle: {
    fontSize: 22,
    color: 'rgba(255,255,255,0.9)',
    fontWeight: '600',
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
  },
  mascotBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  mascotImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#EEF4FF',
  },
  mascotTextWrap: {
    flex: 1,
  },
  mascotTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1A1A2E',
    marginBottom: 6,
  },
  mascotSub: {
    fontSize: 18,
    color: '#666',
    lineHeight: 26,
    fontWeight: '500',
  },
  listenStartBtn: {
    backgroundColor: '#00A651',
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  listenStartBtnText: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1A1A2E',
    marginBottom: 14,
    letterSpacing: 0.5,
  },
  cancelBtn: {
    marginBottom: 12,
    alignSelf: 'flex-start',
  },
  cancelBtnText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1E5FBE',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  difficultyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    gap: 6,
  },
  diffBtn: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#E0E6EF',
  },
  diffBtnIcon: {
    fontSize: 28,
    marginBottom: 4,
  },
  diffBtnLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: '#555',
  },
  diffBtnLabelActive: {
    color: '#FFFFFF',
  },
  diffInfoBanner: {
    borderWidth: 1.5,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 8,
    backgroundColor: '#FFFFFF',
  },
  diffInfoText: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1A1A2E',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 20,
    color: '#444',
    lineHeight: 34,
    fontWeight: '500',
  },
  inspirationCard: {
    backgroundColor: '#1E5FBE',
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
  },
  inspirationText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 34,
  },
});
