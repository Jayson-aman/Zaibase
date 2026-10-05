import React, { useEffect, useState } from 'react';
import { Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSubscription } from '../hooks/useSubscription';
import { planNotice } from '../utils/planStatus';

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

const DISMISS_KEY = 'plan_expired_dismissed_at';

export default function PlanStatusBanner({ onAction }: { onAction: () => void }) {
  const { plan, loading } = useSubscription();
  const [dismissedAt, setDismissedAt] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let alive = true;
    AsyncStorage.getItem(DISMISS_KEY)
      .then((v) => { if (alive) setDismissedAt(v); })
      .catch(() => {})
      .finally(() => { if (alive) setLoaded(true); });
    return () => { alive = false; };
  }, []);

  if (loading || !loaded) return null;
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
    AsyncStorage.setItem(DISMISS_KEY, expiryKey).catch(() => {});
  }

  return (
    <View style={[styles.box, notice.urgent && styles.boxUrgent]}>
      <Text style={styles.icon}>{notice.icon}</Text>
      <View style={styles.textWrap}>
        <Text style={[styles.title, notice.urgent && styles.titleUrgent]}>{notice.title}</Text>
        <Text style={styles.body}>{notice.body}</Text>
        <View style={styles.row}>
          {actionLabel != null && (
            <TouchableOpacity style={[styles.btn, notice.urgent && styles.btnUrgent]} onPress={onActionPress} activeOpacity={0.85}>
              <Text style={styles.btnText}>{actionLabel}</Text>
            </TouchableOpacity>
          )}
          {plan.kind === 'expired' && (
            <TouchableOpacity style={styles.closeBtn} onPress={dismiss} activeOpacity={0.7}>
              <Text style={styles.closeText}>閉じる</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    gap: 10,
    marginHorizontal: 16,
    marginTop: 10,
    padding: 14,
    backgroundColor: '#FFF8E6',
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#F2D48A',
  },
  boxUrgent: { backgroundColor: '#FDECEA', borderColor: '#E8A39C' },
  icon: { fontSize: 22, marginTop: 1 },
  textWrap: { flex: 1 },
  title: { fontSize: 15, fontWeight: '800', color: '#7A5A12' },
  titleUrgent: { color: '#A12A1F' },
  body: { fontSize: 13, lineHeight: 20, color: '#4A4036', marginTop: 4 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, marginTop: 10 },
  btn: { backgroundColor: '#B5622E', paddingHorizontal: 18, paddingVertical: 9, borderRadius: 20 },
  btnUrgent: { backgroundColor: '#C0392B' },
  btnText: { color: '#FFFFFF', fontSize: 14, fontWeight: '800' },
  closeBtn: { paddingHorizontal: 8, paddingVertical: 9 },
  closeText: { color: '#6B5E50', fontSize: 13, fontWeight: '700' },
});
