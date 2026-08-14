import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { FORMULAS, SUBJECTS, type Subject } from '../../data/formulas';
import SubjectIcon, { type IconSubject } from '../../components/SubjectIcon';
import FigureView from '../../components/FigureView';
import { formulaImages } from '../../data/formulaImages';

// 公式タブの教科名（算数/理科/社会）→ アイコンキー
const SUBJ_ICON: Record<Subject, IconSubject> = { 算数: 'sansu', 理科: 'rika', 社会: 'shakai' };


// 1項目分の描画。FlatListの行として使う。
function FormulaRow({ item, accent }: { item: any; accent: string }) {
  return (
      <View style={styles.formulaRow}>
        <View style={[styles.formulaLabel, { borderLeftColor: accent }]}>
          <Text style={styles.formulaLabelText}>{item.label}</Text>
        </View>

        <View style={styles.formulaBox}>
          <Text style={[styles.formulaText, { color: accent }]}>{item.formula}</Text>
          {item.note && <Text style={styles.formulaNote}>{item.note}</Text>}
        </View>

        {item.explanation && (
          <Text style={styles.explanation}>{item.explanation}</Text>
        )}

        {item.figure && (
          <View style={styles.figureBox}>
            <Text style={styles.figureLabel}>図解</Text>
            <FigureView figure={item.figure} />
          </View>
        )}

        {!item.figure && formulaImages[item.label] && (
          <View style={styles.figureBox}>
            <Text style={styles.figureLabel}>図解</Text>
            <Image
              source={formulaImages[item.label]}
              style={styles.formulaImage}
              resizeMode="cover"
            />
          </View>
        )}

        {!item.figure && !formulaImages[item.label] && item.steps && item.steps.length > 0 && (
          <View style={styles.stepsBox}>
            <Text style={styles.figureLabel}>とき方の流れ</Text>
            {item.steps.map((st: string, si: number) => (
              <Text key={si} style={styles.stepsLine}>{st}</Text>
            ))}
          </View>
        )}

        {!item.figure && !formulaImages[item.label] && !(item.steps && item.steps.length > 0) && item.asciiFigure && (
          <View style={styles.figureBox}>
            <Text style={styles.figureLabel}>図解</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Text style={styles.figureText}>{item.asciiFigure}</Text>
            </ScrollView>
          </View>
        )}

        {item.example && (
          <View style={[styles.exampleBox, { borderLeftColor: accent }]}>
            <Text style={styles.exampleQ}>
              <Text style={[styles.exampleTag, { color: accent }]}>例題 </Text>
              {item.example.q}
            </Text>
            <Text style={styles.exampleA}>
              <Text style={styles.exampleTagA}>解答 </Text>
              {item.example.a}
            </Text>
          </View>
        )}

        {item.checkpoints && item.checkpoints.length > 0 && (
          <View style={styles.checkBox}>
            <Text style={[styles.checkTitle, { color: accent }]}>✓ チェックポイント</Text>
            {item.checkpoints.map((cp: string, ci: number) => (
              <View key={ci} style={styles.checkRow}>
                <Text style={[styles.checkMark, { color: accent }]}>▸</Text>
                <Text style={styles.checkText}>{cp}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
  );
}

export default function FormulasScreen() {
  const [subject, setSubject] = useState<Subject>('算数');
  const sections = FORMULAS[subject];
  const subjectInfo = SUBJECTS.find((s) => s.key === subject)!;

  // セクション見出しと項目を1本のリストにならし、FlatListで仮想化できるようにする
  type Row =
    | { kind: 'header'; key: string; title: string; intro?: string }
    | { kind: 'item'; key: string; item: (typeof sections)[number]['items'][number] };
  const rows: Row[] = React.useMemo(() => {
    const out: Row[] = [];
    sections.forEach((section, si) => {
      out.push({ kind: 'header', key: `h${si}`, title: section.title, intro: section.intro });
      section.items.forEach((item, ii) => {
        out.push({ kind: 'item', key: `i${si}_${ii}`, item });
      });
    });
    return out;
  }, [sections]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, { backgroundColor: subjectInfo.color }]}>
        <SubjectIcon subject={SUBJ_ICON[subject]} size={30} color="#FFFFFF" strokeWidth={2} />
        <View>
          <Text style={styles.headerTitle}>📋 公式・まとめ</Text>
          <Text style={styles.headerSub}>図解でわかる・チェックポイントで固める</Text>
        </View>
      </View>

      <View style={styles.subjectRow}>
        {SUBJECTS.map((s) => (
          <TouchableOpacity
            key={s.key}
            style={[styles.subjectBtn, subject === s.key && { backgroundColor: s.color }]}
            onPress={() => setSubject(s.key)}
            activeOpacity={0.8}
          >
            <SubjectIcon subject={SUBJ_ICON[s.key]} size={18} color={subject === s.key ? '#FFFFFF' : s.color} strokeWidth={2} />
            <Text style={[styles.subjectBtnText, subject === s.key && styles.subjectBtnTextActive]}>
              {s.key}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        style={styles.scroll}
        contentContainerStyle={styles.content}
        data={rows}
        keyExtractor={(r) => r.key}
        // 画像を含む項目が多く（社会は75枚）、全部を一度に描画すると
        // 640×640の画像がまとめて展開されて低メモリ端末で落ちる。
        // 画面に入った分だけ描画・保持する。
        initialNumToRender={4}
        maxToRenderPerBatch={4}
        windowSize={5}
        removeClippedSubviews
        ListFooterComponent={<View style={{ height: 120 }} />}
        renderItem={({ item: row }) =>
          row.kind === 'header' ? (
            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, { color: subjectInfo.color }]}>{row.title}</Text>
              {row.intro != null && <Text style={styles.sectionIntro}>{row.intro}</Text>}
            </View>
          ) : (
            <FormulaRow item={row.item} accent={subjectInfo.color} />
          )
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F8FB' },
  header: {
    paddingTop: 16,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  headerEmoji: { fontSize: 40 },
  headerTitle: { fontSize: 22, fontWeight: '900', color: '#FFFFFF' },
  headerSub: { fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: '500', marginTop: 2 },
  subjectRow: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1.5,
    borderBottomColor: '#CBD2DE',
    padding: 10,
    gap: 8,
  },
  subjectBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#DDE2EC',
  },
  subjectBtnEmoji: { fontSize: 18 },
  subjectBtnText: { fontSize: 14, fontWeight: '700', color: '#666' },
  subjectBtnTextActive: { color: '#FFFFFF' },
  scroll: { flex: 1 },
  content: { padding: 16 },
  sectionHeader: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginTop: 14,
    borderWidth: 1.5,
    borderColor: '#CBD2DE',
    overflow: 'hidden',
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 14,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: '#CBD2DE',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '900',
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F3F7',
  },
  sectionIntro: {
    fontSize: 12.5,
    color: '#5A6B7B',
    lineHeight: 19,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 2,
  },
  formulaRow: {
    borderBottomWidth: 1,
    borderBottomColor: '#F0F3F7',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  formulaLabel: {
    borderLeftWidth: 3,
    paddingLeft: 8,
    marginBottom: 6,
  },
  formulaLabelText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#333',
  },
  formulaBox: {
    backgroundColor: '#F8FAFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  formulaText: {
    fontSize: 15,
    fontWeight: '800',
    fontFamily: 'monospace',
  },
  formulaNote: {
    fontSize: 11,
    color: '#888',
    marginTop: 4,
    fontWeight: '400',
  },
  explanation: {
    fontSize: 13,
    color: '#3A4A5A',
    lineHeight: 20,
    marginTop: 8,
  },
  figureBox: {
    backgroundColor: '#FCFDF6',
    borderWidth: 1,
    borderColor: '#EAEEDA',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 8,
    overflow: 'hidden',
  },
  figureLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#A0A88A',
    marginBottom: 4,
    letterSpacing: 1,
  },
  figureText: {
    fontSize: 12,
    lineHeight: 17,
    color: '#33413B',
    fontFamily: 'monospace',
  },
  formulaImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
    backgroundColor: '#F0F3F7',
  },
  stepsBox: {
    backgroundColor: '#F8FAFF',
    borderWidth: 1,
    borderColor: '#E2E8F5',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 8,
  },
  stepsLine: {
    fontSize: 13,
    lineHeight: 21,
    color: '#2A3A4A',
    fontVariant: ['tabular-nums'],
  },
  exampleBox: {
    backgroundColor: '#FFF9F0',
    borderLeftWidth: 3,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 8,
  },
  exampleQ: {
    fontSize: 12.5,
    color: '#4A3A2A',
    lineHeight: 19,
  },
  exampleTag: {
    fontWeight: '900',
    fontSize: 11,
  },
  exampleA: {
    fontSize: 12.5,
    color: '#4A3A2A',
    lineHeight: 19,
    marginTop: 5,
  },
  exampleTagA: {
    fontWeight: '900',
    fontSize: 11,
    color: '#C0894A',
  },
  checkBox: {
    backgroundColor: '#F4FAFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 8,
  },
  checkTitle: {
    fontSize: 12,
    fontWeight: '900',
    marginBottom: 6,
  },
  checkRow: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  checkMark: {
    fontSize: 12,
    fontWeight: '900',
    marginRight: 6,
    lineHeight: 19,
  },
  checkText: {
    flex: 1,
    fontSize: 12.5,
    color: '#3A4A5A',
    lineHeight: 19,
  },
});
