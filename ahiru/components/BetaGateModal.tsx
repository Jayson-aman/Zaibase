import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

interface Props {
  visible: boolean;
  onClose: () => void;
  onUnlocked: () => void;
  unlock: (code: string) => Promise<boolean>;
}

export default function BetaGateModal({ visible, onClose, onUnlocked, unlock }: Props) {
  const [showInput, setShowInput] = useState(false);
  const [code, setCode] = useState('');
  const [checking, setChecking] = useState(false);

  async function handleSubmit() {
    if (!code.trim()) return;
    setChecking(true);
    try {
      const ok = await unlock(code);
      if (ok) {
        setCode('');
        setShowInput(false);
        onUnlocked();
      } else {
        Alert.alert('コードが違います', '入力したコードが正しくありません。');
      }
    } finally {
      setChecking(false);
    }
  }

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <KeyboardAvoidingView
        style={styles.overlay}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.card}>
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.closeBtnText}>✕</Text>
          </TouchableOpacity>

          <Text style={styles.icon}>🚧</Text>
          <Text style={styles.title}>プレミアム機能 準備中</Text>
          <Text style={styles.body}>
            現在ベータテスト期間中のため、{'\n'}
            プレミアムプランは一般公開しておりません。{'\n\n'}
            近日公開予定です。
          </Text>

          {!showInput ? (
            <TouchableOpacity style={styles.codeLink} onPress={() => setShowInput(true)}>
              <Text style={styles.codeLinkText}>ベータコードをお持ちの方</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.inputArea}>
              <TextInput
                style={styles.input}
                placeholder="ベータコードを入力"
                placeholderTextColor="rgba(255,255,255,0.3)"
                value={code}
                onChangeText={setCode}
                autoCapitalize="characters"
                autoCorrect={false}
                onSubmitEditing={handleSubmit}
              />
              <TouchableOpacity
                style={[styles.submitBtn, checking && { opacity: 0.5 }]}
                onPress={handleSubmit}
                disabled={checking}
              >
                {checking ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text style={styles.submitBtnText}>確認</Text>
                )}
              </TouchableOpacity>
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#1A1A2E',
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  closeBtn: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeBtnText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  icon: { fontSize: 56, marginBottom: 16 },
  title: {
    fontSize: 24,
    fontWeight: '900',
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
  },
  body: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.6)',
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 24,
  },
  codeLink: { paddingVertical: 8 },
  codeLinkText: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.35)',
    textDecorationLine: 'underline',
  },
  inputArea: { width: '100%', gap: 12 },
  input: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 18,
    color: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
    letterSpacing: 2,
  },
  submitBtn: {
    backgroundColor: '#7D3C98',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  submitBtnText: { fontSize: 18, fontWeight: '800', color: '#fff' },
});
