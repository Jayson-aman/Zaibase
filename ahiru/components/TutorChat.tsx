import React, { useState, useRef, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Modal,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { askTutor, type TutorMessage } from '../services/aiTutor';

const TURN_LIMIT = 5;
const SESSION_LIMIT = 15;

interface Props {
  visible: boolean;
  onClose: () => void;
  /** 問題文（クイズの問題を初期テキストとして渡す） */
  initialQuestion?: string;
  subjectColor?: string;
}

function generateSessionId() {
  return `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

export default function TutorChat({ visible, onClose, initialQuestion, subjectColor = '#0EA5E9' }: Props) {
  const [messages, setMessages] = useState<TutorMessage[]>([]);
  const [inputText, setInputText] = useState(initialQuestion ?? '');
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [turnCount, setTurnCount] = useState(0);
  const [sessionId] = useState(generateSessionId);
  const [isNewSession, setIsNewSession] = useState(true);
  const scrollRef = useRef<ScrollView>(null);

  const canSend = (inputText.trim().length > 0 || imageBase64 != null) && !loading && turnCount < TURN_LIMIT;
  const turnsLeft = TURN_LIMIT - turnCount;

  const pickImage = useCallback(async () => {
    try {
      const { launchImageLibraryAsync, requestMediaLibraryPermissionsAsync, MediaTypeOptions } =
        await import('expo-image-picker');
      const { status } = await requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('権限が必要です', '写真を使うには「写真へのアクセス」を許可してください。');
        return;
      }
      const result = await launchImageLibraryAsync({
        mediaTypes: MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 0.6,
        base64: true,
      });
      if (!result.canceled && result.assets[0]) {
        setImageUri(result.assets[0].uri);
        setImageBase64(result.assets[0].base64 ?? null);
      }
    } catch {
      Alert.alert('エラー', '画像の読み込みに失敗しました。');
    }
  }, []);

  const takePhoto = useCallback(async () => {
    try {
      const { launchCameraAsync, requestCameraPermissionsAsync, MediaTypeOptions } =
        await import('expo-image-picker');
      const { status } = await requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('権限が必要です', 'カメラを使うには「カメラへのアクセス」を許可してください。');
        return;
      }
      const result = await launchCameraAsync({
        mediaTypes: MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 0.6,
        base64: true,
      });
      if (!result.canceled && result.assets[0]) {
        setImageUri(result.assets[0].uri);
        setImageBase64(result.assets[0].base64 ?? null);
      }
    } catch {
      Alert.alert('エラー', 'カメラの起動に失敗しました。');
    }
  }, []);

  const sendMessage = useCallback(async () => {
    if (!canSend) return;
    const text = inputText.trim();
    const img = imageBase64;

    const userMsg: TutorMessage = { role: 'user', content: text || '（画像を送りました）' };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInputText('');
    setImageUri(null);
    setImageBase64(null);
    setLoading(true);

    try {
      const res = await askTutor({
        imageBase64: img ?? undefined,
        questionText: text || undefined,
        history: messages,
        sessionId,
        isNewSession,
      });

      setMessages([...newMessages, { role: 'assistant', content: res.answer }]);
      setTurnCount(res.turnCount);
      setIsNewSession(false);

      setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 100);
    } catch (err: any) {
      const msg = err?.message ?? 'エラーが発生しました。もう一度試してね。';
      Alert.alert('AIからの返信エラー', msg);
      setMessages(messages); // revert
    } finally {
      setLoading(false);
    }
  }, [canSend, inputText, imageBase64, messages, sessionId, isNewSession]);

  const handleClose = useCallback(() => {
    setMessages([]);
    setInputText(initialQuestion ?? '');
    setImageUri(null);
    setImageBase64(null);
    setTurnCount(0);
    setIsNewSession(true);
    onClose();
  }, [initialQuestion, onClose]);

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet" onRequestClose={handleClose}>
      <View style={styles.container}>
        {/* ヘッダー */}
        <LinearGradient colors={[subjectColor, '#0369A1']} style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>🤖 AI個別指導</Text>
            <Text style={styles.headerSub}>
              この問題について聞く（残り{turnsLeft}回）
            </Text>
          </View>
          <TouchableOpacity style={styles.closeBtn} onPress={handleClose}>
            <Text style={styles.closeBtnText}>✕</Text>
          </TouchableOpacity>
        </LinearGradient>

        <KeyboardAvoidingView
          style={styles.flex}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={0}
        >
          {/* メッセージ一覧 */}
          <ScrollView
            ref={scrollRef}
            style={styles.messageList}
            contentContainerStyle={styles.messageListContent}
            keyboardShouldPersistTaps="handled"
          >
            {messages.length === 0 && (
              <View style={styles.emptyState}>
                <Text style={styles.emptyEmoji}>📚</Text>
                <Text style={styles.emptyTitle}>わからないところを聞いてみよう！</Text>
                <Text style={styles.emptyBody}>
                  問題の写真を撮るか、「ここがわからない」と入力してね。{'\n'}
                  一緒に考えるよ😊
                </Text>
              </View>
            )}
            {messages.map((msg, i) => (
              <View key={i} style={[styles.bubble, msg.role === 'user' ? styles.userBubble : styles.aiBubble]}>
                {msg.role === 'assistant' && (
                  <Text style={styles.aiLabel}>🤖 AI先生</Text>
                )}
                <Text style={[styles.bubbleText, msg.role === 'user' ? styles.userText : styles.aiText]}>
                  {msg.content}
                </Text>
              </View>
            ))}
            {loading && (
              <View style={[styles.bubble, styles.aiBubble]}>
                <Text style={styles.aiLabel}>🤖 AI先生</Text>
                <ActivityIndicator color={subjectColor} style={{ marginTop: 4 }} />
              </View>
            )}
            {turnCount >= TURN_LIMIT && (
              <View style={styles.limitBanner}>
                <Text style={styles.limitText}>
                  💡 5回質問しました！先生や塾の先生に聞いてみると{'\n'}もっとわかりやすく教えてくれるかも😊
                </Text>
              </View>
            )}
          </ScrollView>

          {/* 入力エリア */}
          {turnCount < TURN_LIMIT && (
            <View style={styles.inputArea}>
              {/* 画像プレビュー */}
              {imageUri && (
                <View style={styles.imagePreview}>
                  <Image source={{ uri: imageUri }} style={styles.previewImg} />
                  <TouchableOpacity style={styles.removeImg} onPress={() => { setImageUri(null); setImageBase64(null); }}>
                    <Text style={styles.removeImgText}>✕</Text>
                  </TouchableOpacity>
                </View>
              )}

              {/* カメラ・ライブラリボタン */}
              <View style={styles.photoButtons}>
                <TouchableOpacity style={styles.photoBtn} onPress={takePhoto}>
                  <Text style={styles.photoBtnText}>📷 撮影</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.photoBtn} onPress={pickImage}>
                  <Text style={styles.photoBtnText}>🖼️ 画像を選ぶ</Text>
                </TouchableOpacity>
              </View>

              {/* テキスト入力 */}
              <View style={styles.textRow}>
                <TextInput
                  style={styles.textInput}
                  value={inputText}
                  onChangeText={setInputText}
                  placeholder="ここがわからない…と入力"
                  placeholderTextColor="#94A3B8"
                  multiline
                  maxLength={500}
                  returnKeyType="default"
                />
                <TouchableOpacity
                  style={[styles.sendBtn, { backgroundColor: subjectColor }, !canSend && styles.sendBtnDisabled]}
                  onPress={sendMessage}
                  disabled={!canSend}
                >
                  {loading ? (
                    <ActivityIndicator color="#fff" size="small" />
                  ) : (
                    <Text style={styles.sendBtnText}>送信</Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          )}
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  flex: { flex: 1 },
  header: { paddingTop: 56, paddingBottom: 16, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'flex-end' },
  headerContent: { flex: 1 },
  headerTitle: { fontSize: 22, fontWeight: '800', color: '#fff' },
  headerSub: { fontSize: 14, color: 'rgba(255,255,255,0.8)', marginTop: 2 },
  closeBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.2)', alignItems: 'center', justifyContent: 'center' },
  closeBtnText: { color: '#fff', fontSize: 18, fontWeight: '700' },
  messageList: { flex: 1 },
  messageListContent: { padding: 16, gap: 12 },
  emptyState: { alignItems: 'center', paddingTop: 40, paddingHorizontal: 24 },
  emptyEmoji: { fontSize: 56, marginBottom: 16 },
  emptyTitle: { fontSize: 20, fontWeight: '800', color: '#1E293B', marginBottom: 8, textAlign: 'center' },
  emptyBody: { fontSize: 15, color: '#64748B', textAlign: 'center', lineHeight: 24 },
  bubble: { maxWidth: '85%', borderRadius: 16, padding: 14 },
  userBubble: { alignSelf: 'flex-end', backgroundColor: '#0EA5E9' },
  aiBubble: { alignSelf: 'flex-start', backgroundColor: '#fff', borderWidth: 1, borderColor: '#E2E8F0' },
  aiLabel: { fontSize: 12, fontWeight: '700', color: '#64748B', marginBottom: 4 },
  bubbleText: { fontSize: 15, lineHeight: 22 },
  userText: { color: '#fff', fontWeight: '500' },
  aiText: { color: '#1E293B' },
  limitBanner: { backgroundColor: '#FEF3C7', borderRadius: 14, padding: 14, marginTop: 8 },
  limitText: { fontSize: 14, color: '#92400E', lineHeight: 22, textAlign: 'center' },
  inputArea: { backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#E2E8F0', padding: 12, gap: 8 },
  imagePreview: { position: 'relative', alignSelf: 'flex-start' },
  previewImg: { width: 80, height: 80, borderRadius: 10 },
  removeImg: { position: 'absolute', top: -6, right: -6, width: 22, height: 22, borderRadius: 11, backgroundColor: '#EF4444', alignItems: 'center', justifyContent: 'center' },
  removeImgText: { color: '#fff', fontSize: 12, fontWeight: '700' },
  photoButtons: { flexDirection: 'row', gap: 8 },
  photoBtn: { flex: 1, borderWidth: 1, borderColor: '#CBD5E1', borderRadius: 10, paddingVertical: 8, alignItems: 'center' },
  photoBtnText: { fontSize: 14, color: '#475569', fontWeight: '600' },
  textRow: { flexDirection: 'row', gap: 8, alignItems: 'flex-end' },
  textInput: { flex: 1, borderWidth: 1, borderColor: '#CBD5E1', borderRadius: 12, padding: 10, fontSize: 15, color: '#1E293B', maxHeight: 100, backgroundColor: '#F8FAFC' },
  sendBtn: { paddingHorizontal: 18, paddingVertical: 12, borderRadius: 12, justifyContent: 'center' },
  sendBtnDisabled: { opacity: 0.4 },
  sendBtnText: { color: '#fff', fontSize: 16, fontWeight: '800' },
});
