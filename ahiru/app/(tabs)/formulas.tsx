import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { FORMULAS, SUBJECTS, type Subject } from '../../data/formulas';

export default function FormulasScreen() {
  const [subject, setSubject] = useState<Subject>('算数');
  const sections = FORMULAS[subject];
  const subjectInfo = SUBJECTS.find((s) => s.key === subject)!;

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, { backgroundColor: subjectInfo.color }]}>
        <Text style={styles.headerEmoji}>{subjectInfo.emoji}</Text>
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
            <Text style={styles.subjectBtnEmoji}>{s.emoji}</Text>
            <Text style={[styles.subjectBtnText, subject === s.key && styles.subjectBtnTextActive]}>
              {s.key}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        {sections.map((section) => (
          <View key={section.title} style={styles.section}>
            <Text style={[styles.sectionTitle, { color: subjectInfo.color }]}>{section.title}</Text>
            {section.intro && <Text style={styles.sectionIntro}>{section.intro}</Text>}
            {section.items.map((item, i) => (
              <View key={i} style={styles.formulaRow}>
                <View style={[styles.formulaLabel, { borderLeftColor: subjectInfo.color }]}>
                  <Text style={styles.formulaLabelText}>{item.label}</Text>
                </View>

                <View style={styles.formulaBox}>
                  <Text style={[styles.formulaText, { color: subjectInfo.color }]}>{item.formula}</Text>
                  {item.note && <Text style={styles.formulaNote}>{item.note}</Text>}
                </View>

                {item.explanation && (
                  <Text style={styles.explanation}>{item.explanation}</Text>
                )}

                {item.asciiFigure && (
                  <View style={styles.figureBox}>
                    <Text style={styles.figureLabel}>図解</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                      <Text style={styles.figureText}>{item.asciiFigure}</Text>
                    </ScrollView>
                  </View>
                )}

                {item.example && (
                  <View style={[styles.exampleBox, { borderLeftColor: subjectInfo.color }]}>
                    <Text style={styles.exampleQ}>
                      <Text style={[styles.exampleTag, { color: subjectInfo.color }]}>例題 </Text>
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
                    <Text style={[styles.checkTitle, { color: subjectInfo.color }]}>✓ チェックポイント</Text>
                    {item.checkpoints.map((cp, ci) => (
                      <View key={ci} style={styles.checkRow}>
                        <Text style={[styles.checkMark, { color: subjectInfo.color }]}>▸</Text>
                        <Text style={styles.checkText}>{cp}</Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>
        ))}
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
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
    borderBottomWidth: 1,
    borderBottomColor: '#E5EAF0',
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
    borderRadius: 10,
    backgroundColor: '#F0F3F7',
  },
  subjectBtnEmoji: { fontSize: 18 },
  subjectBtnText: { fontSize: 14, fontWeight: '700', color: '#666' },
  subjectBtnTextActive: { color: '#FFFFFF' },
  scroll: { flex: 1 },
  content: { padding: 16 },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
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
