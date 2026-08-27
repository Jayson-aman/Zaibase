import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { signInEmail, signUpEmail, sendResetEmail, AuthError } from '../services/auth';

export default function LoginScreen() {
  // 直接このURLを開いた場合は戻り先が無く router.back() が無反応になるため、
  // その場合はホームへ逃がす。
  function safeBack() {
    if (router.canGoBack()) router.back();
    else router.replace('/');
  }
  const router = useRouter();
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const isSignup = mode === 'signup';

  async function submit() {
    setError(null);
    setNotice(null);
    if (!email.trim() || !password) {
      setError('メールアドレスとパスワードを入力してください。');
      return;
    }
    setBusy(true);
    try {
      if (isSignup) await signUpEmail(email, password);
      else await signInEmail(email, password);
      safeBack();
    } catch (e) {
      setError(e instanceof AuthError ? e.message : 'エラーが発生しました。');
    } finally {
      setBusy(false);
    }
  }

  async function reset() {
    setError(null);
    setNotice(null);
    if (!email.trim()) {
      setError('パスワード再設定にはメールアドレスを入力してください。');
      return;
    }
    setBusy(true);
    try {
      await sendResetEmail(email);
      setNotice('パスワード再設定メールを送信しました。受信箱をご確認ください。');
    } catch (e) {
      setError(e instanceof AuthError ? e.message : 'エラーが発生しました。');
    } finally {
      setBusy(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
          <TouchableOpacity onPress={() => safeBack()} style={styles.closeBtn}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>

          <Text style={styles.logo}>🎓</Text>
          <Text style={styles.title}>{isSignup ? 'アカウント作成' : 'ログイン'}</Text>
          <Text style={styles.subtitle}>
            アカウントでログインすると、学習の記録やご購入内容を引き継げます。
          </Text>

          <TextInput
            style={styles.input}
            placeholder="メールアドレス"
            placeholderTextColor="#9C9186"
            autoCapitalize="none"
            keyboardType="email-address"
            autoComplete="email"
            value={email}
            onChangeText={setEmail}
            editable={!busy}
          />
          <TextInput
            style={styles.input}
            placeholder="パスワード（6文字以上）"
            placeholderTextColor="#9C9186"
            secureTextEntry
            autoComplete={isSignup ? 'new-password' : 'current-password'}
            value={password}
            onChangeText={setPassword}
            editable={!busy}
          />

          {error != null && <Text style={styles.error}>{error}</Text>}
          {notice != null && <Text style={styles.notice}>{notice}</Text>}

          <TouchableOpacity style={styles.primaryBtn} onPress={submit} disabled={busy} activeOpacity={0.85}>
            {busy ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.primaryBtnText}>{isSignup ? '登録する' : 'ログイン'}</Text>
            )}
          </TouchableOpacity>

          {!isSignup && (
            <TouchableOpacity onPress={reset} disabled={busy} style={styles.linkBtn}>
              <Text style={styles.linkText}>パスワードを忘れた方</Text>
            </TouchableOpacity>
          )}

          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>
              {isSignup ? 'すでにアカウントをお持ちですか？' : 'アカウントをお持ちでないですか？'}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setMode(isSignup ? 'signin' : 'signup');
                setError(null);
                setNotice(null);
              }}
              disabled={busy}
            >
              <Text style={styles.switchAction}>{isSignup ? 'ログイン' : '新規登録'}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF6EF' },
  scroll: { padding: 24, paddingTop: 12, alignItems: 'center' },
  closeBtn: { alignSelf: 'flex-end', padding: 8 },
  closeText: { fontSize: 22, color: '#6E645C', fontWeight: '600' },
  logo: { fontSize: 52, marginTop: 8 },
  title: { fontSize: 26, fontWeight: '800', color: '#2B2420', marginTop: 8 },
  subtitle: { fontSize: 14, color: '#6E645C', textAlign: 'center', marginTop: 10, lineHeight: 21 },
  infoBox: {
    backgroundColor: '#F5EFE4',
    borderRadius: 12,
    padding: 14,
    marginTop: 18,
    marginBottom: 6,
    alignSelf: 'stretch',
  },
  infoText: { fontSize: 13, color: '#2B2420', lineHeight: 20 },
  input: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E8DCC8',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#2B2420',
    marginTop: 12,
  },
  error: { color: '#DC2626', fontSize: 14, marginTop: 12, alignSelf: 'stretch' },
  notice: { color: '#059669', fontSize: 14, marginTop: 12, alignSelf: 'stretch' },
  primaryBtn: {
    alignSelf: 'stretch',
    backgroundColor: '#B5622E',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  primaryBtnText: { color: '#fff', fontSize: 17, fontWeight: '700' },
  linkBtn: { marginTop: 16, padding: 4 },
  linkText: { color: '#8B5A38', fontSize: 14, fontWeight: '600' },
  switchRow: { flexDirection: 'row', alignItems: 'center', marginTop: 28, flexWrap: 'wrap', justifyContent: 'center' },
  switchLabel: { color: '#6E645C', fontSize: 14 },
  switchAction: { color: '#B5622E', fontSize: 14, fontWeight: '800', marginLeft: 6 },
});
