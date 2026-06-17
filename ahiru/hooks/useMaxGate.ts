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
      setPaywallVisible(true);
      return false;
    },
    [isMax],
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
