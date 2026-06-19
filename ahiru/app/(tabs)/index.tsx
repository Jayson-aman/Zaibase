import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import SubjectCard from '../../components/SubjectCard';
import ListenMode from '../../components/ListenMode';
import BetaGateModal from '../../components/BetaGateModal';
import { useBetaAccess } from '../../hooks/useBetaAccess';
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

// ── ダークテーマカラーパレット ──────────────────────────────
const D = {
  bg:          '#040C1C',
  glass:       'rgba(255,255,255,0.05)',
  glassMid:    'rgba(255,255,255,0.08)',
  glassBorder: 'rgba(255,255,255,0.09)',
  gold:        '#C8A84B',
  goldDim:     'rgba(200,168,75,0.18)',
  goldBorder:  'rgba(200,168,75,0.35)',
  white:       '#EDF4FF',
  soft:        '#7FA8CC',
  muted:       '#3E5870',
  divider:     'rgba(255,255,255,0.06)',
};
const SERIF = Platform.select({
  ios: 'HiraMinProN-W6',
  web: '"Hiragino Mincho ProN", "Yu Mincho", "Noto Serif JP", Georgia, serif',
  default: undefined,
}) as string | undefined;
const glassBlur: any = Platform.OS === 'web'
  ? { backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }
  : {};

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
      <View style={logoStyles.zRow}>
        <Text style={logoStyles.z}>Z</Text>
        <Text style={logoStyles.brand}>aibase<Text style={logoStyles.dot}>.</Text>Group</Text>
      </View>
      <Text style={logoStyles.sub}>中学・高校受験対策</Text>
    </View>
  );
}

