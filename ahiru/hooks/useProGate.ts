import { useCallback, useState } from 'react';
import { useSubscription } from './useSubscription';

export function useProGate() {
  const { isPro, loading, tier } = useSubscription();
  const [paywallVisible, setPaywallVisible] = useState(false);

  const requirePro = useCallback(
    (onGranted?: () => void) => {
      if (isPro) {
        onGranted?.();
        return true;
      }
      setPaywallVisible(true);
      return false;
    },
    [isPro],
  );

  return {
    isPro,
    loading,
    tier,
    paywallVisible,
    setPaywallVisible,
    requirePro,
  };
}
