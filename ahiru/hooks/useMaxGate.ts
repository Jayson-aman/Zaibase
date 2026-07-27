import { useCallback, useState } from 'react';
import { useSubscription } from './useSubscription';

export function useMaxGate() {
  const { isMax, loading, tier } = useSubscription();
  const [paywallVisible, setPaywallVisible] = useState(false);

  const requireMax = useCallback(
    (onGranted?: () => void) => {
      if (isMax) {
        onGranted?.();
        return true;
      }
      // 課金状態の取得中は tier が初期値のため、Max加入者にもペイウォールが
      // 出てしまう。確定するまでは何もしない。
      if (loading) return false;
      setPaywallVisible(true);
      return false;
    },
    [isMax, loading],
  );

  return {
    isMax,
    loading,
    tier,
    paywallVisible,
    setPaywallVisible,
    requireMax,
  };
}
