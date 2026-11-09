import { useEffect, useRef, useState } from 'react';
import { Platform } from 'react-native';
import {
  getCustomerInfo,
  tierFromCustomerInfo,
  onEntitlementChanged,
  ensureForegroundRefresh,
  SubscriptionTier,
} from '../services/subscription';
import { planStatusFromCustomerInfo, type PlanStatus } from '../utils/planStatus';
import { useAuthUser } from './useAuthUser';
import { ensureWelcomeTrialStart, isWelcomeTrialActive, welcomeTrialDaysLeft } from '../services/welcomeTrial';

export interface SubscriptionState {
  tier: SubscriptionTier;
  loading: boolean;
  isPro: boolean;
  isMax: boolean;
  /** 契約の状態（お試し中・終了間近・期限切れなど）。画面に案内を出すのに使う */
  plan: PlanStatus;
  /** 初回ログイン後の3日間の全開放の体験中か（isPro に含まれる）。課金したわけではない */
  welcomeTrial: boolean;
  /** 体験の残り日数（体験中でなければ 0） */
  welcomeTrialDaysLeft: number;
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

  // 初回ログイン後の3日間は、教材の中身を全部開く（課金の入口を広げるため）。
  // 匿名のままでは開けない（ログインが前提）。開始時刻はサーバーの時刻で1度だけ記録する。
  const { user: authUser } = useAuthUser();
  const trialUid = authUser && !authUser.isAnonymous ? authUser.uid : null;
  const [trialStart, setTrialStart] = useState<number | null>(null);
  useEffect(() => {
    let alive = true;
    if (!trialUid) {
      setTrialStart(null);
      return;
    }
    ensureWelcomeTrialStart(trialUid).then((t) => {
      if (alive) setTrialStart(t);
    });
    return () => {
      alive = false;
    };
  }, [trialUid]);
  const welcomeTrial = isWelcomeTrialActive(trialStart);

  useEffect(() => {
    mounted.current = true;
    // 前面に戻ったときの取り直しを、アプリ全体で1回だけ登録する
    ensureForegroundRefresh();

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
    isPro: tier === 'pro' || tier === 'max' || welcomeTrial,
    isMax: tier === 'max',
    plan,
    welcomeTrial,
    welcomeTrialDaysLeft: welcomeTrialDaysLeft(trialStart),
  };
}
