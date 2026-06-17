import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BETA_CODE = 'AHIRU2026';
const KEY = '@ahiru/beta_v1';

export function useBetaAccess() {
  const [hasAccess, setHasAccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem(KEY)
      .then((v) => setHasAccess(v === '1'))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  async function unlock(code: string): Promise<boolean> {
    if (code.trim().toUpperCase() === BETA_CODE) {
      await AsyncStorage.setItem(KEY, '1');
      setHasAccess(true);
      return true;
    }
    return false;
  }

  return { hasAccess, loading, unlock };
}
