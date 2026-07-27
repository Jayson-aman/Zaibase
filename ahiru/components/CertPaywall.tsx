import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { useVocabSubscription } from '../hooks/useVocabSubscription';
import { useSubscription } from '../hooks/useSubscription';

/**
 * 英検など「受験対策とは別枠の英語学習コンテンツ」を課金ゲートするラッパー。
 * zaibase 受験アプリの課金モデルに合わせ、英語コンテンツは
 * 「英単語 Pro（vocab entitlement）」または pro / max ティアで開放する。
 *
 * children は ReactNode または `(hasAccess) => ReactNode`。
 * 関数形式で渡した場合、未加入ユーザーには hasAccess=false が渡るので
 * 呼び出し側で問題数を freeLimit までスライスして表示する。
 */
type Props = {
  certKey: string;
  certName: string;
  certEmoji: string;
  accentColor: string;
  totalQuestions: number;
  freeLimit: number;
  proMonthlyLabel?: string;
  proYearlyLabel?: string;
  proYearlySavingsLabel?: string;
  proFeatures?: string[];
  children: React.ReactNode | ((hasAccess: boolean) => React.ReactNode);
};

export default function CertPaywall({
  certName,
  certEmoji,
  accentColor,
  totalQuestions,
  freeLimit,
  proMonthlyLabel,
  proYearlyLabel,
  proFeatures,
  children,
}: Props) {
  const router = useRouter();
  const { hasVocab, loading: vocabLoading } = useVocabSubscription();
  const { isMax, loading: subLoading } = useSubscription();

  const loading = vocabLoading || subLoading;
  // 英検は「英単語Pro（vocab）」または全部入りのMaxで開放（受験専用Proは対象外）。
  const hasAccess = hasVocab || isMax;

  const isFn = typeof children === 'function';
  const content = isFn ? children(hasAccess) : children;

  if (hasAccess) return <>{content}</>;

  // 判定中：関数形式の子は hasAccess=false を受け取るので未開放状態で描画でき、
  // 素のReactNodeもそのまま描画する。空Viewにすると、画面全体を子として渡している
  // 呼び出し元（英検トップなど）で戻るボタンごと消えて真っ白になってしまうため。
  // 判定は数百ミリ秒で確定し、確定後は下の未加入表示に切り替わる。
  if (loading) return <>{content}</>;

  // 未加入：無料分（freeLimit）を表示しつつ、下部に開放バナーを出す
  return (
    <View style={styles.wrap}>
      <View style={styles.contentArea}>{content}</View>
      <View style={[styles.banner, { borderTopColor: accentColor }]}>
        <Text style={styles.bannerTitle}>
          {certEmoji} {certName}は無料で{freeLimit}問、全{totalQuestions}問は英単語Proで解放
        </Text>
        {!!proFeatures?.length && (
          <Text style={styles.bannerFeature}>{proFeatures[0]}</Text>
        )}
        <TouchableOpacity
          style={[styles.bannerBtn, { backgroundColor: accentColor }]}
          onPress={() => router.push('/vocab')}
          activeOpacity={0.85}
        >
          <Text style={styles.bannerBtnText}>
            英単語Proで全問解放
            {proMonthlyLabel ? `（${proMonthlyLabel}${proYearlyLabel ? ` / ${proYearlyLabel}` : ''}）` : ''}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1 },
  contentArea: { flex: 1 },
  banner: {
    borderTopWidth: 3,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: Platform.OS === 'ios' ? 28 : 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 8,
  },
  bannerTitle: { fontSize: 13, fontWeight: '800', color: '#1A1A2E', marginBottom: 4 },
  bannerFeature: { fontSize: 11, color: '#666', fontWeight: '500', marginBottom: 10 },
  bannerBtn: { borderRadius: 12, paddingVertical: 12, alignItems: 'center' },
  bannerBtnText: { fontSize: 14, fontWeight: '900', color: '#FFFFFF' },
});
