// テスト対策の入口。
//
// 入試だけでなく、学校の学期末テストや市町村・都道府県の学力調査にも
// 使えるように、目的を選んでから教科を選ぶ形にした。
// 目的ごとに難易度の配分と、記述式・複数小問（活用型）の比率を変えている。

import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { subjectInfo, type SubjectKey } from '../data/questions-meta';
import { TEST_MODES, levelLabel, type TestModeKey, type LevelKey } from '../data/test-modes';
import { useExamType, examTypeLabel, subjectDisplayName } from '../store/examType';
import { GRADE_ORDER, GRADE_SHORT_LABELS, examTypeOfGrade, type GradeKey } from '../data/grades';
import HomeButton from '../components/HomeButton';

const SUBJECTS: SubjectKey[] = ['sansu', 'kokugo', 'rika', 'shakai', 'eigo'];
const LEVELS: LevelKey[] = ['basic', 'standard', 'advanced'];

export default function TestPrepScreen() {
  const router = useRouter();
  const { examType, loading } = useExamType();
  const [modeKey, setModeKey] = useState<TestModeKey | null>(null);
  const [level, setLevel] = useState<LevelKey>('basic');
  const [grade, setGrade] = useState<GradeKey | null>(null);

  const mode = useMemo(() => TEST_MODES.find((m) => m.key === modeKey) ?? null, [modeKey]);
  const et = examType ?? 'chugaku';
  const gradesForExamType = useMemo(
    () => GRADE_ORDER.filter((g) => examTypeOfGrade(g) === et),
    [et],
  );

  function start(subject: SubjectKey) {
    if (!mode) return;
    const lv = mode.key === 'level' ? `&difficulty=${level}` : '';
    const gr = grade ? `&grade=${grade}` : '';
    router.push(`/quiz/${subject}?testmode=${mode.key}&examType=${et}${lv}${gr}` as any);
  }

  if (loading) return <SafeAreaView style={styles.root} />;

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7}>
            <Text style={styles.back}>‹ 戻る</Text>
          </TouchableOpacity>
          <HomeButton variant="light" />
        </View>
        <Text style={styles.title}>📚 テスト対策</Text>
        <Text style={styles.sub}>{examTypeLabel[et]}・目的に合わせて出題します</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionLabel}>① 何のためのテストですか</Text>
        {TEST_MODES.map((m) => {
          const active = modeKey === m.key;
          return (
            <TouchableOpacity
              key={m.key}
              style={[styles.modeCard, active && { borderColor: m.color, borderWidth: 2 }]}
              onPress={() => setModeKey(m.key)}
              activeOpacity={0.85}
            >
              <View style={[styles.modeBadge, { backgroundColor: m.color }]}>
                <Text style={styles.modeEmoji}>{m.emoji}</Text>
              </View>
              <View style={styles.modeBody}>
                <Text style={styles.modeTitle}>{m.title}</Text>
                <Text style={styles.modeSummary}>{m.summary}</Text>
                {active && <Text style={styles.modeDetail}>{m.detail}</Text>}
                {active && (
                  <View style={styles.mixRow}>
                    <Text style={styles.mixText}>
                      {m.key === 'level'
                        ? `${levelLabel[level]}のみ・${m.count}問`
                        : `基礎${Math.round(m.mix.basic * 100)}％ / 標準${Math.round(
                            m.mix.standard * 100,
                          )}％ / 応用${Math.round(m.mix.advanced * 100)}％・${m.count}問`}
                    </Text>
                    {m.writtenRatio > 0 && (
                      <Text style={styles.mixText}>
                        うち記述式・複数小問 約{Math.round(m.writtenRatio * 100)}％
                      </Text>
                    )}
                  </View>
                )}
              </View>
            </TouchableOpacity>
          );
        })}

        {mode && (
          <>
            <Text style={styles.sectionLabel}>② 学年（任意・絞り込み）</Text>
            <View style={styles.levelRow}>
              <TouchableOpacity
                style={[styles.levelBtn, grade === null && styles.levelBtnActive]}
                onPress={() => setGrade(null)}
                activeOpacity={0.85}
              >
                <Text style={[styles.levelText, grade === null && styles.levelTextActive]}>
                  全学年
                </Text>
              </TouchableOpacity>
              {gradesForExamType.map((g) => (
                <TouchableOpacity
                  key={g}
                  style={[styles.levelBtn, grade === g && styles.levelBtnActive]}
                  onPress={() => setGrade(g)}
                  activeOpacity={0.85}
                >
                  <Text style={[styles.levelText, grade === g && styles.levelTextActive]}>
                    {GRADE_SHORT_LABELS[g]}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}

        {mode?.key === 'level' && (
          <>
            <Text style={styles.sectionLabel}>③ 難易度</Text>
            <View style={styles.levelRow}>
              {LEVELS.map((lv) => (
                <TouchableOpacity
                  key={lv}
                  style={[styles.levelBtn, level === lv && styles.levelBtnActive]}
                  onPress={() => setLevel(lv)}
                  activeOpacity={0.85}
                >
                  <Text style={[styles.levelText, level === lv && styles.levelTextActive]}>
                    {levelLabel[lv]}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}

        {mode && (
          <>
            <Text style={styles.sectionLabel}>
              {mode.key === 'level' ? '④' : '③'} 教科を選ぶ
            </Text>
            <View style={styles.subjectGrid}>
              {SUBJECTS.map((k) => (
                <TouchableOpacity
                  key={k}
                  style={styles.subjectTile}
                  onPress={() => start(k)}
                  activeOpacity={0.85}
                >
                  <Text style={styles.subjectEmoji}>{subjectInfo[k].emoji}</Text>
                  <Text style={styles.subjectName}>
                    {subjectDisplayName(subjectInfo[k].name, et)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}

        {!mode && (
          <View style={styles.hintBox}>
            <Text style={styles.hintText}>
              目的を選ぶと、その形式に合わせた難易度の組み合わせで出題します。
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#FAF6EF' },
  header: {
    backgroundColor: '#2B2420',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 18,
    borderBottomWidth: 3,
    borderBottomColor: '#221C18',
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  back: { color: 'rgba(255,255,255,0.85)', fontSize: 14, fontWeight: '700' },
  title: { fontSize: 22, fontWeight: '900', color: '#FFFFFF', letterSpacing: -0.3 },
  sub: { fontSize: 12.5, color: '#E8DCC8', fontWeight: '600', marginTop: 2 },

  content: { padding: 16, paddingBottom: 48 },
  sectionLabel: {
    fontSize: 12,
    fontWeight: '800',
    color: '#2B2420',
    letterSpacing: 0.6,
    marginTop: 18,
    marginBottom: 10,
  },

  modeCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DCD3C5',
    padding: 13,
    marginBottom: 9,
  },
  modeBadge: {
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  modeEmoji: { fontSize: 20 },
  modeBody: { flex: 1 },
  modeTitle: { fontSize: 15.5, fontWeight: '900', color: '#2B2420', marginBottom: 2 },
  modeSummary: { fontSize: 12.5, color: '#6E645C', lineHeight: 18 },
  modeDetail: {
    fontSize: 12.5,
    color: '#6E645C',
    lineHeight: 19,
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#EBE4D8',
  },
  mixRow: { marginTop: 8, backgroundColor: '#F5EFE4', borderRadius: 6, padding: 8 },
  mixText: { fontSize: 11.5, color: '#6E645C', fontWeight: '700', lineHeight: 17 },

  levelRow: { flexDirection: 'row', gap: 8 },
  levelBtn: {
    flex: 1,
    paddingVertical: 11,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DCD3C5',
  },
  levelBtnActive: { backgroundColor: '#10B981', borderColor: '#10B981' },
  levelText: { fontSize: 14, fontWeight: '800', color: '#6E645C' },
  levelTextActive: { color: '#FFFFFF' },

  subjectGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 9 },
  subjectTile: {
    width: '31%',
    minWidth: 96,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DCD3C5',
    paddingVertical: 15,
    alignItems: 'center',
  },
  subjectEmoji: { fontSize: 25, marginBottom: 5 },
  subjectName: { fontSize: 13.5, fontWeight: '800', color: '#2B2420' },

  hintBox: {
    backgroundColor: '#FAF6EF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DCD3C5',
    padding: 14,
    marginTop: 18,
  },
  hintText: { fontSize: 13, color: '#6E645C', lineHeight: 20, textAlign: 'center' },
});
