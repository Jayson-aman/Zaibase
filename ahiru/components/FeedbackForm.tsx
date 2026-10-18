import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { subjectInfo, type SubjectKey } from '../data/questions-meta';
import {
  sendFeedback,
  FEEDBACK_CATEGORIES,
  type FeedbackCategory,
  type FeedbackContext,
} from '../services/feedback';

const SUBJECTS: SubjectKey[] = ['sansu', 'kokugo', 'rika', 'shakai', 'eigo'];

type Props = {
  /** 単元・マンガから開いた場合は科目・受験種別・単元があらかじめ分かっているので選択肢を出さない */
  subject?: SubjectKey;
  examType?: 'chugaku' | 'koko';
  context?: FeedbackContext;
  /** true の場合、選択肢（科目・受験種別）を出さず全科目共通の「その他の意見」として送る */
  compact?: boolean;
  onDone?: () => void;
};

export default function FeedbackForm({ subject, examType, context, compact, onDone }: Props) {
  const [category, setCategory] = useState<FeedbackCategory | null>(null);
  const [comment, setComment] = useState('');
  const [pickedSubject, setPickedSubject] = useState<SubjectKey | 'all'>(subject ?? 'all');
  const [pickedExamType, setPickedExamType] = useState<'chugaku' | 'koko' | undefined>(examType);
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<'sent' | 'saved' | null>(null);

  const needsSubjectPicker = subject == null;
  const needsExamTypePicker = examType == null;

  async function handleSubmit() {
    if (category == null || sending) return;
    setSending(true);
    try {
      const { sent } = await sendFeedback({
        category,
        comment: comment.trim() === '' ? undefined : comment.trim(),
        subject: pickedSubject,
        examType: pickedExamType,
        context,
      });
      setResult(sent ? 'sent' : 'saved');
    } finally {
      setSending(false);
    }
  }

  if (result != null) {
    return (
      <View style={styles.doneBox}>
        <Text style={styles.doneEmoji}>{result === 'sent' ? '🎉' : '📝'}</Text>
        <Text style={styles.doneText}>
          {result === 'sent'
            ? 'ありがとう！お家の人に届きました。'
            : '記録しました。次に開いた時に送信します。'}
        </Text>
        {onDone != null && (
          <TouchableOpacity style={styles.doneBtn} onPress={onDone} activeOpacity={0.8}>
            <Text style={styles.doneBtnText}>閉じる</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📮 感想・要望を送る</Text>
      <Text style={styles.subtitle}>わからない・こうしてほしい、なんでも教えてね</Text>

      <View style={styles.chipRow}>
        {FEEDBACK_CATEGORIES.map((c) => (
          <TouchableOpacity
            key={c}
            style={[styles.chip, category === c && styles.chipActive]}
            onPress={() => setCategory(c)}
            activeOpacity={0.85}
          >
            <Text style={[styles.chipText, category === c && styles.chipTextActive]}>{c}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {!compact && needsSubjectPicker && (
        <>
          <Text style={styles.fieldLabel}>科目</Text>
          <View style={styles.chipRow}>
            <TouchableOpacity
              style={[styles.chip, pickedSubject === 'all' && styles.chipActive]}
              onPress={() => setPickedSubject('all')}
              activeOpacity={0.85}
            >
              <Text style={[styles.chipText, pickedSubject === 'all' && styles.chipTextActive]}>
                全科目
              </Text>
            </TouchableOpacity>
            {SUBJECTS.map((s) => (
              <TouchableOpacity
                key={s}
                style={[styles.chip, pickedSubject === s && styles.chipActive]}
                onPress={() => setPickedSubject(s)}
                activeOpacity={0.85}
              >
                <Text style={[styles.chipText, pickedSubject === s && styles.chipTextActive]}>
                  {subjectInfo[s].emoji} {subjectInfo[s].name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}

      {!compact && needsExamTypePicker && (
        <>
          <Text style={styles.fieldLabel}>受験の種類</Text>
          <View style={styles.chipRow}>
            <TouchableOpacity
              style={[styles.chip, pickedExamType === 'chugaku' && styles.chipActive]}
              onPress={() => setPickedExamType('chugaku')}
              activeOpacity={0.85}
            >
              <Text style={[styles.chipText, pickedExamType === 'chugaku' && styles.chipTextActive]}>
                中学受験
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.chip, pickedExamType === 'koko' && styles.chipActive]}
              onPress={() => setPickedExamType('koko')}
              activeOpacity={0.85}
            >
              <Text style={[styles.chipText, pickedExamType === 'koko' && styles.chipTextActive]}>
                高校受験
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      <TextInput
        style={styles.input}
        placeholder="くわしく書きたいときはここに（自由入力・空欄でもOK）"
        placeholderTextColor="#B0A692"
        value={comment}
        onChangeText={setComment}
        multiline
        maxLength={1000}
      />

      <TouchableOpacity
        style={[styles.submitBtn, (category == null || sending) && styles.submitBtnDisabled]}
        onPress={handleSubmit}
        disabled={category == null || sending}
        activeOpacity={0.85}
      >
        {sending ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={styles.submitBtnText}>送信する</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAF6EF',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E8DCC8',
  },
  title: { fontSize: 15, fontWeight: '800', color: '#8B5A38', marginBottom: 2 },
  subtitle: { fontSize: 12, color: '#9C9186', marginBottom: 12 },
  fieldLabel: { fontSize: 12, fontWeight: '700', color: '#8B5A38', marginTop: 4, marginBottom: 6 },
  chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 4 },
  chip: {
    borderWidth: 1.5,
    borderColor: '#E8DCC8',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: '#FFFFFF',
  },
  chipActive: { backgroundColor: '#B5622E', borderColor: '#B5622E' },
  chipText: { fontSize: 13, fontWeight: '700', color: '#6E645C' },
  chipTextActive: { color: '#FFFFFF' },
  input: {
    marginTop: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E8DCC8',
    padding: 12,
    minHeight: 70,
    fontSize: 14,
    color: '#2B2420',
    textAlignVertical: 'top',
  },
  submitBtn: {
    marginTop: 14,
    backgroundColor: '#B5622E',
    borderRadius: 12,
    paddingVertical: 13,
    alignItems: 'center',
  },
  submitBtnDisabled: { opacity: 0.4 },
  submitBtnText: { color: '#FFFFFF', fontWeight: '800', fontSize: 14.5 },
  doneBox: { backgroundColor: '#FAF6EF', borderRadius: 14, padding: 20, alignItems: 'center', borderWidth: 1, borderColor: '#E8DCC8' },
  doneEmoji: { fontSize: 32, marginBottom: 8 },
  doneText: { fontSize: 14.5, fontWeight: '700', color: '#3A2D22', textAlign: 'center', lineHeight: 21 },
  doneBtn: { marginTop: 14, paddingVertical: 8, paddingHorizontal: 20, borderRadius: 10, backgroundColor: '#EFE7D8' },
  doneBtnText: { fontSize: 13, fontWeight: '700', color: '#8B5A38' },
});
