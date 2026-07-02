import { useEffect, useRef, useState } from 'react';
import { Platform } from 'react-native';
import { getCustomerInfo, hasVocabEntitlement } from '../services/subscription';

export interface VocabSubscriptionState {
  hasVocab: boolean;
  loading: boolean;
}

export function useVocabSubscription(): VocabSubscriptionState {
  const [hasVocab, setHasVocab] = useState(false);
  const [loading, setLoading] = useState(true);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;

    getCustomerInfo()
      .then((info) => {
        if (mounted.current) setHasVocab(hasVocabEntitlement(info));
      })
      .catch(() => {})
      .finally(() => {
        if (mounted.current) setLoading(false);
      });

    let cleanup: (() => void) | null = null;
    if (Platform.OS !== 'web') {
      (async () => {
        try {
          const Purchases = (await import('react-native-purchases')).default;
          const removeListener = Purchases.addCustomerInfoUpdateListener((info) => {
            if (mounted.current) setHasVocab(hasVocabEntitlement(info));
          }) as (() => void) | undefined;
          cleanup = () => removeListener?.();
        } catch {}
      })();
    }

    return () => {
      mounted.current = false;
      cleanup?.();
    };
  }, []);

  return { hasVocab, loading };
}
