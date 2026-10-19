import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { logPurchaseEvent } from '../services/analytics';
import { sendFeedback } from '../services/feedback';
import { useSubscription } from '../hooks/useSubscription';

// 解約・期限切れの人に、やめた理由を1タップで聞く。
// 解約の理由はストアからは分からない（2026/10/19。解約者3人が出て、理由を知る手段が無かった）。
//
// 保存先：選んだ理由は accessEvents（event='cancel_reason'、mode='subscription'、examType=理由コード）。
// 新しいコレクションを作ると firestore.rules の再デプロイが要るので、既存の許可リストに収まる形にした。
// 自由記入は、書いたときだけ既存の sendFeedback で送る（無理に書かせない）。
export const CANCEL_REASONS = [
  { code: 'habit', label: '毎日続ける時間・習慣がつくれなかった' },
  { code: 'price', label: '料金が高いと感じた' },
  { code: 'hard', label: '内容がむずかしい、または合わなかった' },
  { code: 'done', label: '試験や目的が終わった' },
  { code: 'other_app', label: '塾やほかのアプリで足りた' },
  { code: 'other', label: 'その他' },
] as const;

export default function CancelSurvey({ onDone }: { onDone?: () => void }) {
  const { tier } = useSubscription();
  const [code, setCode] = useState<string | null>(null);
  const [comment, setComment] = useState('');
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  async function submit() {
    if (code == null || sending) return;
    setSending(true);
    try {
      logPurchaseEvent('cancel_reason', 'subscription', { tier: tier === 'free' ? 'free' : tier, detail: code });
      const text = comment.trim();
      if (text !== '') {
        const label = CANCEL_REASONS.find((r) => r.code === code)?.label ?? code;
        await sendFeedback({ category: 'その他の意見・要望', comment: `【解約の理由：${label}】${text}`, subject: 'all' });
      }
      setDone(true);
    } finally {
      setSending(false);
    }
  }

  if (done) {
    return (
      <View style={styles.box}>
        <Text style={styles.title}>ありがとうございました</Text>
        <Text style={styles.body}>いただいた声は、これからの改善に使います。</Text>
        {onDone != null && (
          <TouchableOpacity style={styles.sendBtn} onPress={onDone} activeOpacity={0.85}>
            <Text style={styles.sendText}>とじる</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  return (
    <View style={styles.box}>
      <Text style={styles.title}>やめた一番の理由を、教えてください</Text>
      <Text style={styles.body}>1つ選ぶだけです。ご家庭を特定するものではありません。</Text>
      {CANCEL_REASONS.map((r) => (
        <TouchableOpacity
          key={r.code}
          style={[styles.choice, code === r.code && styles.choiceOn]}
          onPress={() => setCode(r.code)}
          activeOpacity={0.8}
          accessibilityRole="radio"
          accessibilityState={{ selected: code === r.code }}
        >
          <Text style={[styles.choiceText, code === r.code && styles.choiceTextOn]}>{r.label}</Text>
        </TouchableOpacity>
      ))}
      {code != null && (
        <TextInput
          style={styles.input}
          value={comment}
          onChangeText={setComment}
          placeholder="よければ、くわしく教えてください（任意）"
          multiline
          maxLength={400}
        />
      )}
      <TouchableOpacity
        style={[styles.sendBtn, (code == null || sending) && styles.sendBtnOff]}
        onPress={submit}
        disabled={code == null || sending}
        activeOpacity={0.85}
      >
        {sending ? <ActivityIndicator color="#fff" /> : <Text style={styles.sendText}>送信する</Text>}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { backgroundColor: '#fff', borderRadius: 14, padding: 16, borderWidth: 1.5, borderColor: '#E8DCCB' },
  title: { fontSize: 16, fontWeight: '800', color: '#4A3320' },
  body: { fontSize: 13, lineHeight: 20, color: '#6B5A48', marginTop: 4, marginBottom: 10 },
  choice: { borderWidth: 1.5, borderColor: '#E0D4C2', borderRadius: 12, paddingVertical: 12, paddingHorizontal: 14, marginTop: 8, backgroundColor: '#FAF7F2' },
  choiceOn: { borderColor: '#B5622E', backgroundColor: '#FFF1E6' },
  choiceText: { fontSize: 14, color: '#4A3320' },
  choiceTextOn: { fontWeight: '800', color: '#8A3F12' },
  input: { marginTop: 12, minHeight: 72, borderWidth: 1.5, borderColor: '#E0D4C2', borderRadius: 12, padding: 12, fontSize: 14, textAlignVertical: 'top', backgroundColor: '#fff' },
  sendBtn: { marginTop: 14, backgroundColor: '#B5622E', borderRadius: 24, paddingVertical: 12, alignItems: 'center' },
  sendBtnOff: { opacity: 0.4 },
  sendText: { color: '#fff', fontSize: 15, fontWeight: '800' },
});
