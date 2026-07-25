import React, { useState, useRef, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { chatEnglishConversation, type ConversationMessage } from '../../services/aiConversation';
import { levelColor, levelLabel, type VocabLevel } from '../../data/vocab-meta';

const LEVEL_OPTIONS: VocabLevel[] = ['eiken_pre2', 'eiken_2', 'eiken_1', 'toeic_800'];

const SCENARIOS = [
  { label: '自由な日常会話', value: undefined },
  { label: 'レストランで注文', value: 'レストランで料理を注文する場面' },
  { label: '空港・旅行', value: '空港でのチェックインや旅行中のやり取り' },
  { label: '友達との週末の予定', value: '友達と週末の予定について話す場面' },
  { label: '職場・面接', value: 'オフィスでの会話や面接のやり取り' },
];

// 白基調（ミニマル幾何）パレット。白カード＋暗色テキスト。
const D = {
  bg:           '#F7F8FB',
  card:         '#FFFFFF',
  cardBorder:   '#CBD2DE',
  gold:         '#A9821E',
  white:        '#0F1826',
  soft:         '#4A5A6B',
  muted:        '#8695AB',
  purpleBorder: 'rgba(112,72,224,0.35)',
  purpleText:   '#6A3FD0',
};

export default function ConversationScreen() {
  const router = useRouter();
  // AI英会話の有料判定（1日の回数上限）はサーバーが RevenueCat に問い合わせて行う。
  // クライアントから申告すると詐称できるため、ここでは加入状態を送らない。
  const [level, setLevel] = useState<VocabLevel>('eiken_2');
  const [scenario, setScenario] = useState<string | undefined>(undefined);
  const [messages, setMessages] = useState<ConversationMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<ScrollView>(null);

  const canSend = inputText.trim().length > 0 && !loading;

  const sendMessage = useCallback(async () => {
    if (!canSend) return;
    const text = inputText.trim();
    const userMsg: ConversationMessage = { role: 'user', content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInputText('');
    setLoading(true);

    try {
      const res = await chatEnglishConversation({
        message: text,
        history: messages,
        level,
        scenario,
      });
      setMessages([...newMessages, { role: 'assistant', content: res.reply }]);
      setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 100);
    } catch (err: any) {
      const msg = err?.message ?? 'エラーが発生しました。もう一度試してください。';
      Alert.alert('AIからの返信エラー', msg);
      setMessages(messages); // revert
    } finally {
      setLoading(false);
    }
  }, [canSend, inputText, messages, level, scenario]);

  const resetConversation = useCallback(() => {
    setMessages([]);
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Text style={styles.backBtnText}>‹ 戻る</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>🗣️ AI英会話練習</Text>
        <TouchableOpacity style={styles.resetBtn} onPress={resetConversation}>
          <Text style={styles.resetBtnText}>リセット</Text>
        </TouchableOpacity>
      </View>

      {/* レベル選択 */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.levelRow} contentContainerStyle={{ paddingHorizontal: 12 }}>
        {LEVEL_OPTIONS.map((lv) => {
          const lc = levelColor[lv];
          const active = level === lv;
          return (
            <TouchableOpacity
              key={lv}
              style={[
                styles.levelChip,
                active && { backgroundColor: lc.bg, borderColor: lc.border },
              ]}
              onPress={() => setLevel(lv)}
              disabled={messages.length > 0}
            >
              <Text style={[styles.levelChipText, active && { color: lc.text, fontWeight: '700' }]}>
                {levelLabel[lv]}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* シチュエーション選択 */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scenarioRow} contentContainerStyle={{ paddingHorizontal: 12 }}>
        {SCENARIOS.map((sc) => {
          const active = scenario === sc.value;
          return (
            <TouchableOpacity
              key={sc.label}
              style={[styles.scenarioChip, active && styles.scenarioChipActive]}
              onPress={() => setScenario(sc.value)}
              disabled={messages.length > 0}
            >
              <Text style={[styles.scenarioChipText, active && styles.scenarioChipTextActive]}>{sc.label}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={0}
      >
        <ScrollView
          ref={scrollRef}
          style={styles.messageList}
          contentContainerStyle={styles.messageListContent}
          keyboardShouldPersistTaps="handled"
        >
          {messages.length === 0 && (
            <View style={styles.emptyState}>
              <Text style={styles.emptyEmoji}>💬</Text>
              <Text style={styles.emptyTitle}>英語でメッセージを送ってみよう！</Text>
              <Text style={styles.emptyBody}>
                レベルとシチュエーションを選んで、{'\n'}
                AIとの英会話練習を始めましょう。{'\n'}
                文法・語彙のミスは優しく指摘してくれます。
              </Text>
            </View>
          )}
          {messages.map((msg, i) => (
            <View key={i} style={[styles.bubble, msg.role === 'user' ? styles.userBubble : styles.aiBubble]}>
              {msg.role === 'assistant' && <Text style={styles.aiLabel}>🗣️ AI</Text>}
              <Text style={[styles.bubbleText, msg.role === 'user' ? styles.userText : styles.aiText]}>
                {msg.content}
              </Text>
            </View>
          ))}
          {loading && (
            <View style={[styles.bubble, styles.aiBubble]}>
              <Text style={styles.aiLabel}>🗣️ AI</Text>
              <ActivityIndicator color={D.purpleText} style={{ marginTop: 4 }} />
            </View>
          )}
        </ScrollView>

        <View style={styles.inputArea}>
          <View style={styles.textRow}>
            <TextInput
              style={styles.textInput}
              value={inputText}
              onChangeText={setInputText}
              placeholder="英語でメッセージを入力..."
              placeholderTextColor={D.muted}
              multiline
              maxLength={1000}
            />
            <TouchableOpacity
              style={[styles.sendBtn, !canSend && styles.sendBtnDisabled]}
              onPress={sendMessage}
              disabled={!canSend}
            >
              {loading ? (
                <ActivityIndicator color="#040C1C" size="small" />
              ) : (
                <Text style={styles.sendBtnText}>送信</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: D.bg },
  flex: { flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: D.cardBorder },
  backBtn: { paddingVertical: 6, paddingRight: 10 },
  backBtnText: { color: D.soft, fontSize: 15 },
  headerTitle: { flex: 1, fontSize: 17, fontWeight: '800', color: D.gold, textAlign: 'center' },
  resetBtn: { paddingVertical: 6, paddingLeft: 10 },
  resetBtnText: { color: D.muted, fontSize: 13 },
  levelRow: { flexGrow: 0, marginTop: 10 },
  levelChip: { paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20, backgroundColor: D.card, borderWidth: 1, borderColor: D.cardBorder, marginRight: 8 },
  levelChipText: { fontSize: 12, color: D.muted },
  scenarioRow: { flexGrow: 0, marginTop: 8, marginBottom: 4 },
  scenarioChip: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 14, backgroundColor: D.card, borderWidth: 1, borderColor: D.cardBorder, marginRight: 8 },
  scenarioChipActive: { backgroundColor: 'rgba(160,100,220,0.15)', borderColor: D.purpleBorder },
  scenarioChipText: { fontSize: 12, color: D.muted },
  scenarioChipTextActive: { color: D.purpleText, fontWeight: '700' },
  messageList: { flex: 1 },
  messageListContent: { padding: 16, gap: 12 },
  emptyState: { alignItems: 'center', paddingTop: 40, paddingHorizontal: 24 },
  emptyEmoji: { fontSize: 56, marginBottom: 16 },
  emptyTitle: { fontSize: 18, fontWeight: '800', color: D.white, marginBottom: 8, textAlign: 'center' },
  emptyBody: { fontSize: 14, color: D.soft, textAlign: 'center', lineHeight: 22 },
  bubble: { maxWidth: '85%', borderRadius: 16, padding: 14 },
  userBubble: { alignSelf: 'flex-end', backgroundColor: 'rgba(160,100,220,0.22)', borderWidth: 1, borderColor: D.purpleBorder },
  aiBubble: { alignSelf: 'flex-start', backgroundColor: D.card, borderWidth: 1, borderColor: D.cardBorder },
  aiLabel: { fontSize: 11, fontWeight: '700', color: D.muted, marginBottom: 4 },
  bubbleText: { fontSize: 15, lineHeight: 22 },
  userText: { color: D.white, fontWeight: '500' },
  aiText: { color: D.white },
  inputArea: { borderTopWidth: 1, borderTopColor: D.cardBorder, padding: 12 },
  textRow: { flexDirection: 'row', gap: 8, alignItems: 'flex-end' },
  textInput: { flex: 1, borderWidth: 1, borderColor: D.cardBorder, borderRadius: 12, padding: 10, fontSize: 15, color: D.white, maxHeight: 100, backgroundColor: D.card },
  sendBtn: { backgroundColor: D.gold, paddingHorizontal: 18, paddingVertical: 12, borderRadius: 12, justifyContent: 'center' },
  sendBtnDisabled: { opacity: 0.4 },
  sendBtnText: { color: '#040C1C', fontSize: 15, fontWeight: '800' },
});
