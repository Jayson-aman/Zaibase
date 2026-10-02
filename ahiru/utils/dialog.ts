import { Alert, Platform } from 'react-native';

/**
 * 「はい／いいえ」の確認。react-native-web の Alert.alert は何もしない（空の関数）ので、
 * Web版では window.confirm を使う。使わないと、Web版の購入ボタンが何も起きなくなる。
 */
export function confirmDialog(
  title: string,
  message: string,
  labels?: { confirm?: string; cancel?: string },
): Promise<boolean> {
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
        { text: labels?.cancel ?? 'やめる', style: 'cancel', onPress: () => resolve(false) },
        { text: labels?.confirm ?? '購入へ進む', onPress: () => resolve(true) },
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

/**
 * 買い切りの購入の前に、ログイン（無料のアカウント登録）を求める。
 * 購入をアカウントに結びつけておかないと、再インストールや機種変更で解放が消えてしまう。
 * 返り値は「このまま購入に進んでよいか」。ログインしていなければ、案内を出して false を返す。
 */
export async function ensureLoggedInForPurchase(
  isLoggedIn: boolean,
  goLogin: () => void,
): Promise<boolean> {
  if (isLoggedIn) return true;
  const go = await confirmDialog(
    'ログインが必要です',
    '買い切りの購入は、アカウントに保存されます。再インストールや機種変更のときも、解放した内容を引き継げます。\n\n無料のアカウント登録（メールアドレス）をしてから、もう一度お試しください。',
    { confirm: 'ログインへ', cancel: 'あとで' },
  );
  if (go) goLogin();
  return false;
}

type AlertButton = { text?: string; style?: 'default' | 'cancel' | 'destructive'; onPress?: () => void | Promise<void> };

/**
 * Alert.alert の置きかえ。react-native-web の Alert.alert は何もしないので、Web版では
 * ボタンが2つ以上なら window.confirm、1つ以下なら window.alert にする。
 * （ログアウト・アカウント削除・リセット・エラー通知が、Webで無反応になっていた）
 */
export function alertCompat(title: string, message?: string, buttons?: AlertButton[]): void {
  if (Platform.OS !== 'web') {
    Alert.alert(title, message, buttons);
    return;
  }
  const text = message ? `${title}\n\n${message}` : title;
  const action = buttons?.find((b) => b.style !== 'cancel');
  const cancel = buttons?.find((b) => b.style === 'cancel');
  try {
    if (buttons && buttons.length > 1) {
      if (window.confirm(text)) void action?.onPress?.();
      else void cancel?.onPress?.();
    } else {
      window.alert(text);
      void buttons?.[0]?.onPress?.();
    }
  } catch {
    // 表示できなくても処理は続ける
  }
}
