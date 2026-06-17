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
import { useSubscription } from '../../hooks/useSubscription';
import {
  questionsBySubject,
  subjectInfo,
  SubjectKey,
} from '../../data/questions';
import type { CourseKey, ExamType } from '../../data/courses';
import {
  ALL_COURSES, CHUGAKU_COURSES, KOKO_COURSES, CATEGORY_COURSES, SCHOOL_COURSES,
  getCourseInfo, LEVEL_ORDER,
} from '../../data/courses';
import { primeSpeech } from '../../utils/speech';
import { getTodayDayLabel } from '../../utils/dailyChallenge';

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
  { key: 'standard', label: '標準', icon: '⭐', color: '#F39C12', desc: '標準レベル' },
  { key: 'advanced', label: '発展', icon: '🔥', color: '#E74C3C', desc: '難関レベル' },
];

function getQuestionCount(
  subject: SubjectKey,
  difficulty: Difficulty,
  examType: ExamType,
  course: CourseKey,
): number {
  let qs = questionsBySubject[subject];
  // Filter by examType
  qs = qs.filter((q) => (q.examType ?? 'chugaku') === examType);
  // Filter by course
  if (course === 'general') {
    qs = qs.filter((q) => !q.course || q.course === 'general');
  } else {
    qs = qs.filter((q) => q.course === course);
  }
  if (difficulty !== 'all') {
    qs = qs.filter((q) => q.difficulty === difficulty);
  }
  return qs.length;
}

// ---------- Zaibase.Group logo header ----------
function ZaibaseLogo() {
  return (
    <View style={logoStyles.wrap}>
      <Text style={logoStyles.z}>Z</Text>
      <View style={logoStyles.textWrap}>
        <Text style={logoStyles.brand}>aibase<Text style={logoStyles.dot}>.</Text>Group</Text>
        <Text style={logoStyles.sub}>中学・高校受験対策</Text>
      </View>
    </View>
  );
}

const logoStyles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  z: {
    fontSize: 56,
    fontWeight: '900',
    color: '#FFFFFF',
    lineHeight: 62,
    letterSpacing: -2,
    textShadowColor: 'rgba(0,0,0,0.25)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  textWrap: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  brand: {
    fontSize: 26,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  dot: {
    color: '#FFD700',
  },
  sub: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.82)',
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});

