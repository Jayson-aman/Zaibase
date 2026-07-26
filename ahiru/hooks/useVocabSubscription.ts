import { useEffect, useRef, useState } from 'react';
import { Platform } from 'react-native';
import { getCustomerInfo, hasVocabEntitlement, onEntitlementChanged } from '../services/subscription';

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

    // 購入・復元の直後にも即座に反映する（Web版にはネイティブの更新リスナーが無いため）
    const unsubscribe = onEntitlementChanged((info) => {
      if (mounted.current) setHasVocab(hasVocabEntitlement(info));
    });

    return () => {
      mounted.current = false;
      cleanup?.();
      unsubscribe();
    };
  }, []);

  return { hasVocab, loading };
}
