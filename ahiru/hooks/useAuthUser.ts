import { useEffect, useState } from 'react';
import { subscribeAuth, type AuthUser } from '../services/auth';

/**
 * ログイン状態を購読するフック。
 * isLoggedIn は「実アカウントでログイン済み（匿名でない）」を表す。
 */
export function useAuthUser() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsub: (() => void) | undefined;
    let active = true;
    subscribeAuth((u) => {
      if (!active) return;
      setUser(u);
      setLoading(false);
    })
      .then((fn) => {
        if (active) unsub = fn;
        else fn();
      })
      .catch(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
      if (unsub) unsub();
    };
  }, []);

  return {
    user,
    loading,
    isLoggedIn: !!user && !user.isAnonymous,
    email: user?.email ?? null,
  };
}
