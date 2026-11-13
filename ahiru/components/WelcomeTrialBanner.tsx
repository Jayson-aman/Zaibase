import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useSubscription } from '../hooks/useSubscription';
import { useAuthUser } from '../hooks/useAuthUser';
import PlanNoticeCard from './PlanNoticeCard';
import type { PlanNotice } from '../utils/planStatus';

// 初回ログイン後の3日間の全開放について、ホームの上に出す案内。
// ・体験中 … あと何日かと、終わったあとどうなるかを出す（残り1日は赤く）
// ・終わった直後 … 一度だけ「体験が終わりました」と出す（閉じたら二度と出さない）
// すでに有料プランの人には出さない（体験の案内は要らない）。
const DISMISS_KEY_BASE = 'welcome_trial_end_dismissed';
const INVITE_DISMISS_KEY = 'welcome_trial_invite_dismissed';

export default function WelcomeTrialBanner({ onAction }: { onAction: () => void }) {
  const { tier, welcomeTrial, welcomeTrialDaysLeft, welcomeTrialEnded, loading } = useSubscription();
  const { user, loading: authLoading } = useAuthUser();
  const router = useRouter();
  const [dismissed, setDismissed] = useState<boolean | null>(null);
  // 未ログインの人に出す「ログインすると3日間ひらく」案内を閉じたか
  const [inviteDismissed, setInviteDismissed] = useState<boolean>(true);
  useEffect(() => {
    AsyncStorage.getItem(INVITE_DISMISS_KEY)
      .then((v) => setInviteDismissed(v === '1'))
      .catch(() => setInviteDismissed(false));
  }, []);
  const key = `${DISMISS_KEY_BASE}__${user && !user.isAnonymous ? user.uid : 'anon'}`;

  useEffect(() => {
    if (authLoading) return;
    let alive = true;
    setDismissed(null);
    AsyncStorage.getItem(key)
      .then((v) => { if (alive) setDismissed(v === '1'); })
      .catch(() => { if (alive) setDismissed(false); });
    return () => { alive = false; };
  }, [key, authLoading]);

  if (loading || authLoading || tier !== 'free') return null;

  // まだログインしていない人には、ログインすると体験が始まることを知らせる
  // （体験は実アカウントでのログインが条件で、知らないままだと始まらない）
  if (!user || user.isAnonymous) {
    if (inviteDismissed) return null;
    return (
      <PlanNoticeCard
        notice={{
          icon: '🎁',
          title: 'ログインすると、3日間ぜんぶひらきます',
          body: 'メールアドレスで登録してログインすると、はじめの3日間、単元・公式集・問題集・本試験対策の中身がすべて読めます。自動で課金されることはありません。',
          urgent: false,
          action: 'ログイン・新規登録',
        }}
        actionLabel="ログイン・新規登録"
        onActionPress={() => router.push('/login' as any)}
        onDismiss={() => {
          setInviteDismissed(true);
          AsyncStorage.setItem(INVITE_DISMISS_KEY, '1').catch(() => {});
        }}
      />
    );
  }

  let notice: PlanNotice | null = null;
  if (welcomeTrial) {
    const left = welcomeTrialDaysLeft;
    notice = {
      icon: '🎁',
      title: left <= 1 ? '全部ひらく体験は、あと1日です' : `全部ひらく体験中です（あと${left}日）`,
      body: '期間中は、単元・公式集・問題集・本試験対策の中身がすべて読めます（AIの機能と、Max限定の発展問題はのぞきます）。終わったあとは、続けて使うにはプランが必要です（体験だけで自動で課金されることはありません）。',
      urgent: left <= 1,
      action: 'プランを見る',
    };
  } else if (welcomeTrialEnded && dismissed === false) {
    notice = {
      icon: '⏰',
      title: '全部ひらく体験が終わりました',
      body: '続けて使うには、プランをえらんでください。',
      urgent: false,
      action: 'プランを見る',
    };
  }
  if (notice == null) return null;

  return (
    <PlanNoticeCard
      notice={notice}
      actionLabel={notice.action}
      onActionPress={onAction}
      onDismiss={
        welcomeTrialEnded
          ? () => {
              setDismissed(true);
              AsyncStorage.setItem(key, '1').catch(() => {});
            }
          : undefined
      }
    />
  );
}
