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
import { router } from 'expo-router';
import {
  fetchProMaxProducts,
  purchaseProduct,
  restorePurchases,
} from '../services/subscription';
import { PRO_FEATURES, MAX_FEATURES } from '../constants/proAccess';

interface Props {
  visible: boolean;
  onClose: () => void;
  onPurchased: () => void;
}

export default function Paywall({ visible, onClose, onPurchased }: Props) {
  const [proProd, setProProd] = useState<unknown>(null);
  const [maxProd, setMaxProd] = useState<unknown>(null);
  const [loadingOff, setLoadingOff] = useState(true);
  const [purchasing, setPurchasing] = useState(false);

  useEffect(() => {
    if (!visible) return;
    setLoadingOff(true);
    fetchProMaxProducts()
      .then(({ pro, max }) => {
        setProProd(pro);
        setMaxProd(max);
      })
      .catch(() => {})
      .finally(() => setLoadingOff(false));
  }, [visible]);

  async function handlePurchase(product: unknown) {
    setPurchasing(true);
    try {
      await purchaseProduct(product);
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

  const proPrice = (proProd as any)?.priceString ?? '¥1,000/月';
  const maxPrice = (maxProd as any)?.priceString ?? '¥2,000/月';

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
            <>
              {/* ── Pro ── */}
              <View style={[styles.card, { borderColor: '#9B59B6' }]}>
                <LinearGradient
                  colors={['#9B59B6', '#7D3C98']}
                  style={styles.cardHeader}
                >
                  <View>
                    <Text style={styles.cardName}>PRO</Text>
                    <Text style={styles.cardTagline}>基本機能フルセット</Text>
                  </View>
                  <Text style={styles.cardPrice}>{proPrice}</Text>
                </LinearGradient>
                <View style={styles.cardBody}>
                  {PRO_FEATURES.map((f) => (
                    <View key={f} style={styles.featureRow}>
                      <Text style={styles.featureCheck}>✓</Text>
                      <Text style={styles.featureText}>{f}</Text>
                    </View>
                  ))}
                  <TouchableOpacity
                    style={[
                      styles.buyBtn,
                      { backgroundColor: '#9B59B6' },
                      (!proProd || purchasing) && styles.buyBtnDisabled,
                    ]}
                    onPress={proProd ? () => handlePurchase(proProd) : undefined}
                    disabled={!proProd || purchasing}
                    activeOpacity={0.8}
                  >
                    {purchasing ? (
                      <ActivityIndicator color="#fff" />
                    ) : (
                      <Text style={styles.buyBtnText}>
                        {proProd ? 'PRO プランを始める' : '準備中'}
                      </Text>
                    )}
                  </TouchableOpacity>
                </View>
              </View>

              {/* ── Max ── */}
              <View style={[styles.card, { borderColor: '#E74C3C', borderWidth: 3 }]}>
                <LinearGradient
                  colors={['#E74C3C', '#C0392B']}
                  style={styles.cardHeader}
                >
                  <View>
                    <Text style={styles.cardName}>MAX</Text>
                    <Text style={styles.cardTagline}>プロ全機能＋AIコーチ</Text>
                  </View>
                  <Text style={styles.cardPrice}>{maxPrice}</Text>
                </LinearGradient>
                <View style={styles.cardBody}>
                  {/* Proの機能（含まれている） */}
                  <View style={styles.includedBanner}>
                    <Text style={styles.includedBannerText}>
                      ✓ PRO の全機能（聞き流し・地図・イラスト等）をすべて含む
                    </Text>
                  </View>

                  {/* Maxだけの追加機能 */}
                  <Text style={styles.maxOnlyLabel}>✨ MAX だけの追加機能</Text>
                  {MAX_FEATURES.map((f) => (
                    <View key={f} style={styles.maxFeatureRow}>
                      <Text style={styles.maxFeatureCheck}>＋</Text>
                      <Text style={styles.maxFeatureText}>{f}</Text>
                    </View>
                  ))}

                  {/* AI弱点コーチの説明 */}
                  <View style={styles.aiExplain}>
                    <Text style={styles.aiExplainTitle}>🤖 AI弱点コーチとは？</Text>
                    <Text style={styles.aiExplainText}>
                      クイズで間違えた問題をAIが分析。{'\n'}
                      「どこが苦手か」「何を復習すべきか」を{'\n'}
                      わかりやすくアドバイスします。
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={[
                      styles.buyBtn,
                      { backgroundColor: '#E74C3C' },
                      (!maxProd || purchasing) && styles.buyBtnDisabled,
                    ]}
                    onPress={maxProd ? () => handlePurchase(maxProd) : undefined}
                    disabled={!maxProd || purchasing}
                    activeOpacity={0.8}
                  >
                    {purchasing ? (
                      <ActivityIndicator color="#fff" />
                    ) : (
                      <Text style={styles.buyBtnText}>
                        {maxProd ? 'MAX プランを始める' : '準備中'}
                      </Text>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}

          <TouchableOpacity
            style={styles.restoreBtn}
            onPress={handleRestore}
            disabled={purchasing}
          >
            <Text style={styles.restoreBtnText}>購入を復元する</Text>
          </TouchableOpacity>

          <Text style={styles.terms}>
            サブスクリプションは期間終了の24時間前までに解約しない限り自動更新されます。解約はApp Store / Google Playの設定からいつでも可能です。お支払いは購入確定時にストアアカウントへ請求されます。
          </Text>

          <View style={styles.legalLinks}>
            <TouchableOpacity
              onPress={() => {
                onClose();
                router.push('/terms');
              }}
            >
              <Text style={styles.legalLinkText}>利用規約</Text>
            </TouchableOpacity>
            <Text style={styles.legalSep}>・</Text>
            <TouchableOpacity
              onPress={() => {
                onClose();
                router.push('/privacy');
              }}
            >
              <Text style={styles.legalLinkText}>プライバシーポリシー</Text>
            </TouchableOpacity>
          </View>
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
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeBtnText: { color: '#fff', fontSize: 20, fontWeight: '700' },
  scroll: {
    paddingTop: 80,
    paddingHorizontal: 20,
    paddingBottom: 60,
    alignItems: 'center',
  },
  spinner: { marginTop: 40 },
  crown: { fontSize: 64, marginBottom: 16 },
  title: { fontSize: 36, fontWeight: '900', color: '#fff', marginBottom: 8 },
  subtitle: {
    fontSize: 20,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: 32,
    textAlign: 'center',
  },
  card: {
    width: '100%',
    borderRadius: 24,
    borderWidth: 2,
    marginBottom: 24,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 18,
  },
  cardName: { fontSize: 28, fontWeight: '900', color: '#fff' },
  cardTagline: { fontSize: 16, color: 'rgba(255,255,255,0.8)', fontWeight: '600', marginTop: 2 },
  cardPrice: { fontSize: 24, fontWeight: '800', color: '#fff' },
  cardBody: { padding: 20, gap: 10 },
  featureRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 10 },
  featureCheck: { fontSize: 20, color: '#7DFFB3', fontWeight: '800', lineHeight: 28 },
  featureText: { fontSize: 18, color: 'rgba(255,255,255,0.9)', fontWeight: '600', flex: 1, lineHeight: 28 },
  includedBanner: {
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 12,
    padding: 14,
    marginBottom: 4,
  },
  includedBannerText: {
    fontSize: 17,
    color: '#7DFFB3',
    fontWeight: '700',
    lineHeight: 26,
  },
  maxOnlyLabel: {
    fontSize: 20,
    fontWeight: '900',
    color: '#FFD700',
    marginTop: 4,
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  maxFeatureRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 10 },
  maxFeatureCheck: { fontSize: 22, color: '#FFD700', fontWeight: '900', lineHeight: 30 },
  maxFeatureText: { fontSize: 18, color: '#FFD700', fontWeight: '700', flex: 1, lineHeight: 28 },
  aiExplain: {
    backgroundColor: 'rgba(255,215,0,0.1)',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,215,0,0.3)',
    marginTop: 4,
  },
  aiExplainTitle: { fontSize: 18, fontWeight: '800', color: '#FFD700', marginBottom: 8 },
  aiExplainText: { fontSize: 16, color: 'rgba(255,255,255,0.85)', lineHeight: 26, fontWeight: '500' },
  buyBtn: {
    borderRadius: 16,
    paddingVertical: 20,
    alignItems: 'center',
    marginTop: 14,
  },
  buyBtnDisabled: { opacity: 0.5 },
  buyBtnText: { fontSize: 22, fontWeight: '800', color: '#fff' },
  restoreBtn: { paddingVertical: 16 },
  restoreBtnText: { color: 'rgba(255,255,255,0.5)', fontSize: 16, fontWeight: '600' },
  terms: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.35)',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  legalLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 14,
  },
  legalLinkText: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  legalSep: { fontSize: 14, color: 'rgba(255,255,255,0.4)', marginHorizontal: 8 },
});
