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

    // addCustomerInfoUpdateListener は void を返す（関数ではない）。
    // 解除には removeCustomerInfoUpdateListener に同じ関数参照を渡す必要がある。
    // ここを間違えるとリスナーが解除されず、画面を開くたびに増え続ける。
    let cleanup: (() => void) | null = null;
    let disposed = false;
    if (Platform.OS !== 'web') {
      (async () => {
        try {
          const Purchases = (await import('react-native-purchases')).default;
          const listener = (info: Parameters<typeof Purchases.addCustomerInfoUpdateListener>[0] extends (arg: infer A) => void ? A : never) => {
            if (mounted.current) setHasVocab(hasVocabEntitlement(info));
          };
          if (disposed) return;
          Purchases.addCustomerInfoUpdateListener(listener);
          cleanup = () => {
            try {
              Purchases.removeCustomerInfoUpdateListener(listener);
            } catch {}
          };
        } catch {}
      })();
    }

    // 購入・復元の直後にも即座に反映する（Web版にはネイティブの更新リスナーが無いため）
    const unsubscribe = onEntitlementChanged((info) => {
      if (mounted.current) setHasVocab(hasVocabEntitlement(info));
    });

    return () => {
      mounted.current = false;
      disposed = true;
      cleanup?.();
      unsubscribe();
    };
  }, []);

  return { hasVocab, loading };
}
