import React from 'react';
import { router } from 'expo-router';
import Paywall from '../components/Paywall';

// 学校別画面などから router.push('/paywall') で開くための画面ルート。
// 他の画面（クイズ・教科書・コーチ等）は Paywall を Modal コンポーネントとして
// 直接埋め込んでいるが、学校別画面はルート遷移で開くためこのルートが必要。
export default function PaywallScreen() {
  // 直接このURLを開いた場合（共有リンク・ブラウザの再読込など）は戻り先が無く、
  // router.back() が何も起きずに閉じられなくなる。その場合はホームへ逃がす。
  function close() {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/');
    }
  }

  return <Paywall visible onClose={close} onPurchased={close} />;
}