const logoStyles = StyleSheet.create({
  wrap: {
    flexDirection: 'column',
    marginBottom: 4,
  },
  zRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 2,
  },
  z: {
    fontFamily: SERIF,
    fontSize: 56,
    lineHeight: 60,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: -2,
    includeFontPadding: false,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  brand: {
    fontFamily: SERIF,
    fontSize: 26,
    lineHeight: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.5,
    includeFontPadding: false,
  },
  dot: {
    color: D.gold,
  },
  sub: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.75)',
    fontWeight: '500',
    letterSpacing: 1.5,
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
  const { hasAccess: betaAccess, unlock } = useBetaAccess();
  const { isPro, paywallVisible, setPaywallVisible, requirePro } = useProGate(betaAccess);
  const { isMax: subIsMax } = useSubscription();
  const isMax = subIsMax || betaAccess;
  const selectedDiff = DIFFICULTY_OPTIONS.find((d) => d.key === difficulty)!;
  const courseInfo = getCourseInfo(selectedCourse);

  const listenQuestions = React.useMemo(() => {
    if (listenSubject == null) return [];
    const qs = difficulty === 'all'
      ? questionsBySubject[listenSubject]
      : questionsBySubject[listenSubject].filter((q) => q.difficulty === difficulty);
    return [...qs].sort(() => Math.random() - 0.5);
  }, [listenSubject, difficulty]);

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
              🔥 MAX日替わり30問
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

      <BetaGateModal
        visible={paywallVisible}
        onClose={() => setPaywallVisible(false)}
        onUnlocked={() => setPaywallVisible(false)}
        unlock={unlock}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: D.bg,
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
    backgroundColor: D.glass,
    borderRadius: 12,
    padding: 4,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: D.glassBorder,
  },
  examToggleBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 9,
    alignItems: 'center',
  },
  examToggleBtnActive: {
    backgroundColor: D.glassMid,
    borderWidth: 1,
    borderColor: D.glassBorder,
  },
  examToggleText: {
    fontSize: 17,
    fontWeight: '600',
    color: D.muted,
  },
  examToggleTextActive: {
    color: D.white,
    fontWeight: '700',
  },

  // Course selector
  courseSection: {
    marginBottom: 16,
  },
  courseSectionLabel: {
    fontFamily: SERIF,
    fontSize: 20,
    fontWeight: '700',
    color: D.white,
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
    backgroundColor: D.glass,
    borderWidth: 1.5,
    borderColor: D.glassBorder,
    gap: 5,
  },
  courseChipEmoji: {
    fontSize: 17,
  },
  courseChipText: {
    fontSize: 16,
    fontWeight: '700',
    color: D.soft,
  },
  courseMaxBadge: {
    fontSize: 10,
    fontWeight: '800',
    color: '#E05050',
    backgroundColor: 'rgba(224,80,80,0.15)',
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 5,
    overflow: 'hidden',
    marginLeft: 2,
  },
  courseBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: D.glass,
    borderRadius: 10,
    padding: 12,
    borderLeftWidth: 4,
    marginBottom: 6,
    gap: 10,
    borderWidth: 1,
    borderColor: D.glassBorder,
  },
  courseBannerLeft: {
    flex: 1,
  },
  courseBannerTitle: {
    fontSize: 17,
    fontWeight: '800',
    marginBottom: 3,
  },
  courseBannerDesc: {
    fontSize: 13,
    color: D.soft,
    fontWeight: '400',
  },
  courseLevelBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
  },
  courseLevelText: {
    fontSize: 13,
    fontWeight: '800',
  },
  targetSchoolsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  targetSchoolsLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: D.muted,
  },
  targetSchoolsText: {
    flex: 1,
    fontSize: 13,
    color: D.soft,
    fontWeight: '400',
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
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: D.glass,
    borderWidth: 1,
    borderColor: D.glassBorder,
  },
  courseTabActive: {
    backgroundColor: '#1E5FBE',
    borderColor: '#1E5FBE',
  },
  courseTabText: {
    fontSize: 14,
    fontWeight: '700',
    color: D.muted,
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
    fontSize: 12,
    fontWeight: '700',
    color: D.muted,
    marginBottom: 6,
    letterSpacing: 1.5,
  },
  schoolGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  schoolCard: {
    width: '47%',
    backgroundColor: D.glass,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: D.glassBorder,
  },
  schoolCardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  schoolCardEmoji: {
    fontSize: 18,
  },
  schoolCardBadges: {
    flexDirection: 'row',
    gap: 4,
  },
  courseProBadge: {
    fontSize: 10,
    fontWeight: '800',
    color: '#C07AE0',
    backgroundColor: 'rgba(192,122,224,0.15)',
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 5,
    overflow: 'hidden',
  },
  schoolCardName: {
    fontSize: 13,
    fontWeight: '700',
    color: D.white,
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
    color: D.muted,
    fontWeight: '500',
  },
  schoolCardGender: {
    fontSize: 11,
    color: D.muted,
    fontWeight: '500',
  },

  // Scholarship banner（情報カラーは維持）
  scholarshipBanner: {
    backgroundColor: 'rgba(249,168,37,0.1)',
    borderRadius: 10,
    padding: 12,
    marginTop: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#F9A825',
    borderWidth: 1,
    borderColor: 'rgba(249,168,37,0.25)',
  },
  scholarshipTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#F9A825',
    marginBottom: 4,
  },
  scholarshipText: {
    fontSize: 12,
    color: D.soft,
    lineHeight: 18,
    marginBottom: 6,
    fontWeight: '400',
  },
  scholarshipLink: {
    fontSize: 12,
    color: '#6BA8E8',
    fontWeight: '600',
    lineHeight: 20,
  },

  // Mascot
  mascotBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: D.glass,
    borderRadius: 14,
    padding: 14,
    marginBottom: 14,
    gap: 12,
    borderWidth: 1,
    borderColor: D.glassBorder,
  },
  mascotImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: D.glassMid,
  },
  mascotTextWrap: {
    flex: 1,
  },
  mascotTitle: {
    fontFamily: SERIF,
    fontSize: 20,
    fontWeight: '700',
    color: D.white,
    marginBottom: 5,
    includeFontPadding: false,
  },
  mascotSub: {
    fontSize: 14,
    color: D.soft,
    lineHeight: 22,
    fontWeight: '400',
  },

  // Listen button
  listenStartBtn: {
    backgroundColor: '#187A40',
    borderRadius: 10,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(0,166,81,0.4)',
    shadowColor: '#00A651',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 6,
  },
  listenStartBtnText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },

  // Plan button
  planBtn: {
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: D.goldBorder,
    backgroundColor: D.goldDim,
  },
  planBtnText: {
    fontSize: 18,
    fontWeight: '800',
    color: D.gold,
  },

  // Daily challenge button
  dailyBtn: {
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#8B1A1A',
    borderWidth: 1,
    borderColor: 'rgba(192,57,43,0.5)',
    shadowColor: '#C0392B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
  },
  dailyBtnLocked: {
    backgroundColor: D.glass,
    shadowOpacity: 0,
    elevation: 0,
    borderColor: D.glassBorder,
  },
  dailyBtnText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  dailyBtnBadge: {
    marginTop: 5,
    fontSize: 13,
    fontWeight: '700',
    color: '#E07070',
    backgroundColor: 'rgba(224,80,80,0.15)',
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 20,
    overflow: 'hidden',
  },

  // Section title
  sectionTitle: {
    fontFamily: SERIF,
    fontSize: 22,
    fontWeight: '700',
    color: D.white,
    marginBottom: 12,
    letterSpacing: 0.3,
    includeFontPadding: false,
  },

  // Cancel button
  cancelBtn: {
    marginBottom: 12,
    alignSelf: 'flex-start',
  },
  cancelBtnText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#6BA8E8',
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
    borderRadius: 10,
    backgroundColor: D.glass,
    borderWidth: 1,
    borderColor: D.glassBorder,
  },
  diffBtnIcon: {
    fontSize: 22,
    marginBottom: 4,
  },
  diffBtnLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: D.soft,
  },
  diffBtnLabelActive: {
    color: '#FFFFFF',
  },
  diffInfoBanner: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 8,
    backgroundColor: D.glass,
  },
  diffInfoText: {
    fontSize: 16,
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
    backgroundColor: D.glass,
    borderRadius: 12,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: D.glassBorder,
  },
  infoTitle: {
    fontFamily: SERIF,
    fontSize: 18,
    fontWeight: '700',
    color: D.white,
    marginBottom: 10,
    includeFontPadding: false,
  },
  infoText: {
    fontSize: 15,
    color: D.soft,
    lineHeight: 28,
    fontWeight: '400',
  },

  // Inspiration card
  inspirationCard: {
    backgroundColor: D.goldDim,
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: D.goldBorder,
  },
  inspirationText: {
    fontFamily: SERIF,
    fontSize: 17,
    fontWeight: '700',
    color: D.gold,
    textAlign: 'center',
    lineHeight: 28,
    includeFontPadding: false,
  },
});
