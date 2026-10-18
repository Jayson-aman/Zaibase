import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSubscription } from '../hooks/useSubscription';
import { loadStudyDays } from '../store/studyStreak';
import { logPurchaseEvent } from '../services/analytics';

// 無料のまま、何日か続けて使ってくれている人にだけ出す、小さなお知らせ。
//
// 出す人：契約したことがない（plan.kind === 'none'）・無料・勉強した日が3日以上ある。
// 出さない人：契約中・お試し中・解約ずみ・期限切れ（それぞれ PlanStatusBanner が出す）、まだ数日しか使っていない人。
// 「しつこい」と感じさせないよう、閉じたら7日は出さない。押したら課金画面を開くだけで、勝手に何も始まらない。
const DISMISS_KEY = '@ahiru_free_upgrade_dismissed_at';
const HIDE_DAYS = 7;
const MIN_STUDY_DAYS = 3;

export default function FreeUpgradeCard({ onOpenPaywall }: { onOpenPaywall: () => void }) {
  const { plan, isPro, isMax, loading } = useSubscription();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const [days, dismissed] = await Promise.all([loadStudyDays(), AsyncStorage.getItem(DISMISS_KEY)]);
        const studied = Object.values(days).filter((n) => n > 0).length;
        const hidden = dismissed != null && Date.now() - Number(dismissed) < HIDE_DAYS * 86400000;
        if (alive) setOk(studied >= MIN_STUDY_DAYS && !hidden);
      } catch {
        if (alive) setOk(false);
      }
    })();
    return () => { alive = false; };
  }, []);

  useEffect(() => {
    if (ok && !loading && !isPro && !isMax && plan.kind === 'none') logPurchaseEvent('free_upgrade_card_shown', 'subscription');
  }, [ok, loading, isPro, isMax, plan.kind]);

  if (loading || !ok || isPro || isMax || plan.kind !== 'none') return null;

  const intro = Platform.OS === 'web' ? '' : 'はじめての方は、最初の1か月 ¥500。';
  return (
    <View style={styles.box}>
      <Text style={styles.title}>🌟 続けて使ってくれて、ありがとうございます</Text>
      <Text style={styles.body}>
        PROにすると、全教科の教科書・全問題・志望校コース・聞き流しが使えます。{intro}いつでも解約できます。
      </Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.85}
          onPress={() => { logPurchaseEvent('free_upgrade_card_tapped', 'subscription'); onOpenPaywall(); }}
        >
          <Text style={styles.btnText}>プランを見る</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { setOk(false); AsyncStorage.setItem(DISMISS_KEY, String(Date.now())).catch(() => {}); }}
          activeOpacity={0.7}
        >
          <Text style={styles.later}>今はいい</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { backgroundColor: '#F0F9FF', borderRadius: 14, borderWidth: 1.5, borderColor: '#BAE6FD', padding: 14, marginBottom: 14 },
  title: { fontSize: 15, fontWeight: '800', color: '#0369A1' },
  body: { fontSize: 13, color: '#334155', lineHeight: 20, marginTop: 6 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 16, marginTop: 10 },
  btn: { backgroundColor: '#0369A1', borderRadius: 10, paddingVertical: 9, paddingHorizontal: 16 },
  btnText: { color: '#FFFFFF', fontSize: 14, fontWeight: '800' },
  later: { fontSize: 13, color: '#64748B', textDecorationLine: 'underline' },
});
