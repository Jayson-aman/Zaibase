import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ActivityIndicator,
  ScrollView,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { PurchasesOffering, PurchasesPackage } from 'react-native-purchases';
import {
  fetchCurrentOffering,
  purchasePackage,
  restorePurchases,
} from '../services/subscription';
import { PRO_FEATURES } from '../constants/proAccess';

interface Props {
  visible: boolean;
  onClose: () => void;
  onPurchased: () => void;
}

const PLANS = [
  {
    id: 'pro',
    name: 'Pro',
    fallbackPrice: '¥480/月',
    color: '#9B59B6',
    features: [...PRO_FEATURES],
  },
  {
    id: 'max',
    name: 'Max',
    fallbackPrice: '¥980/月',
    color: '#E74C3C',
    features: [...PRO_FEATURES, '🔊 高音質AI音声（近日公開）'],
  },
] as const;

function findPkg(
  offering: PurchasesOffering,
  planId: string,
): PurchasesPackage | undefined {
  return offering.availablePackages.find(
    (p) =>
      p.identifier.toLowerCase().includes(planId) ||
      p.product.identifier.toLowerCase().includes(planId),
  );
}

export default function Paywall({ visible, onClose, onPurchased }: Props) {
  const [offering, setOffering] = useState<PurchasesOffering | null>(null);
  const [loadingOff, setLoadingOff] = useState(true);
  const [purchasing, setPurchasing] = useState(false);

  useEffect(() => {
    if (!visible) return;
    setLoadingOff(true);
    fetchCurrentOffering()
      .then((o) => setOffering(o as PurchasesOffering | null))
      .catch(() => setOffering(null))
      .finally(() => setLoadingOff(false));
  }, [visible]);

  async function handlePurchase(pkg: PurchasesPackage) {
    setPurchasing(true);
    try {
      await purchasePackage(pkg);
      onPurchased();
    } catch (err: any) {
      if (!err?.userCancelled) {
        Alert.alert('購入エラー', 'もう一度お試しください。');
      }
    } finally {
      setPurchasing(false);
    }
  }

  async function handleRestore() {
    setPurchasing(true);
    try {
      await restorePurchases();
      onPurchased();
    } catch {
      Alert.alert('復元エラー', '購入の復元に失敗しました。');
    } finally {
      setPurchasing(false);
    }
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <LinearGradient colors={['#1A1A2E', '#2D1B69']} style={styles.container}>
        <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
          <Text style={styles.closeBtnText}>✕</Text>
        </TouchableOpacity>

        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.crown}>👑</Text>
          <Text style={styles.title}>プレミアムプラン</Text>
          <Text style={styles.subtitle}>聞き流し学習でさらに力をつける</Text>

          {loadingOff ? (
            <ActivityIndicator color="#fff" size="large" style={styles.spinner} />
          ) : (
            PLANS.map((plan) => {
              const pkg = offering ? findPkg(offering, plan.id) : undefined;
              const priceStr = pkg?.product.priceString ?? plan.fallbackPrice;

              return (
                <View key={plan.id} style={[styles.card, { borderColor: plan.color }]}>
                  <View style={[styles.cardHeader, { backgroundColor: plan.color }]}>
                    <Text style={styles.cardName}>{plan.name}</Text>
                    <Text style={styles.cardPrice}>{priceStr}</Text>
                  </View>
                  <View style={styles.cardBody}>
                    {plan.features.map((f) => (
                      <Text key={f} style={styles.feature}>{f}</Text>
                    ))}
                    <TouchableOpacity
                      style={[
                        styles.buyBtn,
                        { backgroundColor: plan.color },
                        (!pkg || purchasing) && styles.buyBtnDisabled,
                      ]}
                      onPress={pkg ? () => handlePurchase(pkg) : undefined}
                      disabled={!pkg || purchasing}
                      activeOpacity={0.8}
                    >
                      {purchasing ? (
                        <ActivityIndicator color="#fff" />
                      ) : (
                        <Text style={styles.buyBtnText}>
                          {pkg ? `${plan.name}を始める` : '準備中'}
                        </Text>
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })
          )}

          <TouchableOpacity
            style={styles.restoreBtn}
            onPress={handleRestore}
            disabled={purchasing}
          >
            <Text style={styles.restoreBtnText}>購入を復元する</Text>
          </TouchableOpacity>

          <Text style={styles.terms}>
            ご購入後、自動的に更新されます。解約はApp Store / Google Playの設定からいつでも可能です。
          </Text>
        </ScrollView>
      </LinearGradient>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  closeBtn: {
    position: 'absolute',
    top: 52,
    right: 20,
    zIndex: 10,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeBtnText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  scroll: {
    paddingTop: 80,
    paddingHorizontal: 20,
    paddingBottom: 60,
    alignItems: 'center',
  },
  spinner: { marginTop: 40 },
  crown: { fontSize: 56, marginBottom: 16 },
  title: { fontSize: 28, fontWeight: '900', color: '#fff', marginBottom: 8 },
  subtitle: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: 32,
    textAlign: 'center',
  },
  card: {
    width: '100%',
    borderRadius: 20,
    borderWidth: 2,
    marginBottom: 20,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  cardName: { fontSize: 20, fontWeight: '900', color: '#fff' },
  cardPrice: { fontSize: 17, fontWeight: '800', color: '#fff' },
  cardBody: { padding: 20, gap: 8 },
  feature: { fontSize: 14, color: 'rgba(255,255,255,0.9)', fontWeight: '600' },
  buyBtn: {
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 12,
  },
  buyBtnDisabled: { opacity: 0.5 },
  buyBtnText: { fontSize: 16, fontWeight: '800', color: '#fff' },
  restoreBtn: { paddingVertical: 16 },
  restoreBtnText: { color: 'rgba(255,255,255,0.5)', fontSize: 14, fontWeight: '600' },
  terms: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.35)',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 16,
    paddingHorizontal: 10,
  },
});
