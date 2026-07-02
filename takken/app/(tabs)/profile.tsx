import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet,
  Platform, Linking, Alert, ActivityIndicator,
} from 'react-native';
import { clearTTSCache } from '../../services/tts';
import { useSubscription } from '../../hooks/useSubscription';
import {
  fetchProMaxProducts,
  purchaseProduct,
  restorePurchases,
  isRevenueCatConfigured,
} from '../../services/subscription';
import {
  PRO_FEATURES, MAX_FEATURES, PLAN_PRICE_PRO, PLAN_PRICE_MAX,
} from '../../constants/proAccess';

export default function ProfileScreen() {
  const { tier, loading, isPro, isMax, refresh } = useSubscription();
  const [purchasing, setPurchasing] = useState(false);
  const [restoring, setRestoring] = useState(false);

  const handlePurchase = async (plan: 'pro' | 'max') => {
    if (!isRevenueCatConfigured()) {
      Alert.alert(
        '準備中',
        'App Store の審査通過後に課金機能が有効になります。\n\n' +
        '現在はすべての機能を無料でお試しいただけます。',
        [{ text: 'OK' }],
      );
      return;
    }
    setPurchasing(true);
    try {
      const { pro, max } = await fetchProMaxProducts();
      const product = plan === 'max' ? max : pro;
      if (!product) {
        Alert.alert('エラー', '商品情報を取得できませんでした。');
        return;
      }
      const info = await purchaseProduct(product);
      await refresh();
      Alert.alert('購入完了', `${plan === 'max' ? 'Max' : 'Pro'}プランへようこそ！`);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : '購入に失敗しました';
      if (!msg.includes('cancelled')) {
        Alert.alert('購入エラー', msg);
      }
    } finally {
      setPurchasing(false);
    }
  };

  const handleRestore = async () => {
    if (!isRevenueCatConfigured()) {
      Alert.alert('準備中', 'まだ課金機能は有効化されていません。');
      return;
    }
    setRestoring(true);
    try {
      await restorePurchases();
      await refresh();
      Alert.alert('復元完了', '購入情報を復元しました。');
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : '復元に失敗しました';
      Alert.alert('復元エラー', msg);
    } finally {
      setRestoring(false);
    }
  };

  const TIER_LABEL: Record<string, string> = {
    free: '無料プラン',
    pro: 'Proプラン',
    max: 'Maxプラン',
  };
  const TIER_COLOR: Record<string, string> = {
    free: '#64748B',
    pro: '#0EA5E9',
    max: '#7C3AED',
  };

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>マイページ</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>

        {/* 現在のプラン */}
        <View style={[styles.currentPlan, { borderColor: TIER_COLOR[tier] }]}>
          {loading ? (
            <ActivityIndicator color="#0EA5E9" />
          ) : (
            <>
              <View style={[styles.planBadge, { backgroundColor: TIER_COLOR[tier] }]}>
                <Text style={styles.planBadgeText}>{TIER_LABEL[tier]}</Text>
              </View>
              {tier === 'free' && (
                <Text style={styles.currentPlanSub}>
                  全問題の一部（50問）にアクセスできます
                </Text>
              )}
              {tier === 'pro' && (
                <Text style={styles.currentPlanSub}>
                  全790問・全解説・音声聞き流しが使えます
                </Text>
              )}
              {tier === 'max' && (
                <Text style={styles.currentPlanSub}>
                  全機能・模試モード・AI弱点コーチが使えます
                </Text>
              )}
            </>
          )}
        </View>

        {/* プラン比較 */}
        {!isMax && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>プランをアップグレード</Text>

            {/* Pro プラン */}
            {!isPro && (
              <View style={[styles.planCard, styles.planCardPro]}>
                <View style={styles.planHeader}>
                  <Text style={styles.planName}>Pro</Text>
                  <Text style={styles.planPrice}>{PLAN_PRICE_PRO}</Text>
                </View>
                {PRO_FEATURES.map((f, i) => (
                  <View key={i} style={styles.featureRow}>
                    <Text style={styles.featureText}>{f}</Text>
                  </View>
                ))}
                <TouchableOpacity
                  style={[styles.upgradeBtn, styles.upgradeBtnPro, purchasing && styles.upgradeBtnDisabled]}
                  onPress={() => handlePurchase('pro')}
                  disabled={purchasing}
                >
                  {purchasing ? (
                    <ActivityIndicator color="#fff" size="small" />
                  ) : (
                    <Text style={styles.upgradeBtnText}>Proにアップグレード</Text>
                  )}
                </TouchableOpacity>
              </View>
            )}

            {/* Max プラン */}
            <View style={[styles.planCard, styles.planCardMax]}>
              <View style={styles.planHeader}>
                <Text style={styles.planName}>Max</Text>
                <Text style={styles.planPrice}>{PLAN_PRICE_MAX}</Text>
              </View>
              <Text style={styles.planIncludes}>Proの全機能を含む</Text>
              {MAX_FEATURES.map((f, i) => (
                <View key={i} style={styles.featureRow}>
                  <Text style={styles.featureText}>{f}</Text>
                </View>
              ))}
              {isPro && (
                <>
                  {PRO_FEATURES.map((f, i) => (
                    <View key={`pro-${i}`} style={styles.featureRow}>
                      <Text style={[styles.featureText, { color: '#94A3B8' }]}>{f}</Text>
                    </View>
                  ))}
                </>
              )}
              <TouchableOpacity
                style={[styles.upgradeBtn, styles.upgradeBtnMax, purchasing && styles.upgradeBtnDisabled]}
                onPress={() => handlePurchase('max')}
                disabled={purchasing}
              >
                {purchasing ? (
                  <ActivityIndicator color="#fff" size="small" />
                ) : (
                  <Text style={styles.upgradeBtnText}>Maxにアップグレード</Text>
                )}
              </TouchableOpacity>
            </View>

            {/* 復元 */}
            <TouchableOpacity
              style={styles.restoreBtn}
              onPress={handleRestore}
              disabled={restoring}
            >
              {restoring ? (
                <ActivityIndicator color="#64748B" size="small" />
              ) : (
                <Text style={styles.restoreBtnText}>以前の購入を復元する</Text>
              )}
            </TouchableOpacity>

            <Text style={styles.legalNote}>
              • 月額サブスクリプション。期間終了日の24時間以上前にキャンセルしない限り自動更新されます。{'\n'}
              • Apple ID アカウントに請求されます。{'\n'}
              • キャンセルは「設定」→「Apple ID」→「サブスクリプション」から行えます。
            </Text>
          </View>
        )}

        {/* 設定 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>設定</Text>
          <TouchableOpacity style={styles.row} onPress={clearTTSCache}>
            <Text style={styles.rowLabel}>音声キャッシュをクリア</Text>
            <Text style={styles.rowValue}>🗑️</Text>
          </TouchableOpacity>
          <InfoRow label="音声" value="Google Cloud TTS" />
        </View>

        {/* 試験情報 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>試験情報</Text>
          <InfoRow label="実施機関" value="（一財）不動産適正取引推進機構" />
          <InfoRow label="試験形式" value="4択 50問 2時間" />
          <InfoRow label="合格ライン" value="例年35〜38点（合格率15〜17%）" />
          <InfoRow label="試験日" value="毎年10月 第3日曜日" />
        </View>

        {/* 運営 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>運営</Text>
          <InfoRow label="アプリ" value="宅建士対策 by Zaibase v1.0.0" />
          <InfoRow label="運営" value="Zaibase Group" />
          <InfoRow label="メール" value="info@zaibase.group" />
          <TouchableOpacity
            style={styles.row}
            onPress={() => Linking.openURL('https://www.zaibase.group')}
          >
            <Text style={styles.rowLabel}>会社サイト</Text>
            <Text style={styles.rowLink}>zaibase.group ↗</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.row}
            onPress={() => Linking.openURL('https://www.zaibase.group/privacy')}
          >
            <Text style={styles.rowLabel}>プライバシーポリシー</Text>
            <Text style={styles.rowLink}>表示 ↗</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.row}
            onPress={() => Linking.openURL('https://www.zaibase.group/terms')}
          >
            <Text style={styles.rowLabel}>利用規約</Text>
            <Text style={styles.rowLink}>表示 ↗</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.rowValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#F0F4FF' },
  header: {
    paddingTop: Platform.OS === 'ios' ? 56 : 40,
    paddingBottom: 16,
    paddingHorizontal: 20,
    backgroundColor: '#1E40AF',
  },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: '800' },
  content: { padding: 16, gap: 16, paddingBottom: 40 },

  currentPlan: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    borderWidth: 2,
    alignItems: 'center',
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  planBadge: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  planBadgeText: { color: '#fff', fontWeight: '800', fontSize: 15 },
  currentPlanSub: { color: '#64748B', fontSize: 13, textAlign: 'center' },

  section: {
    backgroundColor: '#fff',
    borderRadius: 14,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#94A3B8',
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },

  planCard: {
    margin: 12,
    borderRadius: 12,
    padding: 16,
    gap: 8,
  },
  planCardPro: { backgroundColor: '#EFF6FF', borderWidth: 1.5, borderColor: '#BFDBFE' },
  planCardMax: { backgroundColor: '#F5F3FF', borderWidth: 1.5, borderColor: '#DDD6FE' },

  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  planName: { fontSize: 20, fontWeight: '900', color: '#111827' },
  planPrice: { fontSize: 16, fontWeight: '700', color: '#374151' },
  planIncludes: { fontSize: 12, color: '#7C3AED', fontWeight: '600', marginBottom: 4 },

  featureRow: { flexDirection: 'row', alignItems: 'flex-start' },
  featureText: { fontSize: 13, color: '#374151', lineHeight: 20, flex: 1 },

  upgradeBtn: {
    borderRadius: 10,
    paddingVertical: 13,
    alignItems: 'center',
    marginTop: 8,
  },
  upgradeBtnPro: { backgroundColor: '#0EA5E9' },
  upgradeBtnMax: { backgroundColor: '#7C3AED' },
  upgradeBtnDisabled: { opacity: 0.5 },
  upgradeBtnText: { color: '#fff', fontWeight: '800', fontSize: 15 },

  restoreBtn: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  restoreBtnText: { color: '#64748B', fontSize: 13, textDecorationLine: 'underline' },

  legalNote: {
    fontSize: 11,
    color: '#94A3B8',
    lineHeight: 17,
    paddingHorizontal: 12,
    paddingBottom: 12,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F8FAFC',
  },
  rowLabel: { fontSize: 14, color: '#374151' },
  rowValue: { fontSize: 13, color: '#64748B', maxWidth: '55%', textAlign: 'right' },
  rowLink: { fontSize: 13, color: '#1E40AF', fontWeight: '600' },
});
