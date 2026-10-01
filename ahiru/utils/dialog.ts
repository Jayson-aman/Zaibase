import { Alert, Platform } from 'react-native';

/**
 * 「はい／いいえ」の確認。react-native-web の Alert.alert は何もしない（空の関数）ので、
 * Web版では window.confirm を使う。使わないと、Web版の購入ボタンが何も起きなくなる。
 */
export function confirmDialog(title: string, message: string): Promise<boolean> {
  if (Platform.OS === 'web') {
    try {
      return Promise.resolve(window.confirm(`${title}\n\n${message}`));
    } catch {
      return Promise.resolve(true);
    }
  }
  return new Promise((resolve) => {
    Alert.alert(
      title,
      message,
      [
        { text: 'やめる', style: 'cancel', onPress: () => resolve(false) },
        { text: '購入へ進む', onPress: () => resolve(true) },
      ],
      { cancelable: true, onDismiss: () => resolve(false) },
    );
  });
}

/** お知らせ（OKだけ）。Web版では window.alert を使う。 */
export function noticeDialog(title: string, message: string): void {
  if (Platform.OS === 'web') {
    try {
      window.alert(`${title}\n\n${message}`);
    } catch {
      // 表示できなくても処理は続ける
    }
    return;
  }
  Alert.alert(title, message);
}
