import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Platform } from 'react-native';

type Props = { children: React.ReactNode };
type State = { error: Error | null };

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    if (__DEV__) {
      console.error('[ErrorBoundary]', error, info.componentStack);
    }
  }

  render() {
    if (this.state.error) {
      return (
        <SafeAreaView style={styles.safe}>
          <View style={styles.container}>
            <Text style={styles.emoji}>😢</Text>
            <Text style={styles.title}>エラーが発生しました</Text>
            <Text style={styles.message}>
              申し訳ありません。予期しないエラーが発生しました。
            </Text>
            {__DEV__ && (
              <Text style={styles.devError}>{this.state.error.message}</Text>
            )}
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.setState({ error: null })}
              activeOpacity={0.8}
            >
              <Text style={styles.btnText}>再試行する</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      );
    }
    return this.props.children;
  }
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#040C1C',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  emoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 12,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: '#7FA8CC',
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 32,
  },
  devError: {
    fontSize: 12,
    color: '#E74C3C',
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    backgroundColor: 'rgba(231,76,60,0.1)',
    padding: 12,
    borderRadius: 8,
    marginBottom: 24,
    textAlign: 'left',
  },
  btn: {
    backgroundColor: '#1565C0',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 14,
  },
  btnText: {
    fontSize: 17,
    fontWeight: '800',
    color: '#FFFFFF',
  },
});
