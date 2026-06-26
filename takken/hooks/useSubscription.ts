import { useState, useEffect, useCallback } from 'react';
import { Platform } from 'react-native';
import {
  SubscriptionTier,
  initRevenueCat,
  getCustomerInfo,
  tierFromCustomerInfo,
} from '../services/subscription';

export function useSubscription() {
  const [tier, setTier] = useState<SubscriptionTier>('free');
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const info = await getCustomerInfo();
      setTier(tierFromCustomerInfo(info));
    } catch {
      // ネットワーク切断時等はfreeのまま
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (Platform.OS !== 'web') {
      initRevenueCat();
    }
    refresh();
  }, [refresh]);

  return {
    tier,
    loading,
    isPro: tier === 'pro' || tier === 'max',
    isMax: tier === 'max',
    refresh,
  };
}
