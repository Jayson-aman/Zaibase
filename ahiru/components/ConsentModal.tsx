import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import { router } from 'expo-router';
import { PRO_PRICE_LABEL, MAX_PRICE_LABEL } from '../constants/pricing';

const isWeb = Platform.OS === 'web';

type Props = {
  onAgree: () => void;
};

const SERIF = Platform.select({
  ios: 'HiraMinProN-W6',
  web: '"Hiragino Mincho ProN", "Yu Mincho", "Noto Serif JP", Georgia, serif',
  default: undefined,
}) as string | undefined;

export default function ConsentModal({ onAgree }: Props) {
  const [checked, setChecked] = useState(false);

  const inner = (
    <View style={styles.root}>
        {/* ── Header ── */}
        <View style={styles.header}>
          <Text style={styles.logo}>🎓 Zaibase受験</Text>
          <Text style={styles.headerTitle}>ご利用前にご確認ください</Text>
          <Text style={styles.headerSub}>中学・高校受験対策アプリをご利用いただくにあたり、以下の規約にご同意ください。</Text>
        </View>

        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>

          {/* 子ども向け注記 */}
          <View style={styles.noticeBox}>
            <Text style={styles.noticeTitle}>👨‍👩‍👧 保護者の方へ</Text>
            <Text style={styles.noticeText}>
              本アプリは小学生（中学受験生）・中学生（高校受験生）を対象としています。未成年の方がご利用になる場合は、保護者（親権者）の同意のもとでご使用ください。有料プランへの申込みも、保護者の管理するアカウントで行ってください。
            </Text>
          </View>

          {/* 規約リンク */}
          <View style={styles.linksSection}>
            <Text style={styles.linksSectionTitle}>規約・ポリシー</Text>
            <TouchableOpacity
              style={styles.linkRow}
              onPress={() => router.push('/terms')}
              activeOpacity={0.7}
            >
              <Text style={styles.linkIcon}>📄</Text>
              <View style={styles.linkBody}>
                <Text style={styles.linkTitle}>利用規約</Text>
                <Text style={styles.linkDesc}>本アプリのご利用条件・禁止事項・免責事項</Text>
              </View>
              <Text style={styles.linkArrow}>›</Text>
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity
              style={styles.linkRow}
              onPress={() => router.push('/privacy')}
              activeOpacity={0.7}
            >
              <Text style={styles.linkIcon}>🔒</Text>
              <View style={styles.linkBody}>
                <Text style={styles.linkTitle}>プライバシーポリシー</Text>
                <Text style={styles.linkDesc}>個人情報の取扱い・外部送信情報</Text>
              </View>
              <Text style={styles.linkArrow}>›</Text>
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity
              style={styles.linkRow}
              onPress={() => router.push('/tokusho')}
              activeOpacity={0.7}
            >
              <Text style={styles.linkIcon}>🏪</Text>
              <View style={styles.linkBody}>
                <Text style={styles.linkTitle}>特定商取引法に基づく表示</Text>
                <Text style={styles.linkDesc}>販売業者・料金・解約方法</Text>
              </View>
              <Text style={styles.linkArrow}>›</Text>
            </TouchableOpacity>
          </View>

          {/* 有料プラン概要 */}
          <View style={styles.planBox}>
            <Text style={styles.planBoxTitle}>💳 有料プランについて</Text>
            <Text style={styles.planBoxText}>
              {`本アプリは無料でご利用いただけます。PRO（${PRO_PRICE_LABEL}）・MAX（${MAX_PRICE_LABEL}）プランでは、聞き流しモード・AI弱点コーチ等の追加機能をご利用いただけます。課金は${
                isWeb
                  ? 'クレジットカード決済'
                  : Platform.OS === 'ios'
                  ? 'App Store'
                  : 'Google Play'
              }を通じて行われます。`}
            </Text>
          </View>

          <View style={{ height: 24 }} />
        </ScrollView>

        {/* ── チェックボックス ── */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.checkRow}
            onPress={() => setChecked((v) => !v)}
            activeOpacity={0.8}
          >
            <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
              {checked && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={styles.checkLabel}>
              利用規約・プライバシーポリシーを読み、同意します
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.agreeBtn, !checked && styles.agreeBtnDisabled]}
            onPress={checked ? onAgree : undefined}
            activeOpacity={checked ? 0.85 : 1}
          >
            <Text style={[styles.agreeBtnText, !checked && styles.agreeBtnTextDisabled]}>
              同意してアプリを始める
            </Text>
          </TouchableOpacity>

          <Text style={styles.footerNote}>
            同意されない場合は本アプリをご利用いただけません。
          </Text>
        </View>
      </View>
  );

  if (isWeb) {
    return (
      <View style={[StyleSheet.absoluteFill, styles.webOverlay]}>
        {inner}
      </View>
    );
  }

  return (
    <Modal
      visible
      animationType="slide"
      presentationStyle="pageSheet"
      statusBarTranslucent
    >
      {inner}
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FAF7F2',
  },
  webOverlay: {
    zIndex: 9999,
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 52,
    paddingBottom: 24,
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderBottomColor: '#DCD3C5',
  },
  logo: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1F1912',
    marginBottom: 8,
  },
  headerTitle: {
    fontFamily: SERIF,
    fontSize: 20,
    fontWeight: '700',
    color: '#1F1912',
    marginBottom: 8,
    textAlign: 'center',
  },
  headerSub: {
    fontSize: 13,
    color: '#9C9186',
    textAlign: 'center',
    lineHeight: 20,
    fontWeight: '400',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  noticeBox: {
    backgroundColor: '#FFF8E1',
    borderRadius: 12,
    padding: 16,
    marginBottom: 18,
    borderLeftWidth: 4,
    borderLeftColor: '#F59E0B',
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  noticeTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#B45309',
    marginBottom: 6,
  },
  noticeText: {
    fontSize: 13.5,
    color: '#78350F',
    lineHeight: 22,
    fontWeight: '400',
  },
  linksSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#EBE4D8',
  },
  linksSectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#888',
    letterSpacing: 1.5,
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 6,
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 12,
  },
  linkIcon: {
    fontSize: 22,
  },
  linkBody: {
    flex: 1,
  },
  linkTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#221C18',
    marginBottom: 2,
  },
  linkDesc: {
    fontSize: 12,
    color: '#888',
    fontWeight: '400',
  },
  linkArrow: {
    fontSize: 20,
    color: '#DCD3C5',
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#F5EFE4',
    marginLeft: 54,
  },
  planBox: {
    backgroundColor: '#F5EFE4',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E8DCC8',
  },
  planBoxTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#6B4226',
    marginBottom: 6,
  },
  planBoxText: {
    fontSize: 13.5,
    color: '#2D4A7A',
    lineHeight: 22,
    fontWeight: '400',
  },
  footer: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EBE4D8',
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 32,
  },
  checkRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 18,
    gap: 12,
  },
  checkbox: {
    width: 26,
    height: 26,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#DCD3C5',
    backgroundColor: '#FAF7F2',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginTop: 1,
  },
  checkboxChecked: {
    backgroundColor: '#6B4226',
    borderColor: '#6B4226',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },
  checkLabel: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    lineHeight: 22,
    fontWeight: '500',
  },
  agreeBtn: {
    backgroundColor: '#6B4226',
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#6B4226',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  agreeBtnDisabled: {
    backgroundColor: '#DCD3C5',
    shadowOpacity: 0,
    elevation: 0,
  },
  agreeBtnText: {
    fontSize: 17,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.3,
  },
  agreeBtnTextDisabled: {
    color: 'rgba(255,255,255,0.7)',
  },
  footerNote: {
    fontSize: 12,
    color: '#AAA',
    textAlign: 'center',
    fontWeight: '400',
  },
});
