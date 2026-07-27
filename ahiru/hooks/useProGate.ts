import { useCallback, useState } from 'react';
import { useSubscription } from './useSubscription';

export function useProGate(betaAccess = false) {
  const { isPro, loading, tier } = useSubscription();
  const effectiveIsPro = isPro || betaAccess;
  const [paywallVisible, setPaywallVisible] = useState(false);

  const requirePro = useCallback(
    (onGranted?: () => void) => {
      if (effectiveIsPro) {
        onGranted?.();
        return true;
      }
      // 課金状態の取得中は tier が初期値の 'free' のため、加入者にも
      // ペイウォールを出してしまう。判定が確定するまでは何もしない。
      if (loading) return false;
      setPaywallVisible(true);
      return false;
    },
    [effectiveIsPro, loading],
  );

  return {
    isPro: effectiveIsPro,
    loading,
    tier,
    paywallVisible,
    setPaywallVisible,
    requirePro,
  };
}