// ---------- Home Screen ----------
export default function HomeScreen() {
  const router = useRouter();
  const [listenPickerActive, setListenPickerActive] = useState(false);
  const [listenVisible, setListenVisible] = useState(false);
  const [listenSubject, setListenSubject] = useState<SubjectKey | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty>('all');
  const [examType, setExamType] = useState<ExamType>('chugaku');
  const [selectedCourse, setSelectedCourse] = useState<CourseKey>('general');
  const [courseTab, setCourseTab] = useState<'category' | 'school'>('category');

  const courses = examType === 'chugaku' ? CHUGAKU_COURSES : KOKO_COURSES;

  function handleExamTypeChange(type: ExamType) {
    setExamType(type);
    // Reset to first course for this exam type
    const firstCourse = type === 'chugaku' ? 'general' : 'koko-general';
    setSelectedCourse(firstCourse);
  }

  function handleSubject(subject: SubjectKey) {
    const params: Record<string, string> = {};
    if (difficulty !== 'all') params.difficulty = difficulty;
    params.examType = examType;
    params.course = selectedCourse;
    const query = Object.keys(params).length
      ? '?' + Object.entries(params).map(([k, v]) => `${k}=${v}`).join('&')
      : '';
    router.push(`/quiz/${subject}${query}`);
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
  const { isMax } = useSubscription();
  const selectedDiff = DIFFICULTY_OPTIONS.find((d) => d.key === difficulty)!;
  const todayLabel = getTodayDayLabel();
  const courseInfo = getCourseInfo(selectedCourse);

  const listenQuestions =
    listenSubject == null
      ? []
      : difficulty === 'all'
        ? questionsBySubject[listenSubject]
        : questionsBySubject[listenSubject].filter((q) => q.difficulty === difficulty);

  // Courses that require MAX or Pro
  const maxOnlyCourses = ALL_COURSES.filter(c => c.maxOnly).map(c => c.key);
  const courseRequiresMax = maxOnlyCourses.includes(selectedCourse);

  // Schools sorted by level then name
  const sortedSchools = [...SCHOOL_COURSES].sort(
    (a, b) => LEVEL_ORDER[a.level] - LEVEL_ORDER[b.level],
  );

  return (
    <SafeAreaView style={styles.container}>
      <SchoolSlideshow>
        <ZaibaseLogo />
      </SchoolSlideshow>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Exam type toggle */}
        {!listenPickerActive && (
          <View style={styles.examToggleRow}>
            <TouchableOpacity
              style={[styles.examToggleBtn, examType === 'chugaku' && styles.examToggleBtnActive]}
              onPress={() => handleExamTypeChange('chugaku')}
              activeOpacity={0.8}
            >
              <Text style={[styles.examToggleText, examType === 'chugaku' && styles.examToggleTextActive]}>
                📖 中学受験
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.examToggleBtn, examType === 'koko' && styles.examToggleBtnActive]}
              onPress={() => handleExamTypeChange('koko')}
              activeOpacity={0.8}
            >
              <Text style={[styles.examToggleText, examType === 'koko' && styles.examToggleTextActive]}>
                🏫 高校受験
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Course selector */}
        {!listenPickerActive && (
          <View style={styles.courseSection}>
            <Text style={styles.courseSectionLabel}>コースを選ぶ</Text>

            {/* Sub-tabs: Category / School — only for 中学受験 */}
            {examType === 'chugaku' && (
              <View style={styles.courseTabRow}>
                <TouchableOpacity
                  style={[styles.courseTab, courseTab === 'category' && styles.courseTabActive]}
                  onPress={() => setCourseTab('category')}
                  activeOpacity={0.8}
                >
                  <Text style={[styles.courseTabText, courseTab === 'category' && styles.courseTabTextActive]}>
                    📂 カテゴリ
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.courseTab, courseTab === 'school' && styles.courseTabActive]}
                  onPress={() => setCourseTab('school')}
                  activeOpacity={0.8}
                >
                  <Text style={[styles.courseTabText, courseTab === 'school' && styles.courseTabTextActive]}>
                    🏫 学校別 ({SCHOOL_COURSES.length}校)
                  </Text>
                </TouchableOpacity>
              </View>
            )}

            {/* Category chips */}
            {(examType === 'koko' || courseTab === 'category') && (
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.courseScroll}>
                {(examType === 'chugaku' ? CATEGORY_COURSES : KOKO_COURSES).map((c) => {
                  const isSelected = selectedCourse === c.key;
                  const needsMax = maxOnlyCourses.includes(c.key);
                  return (
                    <TouchableOpacity
                      key={c.key}
                      style={[
                        styles.courseChip,
                        isSelected && { backgroundColor: c.color, borderColor: c.color },
                        !isSelected && { borderColor: c.color + '66' },
                      ]}
                      onPress={() => {
                        if (needsMax && !isMax) { setPaywallVisible(true); return; }
                        setSelectedCourse(c.key);
                      }}
                      activeOpacity={0.8}
                    >
                      <Text style={styles.courseChipEmoji}>{c.emoji}</Text>
                      <Text style={[styles.courseChipText, isSelected && { color: '#FFFFFF' }]}>
                        {c.shortName}
                      </Text>
                      {needsMax && <Text style={styles.courseMaxBadge}>MAX</Text>}
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            )}

            {/* School grid */}
            {examType === 'chugaku' && courseTab === 'school' && (
              <ScrollView style={styles.schoolGridScroll} nestedScrollEnabled showsVerticalScrollIndicator={false}>
                {(['最難関', '難関', '標準〜難関'] as const).map((level) => {
                  const schools = sortedSchools.filter(s => s.level === level);
                  if (schools.length === 0) return null;
                  return (
                    <View key={level} style={styles.schoolLevelGroup}>
                      <Text style={styles.schoolLevelLabel}>{level}</Text>
                      <View style={styles.schoolGrid}>
                        {schools.map((s) => {
                          const isSelected = selectedCourse === s.key;
                          const needsMax = maxOnlyCourses.includes(s.key);
                          const needsPro = !needsMax;
                          return (
                            <TouchableOpacity
                              key={s.key}
                              style={[
                                styles.schoolCard,
                                isSelected && { backgroundColor: s.color, borderColor: s.color },
                                !isSelected && { borderColor: s.color + '55' },
                              ]}
                              onPress={() => {
                                if (needsMax && !isMax) { setPaywallVisible(true); return; }
                                if (needsPro && !isPro) { setPaywallVisible(true); return; }
                                setSelectedCourse(s.key);
                                setCourseTab('school');
                              }}
                              activeOpacity={0.8}
                            >
                              <View style={styles.schoolCardTop}>
                                <Text style={styles.schoolCardEmoji}>{s.emoji}</Text>
                                <View style={styles.schoolCardBadges}>
                                  {needsMax && <Text style={styles.courseMaxBadge}>MAX</Text>}
                                  {needsPro && !needsMax && <Text style={styles.courseProBadge}>PRO</Text>}
                                </View>
                              </View>
                              <Text style={[styles.schoolCardName, isSelected && { color: '#FFF' }]} numberOfLines={2}>
                                {s.shortName}
                              </Text>
                              <View style={styles.schoolCardMeta}>
                                {s.hensachi && (
                                  <Text style={[styles.schoolCardHensachi, isSelected && { color: '#FFE' }]}>
                                    偏差値{s.hensachi}
                                  </Text>
                                )}
                                {s.gender && (
                                  <Text style={[styles.schoolCardGender, isSelected && { color: '#FFE' }]}>
                                    {s.gender}
                                  </Text>
                                )}
                              </View>
                            </TouchableOpacity>
                          );
                        })}
                      </View>
                    </View>
                  );
                })}
              </ScrollView>
            )}

            {/* Course detail banner */}
            <View style={[styles.courseBanner, { borderColor: courseInfo.color }]}>
              <View style={styles.courseBannerLeft}>
                <Text style={[styles.courseBannerTitle, { color: courseInfo.color }]}>
                  {courseInfo.emoji} {courseInfo.name}
                </Text>
                <Text style={styles.courseBannerDesc}>{courseInfo.description}</Text>
              </View>
              <View style={[styles.courseLevelBadge, { backgroundColor: courseInfo.color + '22' }]}>
                <Text style={[styles.courseLevelText, { color: courseInfo.color }]}>{courseInfo.level}</Text>
              </View>
            </View>
            {/* Target schools */}
            <View style={styles.targetSchoolsRow}>
              <Text style={styles.targetSchoolsLabel}>対象校：</Text>
              <Text style={styles.targetSchoolsText} numberOfLines={1}>
                {courseInfo.targetSchools.join('・')}
              </Text>
            </View>

            {/* Scholarship info banner (MAX users) */}
            {isMax && (
              <View style={styles.scholarshipBanner}>
                <Text style={styles.scholarshipTitle}>💴 奨学金・授業料支援情報</Text>
                <Text style={styles.scholarshipText}>
                  大阪府私学助成・授業料支援給付金制度を活用できる可能性があります。
                  入学前に必ず確認してください。
                </Text>
                <Text style={styles.scholarshipLink}>
                  ▸ 大阪私学連合会 奨学金情報{'\n'}
                  ▸ 大阪府 授業料支援給付金
                </Text>
              </View>
            )}
          </View>
        )}

        {/* Mascot banner */}
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
                クイズも聞き流しも、解説付きで理解が深まる
              </Text>
            </View>
          </View>
        )}

        {/* Action buttons */}
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

        {!listenPickerActive && !isPro && (
          <TouchableOpacity
            style={styles.planBtn}
            onPress={() => setPaywallVisible(true)}
            activeOpacity={0.85}
          >
            <Text style={styles.planBtnText}>👑 PRO・MAX プランを見る</Text>
          </TouchableOpacity>
        )}

        {!listenPickerActive && (
          <TouchableOpacity
            style={[styles.dailyBtn, !isMax && styles.dailyBtnLocked]}
            onPress={() => {
              if (!isMax) {
                setPaywallVisible(true);
                return;
              }
              router.push('/quiz/daily');
            }}
            activeOpacity={0.85}
          >
            <Text style={styles.dailyBtnText}>
              🔥 今日（{todayLabel}曜日）のMAX日替わり30問
            </Text>
            {!isMax && <Text style={styles.dailyBtnBadge}>MAX限定</Text>}
          </TouchableOpacity>
        )}

        {/* Difficulty selector */}
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
              questionCount={getQuestionCount(subject, difficulty, examType, selectedCourse)}
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
          <Text style={styles.infoText}>① コース・難易度・科目を選んでスタート</Text>
          <Text style={styles.infoText}>② 問題カードをタップして答えを確認</Text>
          <Text style={styles.infoText}>③ 解説を読んで「なぜその答えか」を理解</Text>
          <Text style={styles.infoText}>④ 進捗タブで苦手分析を確認</Text>
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
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 40,
  },

  // Exam type toggle
  examToggleRow: {
    flexDirection: 'row',
    backgroundColor: '#E8EDF5',
    borderRadius: 14,
    padding: 4,
    marginBottom: 16,
  },
  examToggleBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 11,
    alignItems: 'center',
  },
  examToggleBtnActive: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 2,
  },
  examToggleText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#888',
  },
  examToggleTextActive: {
    color: '#1A1A2E',
  },

  // Course selector
  courseSection: {
    marginBottom: 16,
  },
  courseSectionLabel: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1A1A2E',
    marginBottom: 10,
  },
  courseScroll: {
    marginBottom: 10,
  },
  courseChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 24,
    marginRight: 8,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#E0E6EF',
    gap: 5,
  },
  courseChipEmoji: {
    fontSize: 18,
  },
  courseChipText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#444',
  },
  courseMaxBadge: {
    fontSize: 11,
    fontWeight: '800',
    color: '#C0392B',
    backgroundColor: '#FFE8E8',
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 6,
    overflow: 'hidden',
    marginLeft: 2,
  },
  courseBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    borderLeftWidth: 4,
    marginBottom: 6,
    gap: 10,
  },
  courseBannerLeft: {
    flex: 1,
  },
  courseBannerTitle: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 3,
  },
  courseBannerDesc: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  courseLevelBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  courseLevelText: {
    fontSize: 14,
    fontWeight: '800',
  },
  targetSchoolsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  targetSchoolsLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#888',
  },
  targetSchoolsText: {
    flex: 1,
    fontSize: 14,
    color: '#555',
    fontWeight: '500',
  },

  // Course sub-tabs
  courseTabRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 10,
  },
  courseTab: {
    flex: 1,
    paddingVertical: 9,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#F0F4FA',
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  courseTabActive: {
    backgroundColor: '#1E5FBE',
    borderColor: '#1E5FBE',
  },
  courseTabText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#666',
  },
  courseTabTextActive: {
    color: '#FFFFFF',
  },

  // School grid
  schoolGridScroll: {
    maxHeight: 340,
    marginBottom: 10,
  },
  schoolLevelGroup: {
    marginBottom: 12,
  },
  schoolLevelLabel: {
    fontSize: 13,
    fontWeight: '800',
    color: '#888',
    marginBottom: 6,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  schoolGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  schoolCard: {
    width: '47%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 10,
    borderWidth: 1.5,
    borderColor: '#E0E6EF',
  },
  schoolCardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  schoolCardEmoji: {
    fontSize: 20,
  },
  schoolCardBadges: {
    flexDirection: 'row',
    gap: 4,
  },
  courseProBadge: {
    fontSize: 10,
    fontWeight: '800',
    color: '#7D3C98',
    backgroundColor: '#F3E5F5',
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 5,
    overflow: 'hidden',
  },
  schoolCardName: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1A1A2E',
    lineHeight: 18,
    marginBottom: 4,
  },
  schoolCardMeta: {
    flexDirection: 'row',
    gap: 4,
    flexWrap: 'wrap',
  },
  schoolCardHensachi: {
    fontSize: 11,
    color: '#888',
    fontWeight: '600',
  },
  schoolCardGender: {
    fontSize: 11,
    color: '#888',
    fontWeight: '600',
  },

  // Scholarship banner
  scholarshipBanner: {
    backgroundColor: '#FFF8E7',
    borderRadius: 12,
    padding: 12,
    marginTop: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#F9A825',
  },
  scholarshipTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#F57F17',
    marginBottom: 4,
  },
  scholarshipText: {
    fontSize: 12,
    color: '#555',
    lineHeight: 18,
    marginBottom: 6,
  },
  scholarshipLink: {
    fontSize: 12,
    color: '#1565C0',
    fontWeight: '600',
    lineHeight: 20,
  },

  // Mascot
  mascotBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    marginBottom: 14,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  mascotImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#EEF4FF',
  },
  mascotTextWrap: {
    flex: 1,
  },
  mascotTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1A1A2E',
    marginBottom: 5,
  },
  mascotSub: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
    fontWeight: '500',
  },

  // Listen button
  listenStartBtn: {
    backgroundColor: '#00A651',
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  listenStartBtnText: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },

  // Plan button
  planBtn: {
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 2.5,
    borderColor: '#9B59B6',
    backgroundColor: 'rgba(155,89,182,0.08)',
  },
  planBtnText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#9B59B6',
  },

  // Daily challenge button
  dailyBtn: {
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#C0392B',
    shadowColor: '#C0392B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
  },
  dailyBtnLocked: {
    backgroundColor: '#E8D5D5',
    shadowOpacity: 0,
    elevation: 0,
  },
  dailyBtnText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  dailyBtnBadge: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '700',
    color: '#9B1818',
    backgroundColor: '#FFE0E0',
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 20,
    overflow: 'hidden',
  },

  // Section title
  sectionTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1A1A2E',
    marginBottom: 12,
    letterSpacing: 0.5,
  },

  // Cancel button
  cancelBtn: {
    marginBottom: 12,
    alignSelf: 'flex-start',
  },
  cancelBtnText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1E5FBE',
  },

  // Difficulty
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
    fontSize: 24,
    marginBottom: 4,
  },
  diffBtnLabel: {
    fontSize: 15,
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
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
  },

  // Subject grid
  grid: {
    flexDirection: 'column',
    marginBottom: 20,
  },

  // Info card
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
    fontSize: 20,
    fontWeight: '800',
    color: '#1A1A2E',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 17,
    color: '#444',
    lineHeight: 30,
    fontWeight: '500',
  },

  // Inspiration card
  inspirationCard: {
    backgroundColor: '#1E5FBE',
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
  },
  inspirationText: {
    fontSize: 19,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 30,
  },
});
