import { useEffect, useRef, useState } from 'react';
import { Platform } from 'react-native';
import {
  getCustomerInfo,
  tierFromCustomerInfo,
  onEntitlementChanged,
  SubscriptionTier,
} from '../services/subscription';
import { planStatusFromCustomerInfo, type PlanStatus } from '../utils/planStatus';

export interface SubscriptionState {
  tier: SubscriptionTier;
  loading: boolean;
  isPro: boolean;
  isMax: boolean;
  /** 契約の状態（お試し中・終了間近・期限切れなど）。画面に案内を出すのに使う */
  plan: PlanStatus;
}

export function useSubscription(): SubscriptionState {
  const [tier, setTier] = useState<SubscriptionTier>('free');
  const [plan, setPlan] = useState<PlanStatus>(() => planStatusFromCustomerInfo(null));
  const apply = (info: unknown) => {
    setTier(tierFromCustomerInfo(info));
    setPlan(planStatusFromCustomerInfo(info));
  };
  const [loading, setLoading] = useState(true);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;

    getCustomerInfo()
      .then((info) => {
        if (mounted.current) apply(info);
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
            if (mounted.current) apply(info);
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
      if (mounted.current) apply(info);
    });

    return () => {
      mounted.current = false;
      disposed = true;
      cleanup?.();
      unsubscribe();
    };
  }, []);

  return {
    tier,
    loading,
    isPro: tier === 'pro' || tier === 'max',
    isMax: tier === 'max',
    plan,
  };
}
