import React, { useEffect, useState } from 'react';
import { Linking, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSubscription } from '../hooks/useSubscription';
import { useAuthUser } from '../hooks/useAuthUser';
import { refreshCustomerInfo } from '../services/subscription';
import { planNotice } from '../utils/planStatus';
import PlanNoticeCard from './PlanNoticeCard';

// 契約の状態をホームの上に出す帯。
//
// 500円のお試しをしても、解約して期限が来ても、そのまま放置しても、「いつ切れるのか」
// 「もう切れたのか」が画面のどこにも出ていなかった。親が気づかないまま有料に切りかわる、
// いつのまにか無料に戻る、のどちらも起きる。ここで先に知らせる。
//
// ・お試し中／解約ずみ … 期限と、そのあとどうなるかを出す（残り2〜3日からは赤く目立たせる）
// ・お支払いの問題 … 赤く出す
// ・期限が切れた … 一度閉じたら、同じ終了日のぶんは出さない
// ・ふつうに契約中／未契約 … 何も出さない

const DISMISS_KEY_BASE = 'plan_expired_dismissed_at';

export default function PlanStatusBanner({ onAction }: { onAction: () => void }) {
  const { plan, loading } = useSubscription();
  const { user, loading: authLoading } = useAuthUser();
  const [dismissedAt, setDismissedAt] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  // 「閉じた」記録は人ごとに持つ（同じ端末で別の人がログインしても、前の人が閉じた案内を隠さない）
  const dismissKey = `${DISMISS_KEY_BASE}__${user && !user.isAnonymous ? user.uid : 'anon'}`;

  useEffect(() => {
    if (authLoading) return;
    let alive = true;
    setLoaded(false);
    AsyncStorage.getItem(dismissKey)
      .then((v) => { if (alive) setDismissedAt(v); })
      .catch(() => { if (alive) setDismissedAt(null); })
      .finally(() => { if (alive) setLoaded(true); });
    return () => { alive = false; };
  }, [dismissKey, authLoading]);

  if (loading || authLoading || !loaded) return null;
  const manage = Platform.OS === 'web' ? '購入完了メールの「サブスクリプション管理」リンク' : 'ストアの設定（Apple ID → サブスクリプション）';
  const notice = planNotice(plan, manage);
  if (notice == null) return null;
  const expiryKey = plan.expiresAt?.toISOString() ?? '';
  if (plan.kind === 'expired' && dismissedAt === expiryKey) return null;

  // お支払いの問題は、プラン選びではなくストアの管理ページで直す。
  // 開けない／URLが無いときは、ボタンを出さずに案内の文だけにする（押しても何も起きない状態を作らない）。
  const storeUrl =
    plan.managementUrl ??
    (Platform.OS === 'ios'
      ? 'https://apps.apple.com/account/subscriptions'
      : Platform.OS === 'android'
        ? 'https://play.google.com/store/account/subscriptions'
        : null);
  const isBilling = plan.kind === 'billing';
  const actionLabel = isBilling && storeUrl == null ? null : notice.action;
  function onActionPress() {
    if (!isBilling) { onAction(); return; }
    if (storeUrl == null) return;
    Linking.openURL(storeUrl).catch(() => {});
  }

  function dismiss() {
    setDismissedAt(expiryKey);
    AsyncStorage.setItem(dismissKey, expiryKey).catch(() => {});
  }

  return (
    <PlanNoticeCard
      notice={notice}
      actionLabel={actionLabel}
      onActionPress={onActionPress}
      onDismiss={plan.kind === 'expired' ? dismiss : undefined}
      // お支払いを直したあと、アプリを閉じなくても帯を消せるようにする
      secondaryLabel={isBilling ? '直したので更新する' : null}
      onSecondary={isBilling ? () => { void refreshCustomerInfo(); } : undefined}
    />
  );
}
