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
      setPaywallVisible(true);
      return false;
    },
    [effectiveIsPro],
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
