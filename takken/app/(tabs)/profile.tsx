import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Platform, Linking } from 'react-native';
import { clearTTSCache } from '../../services/tts';

export default function ProfileScreen() {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>👤 マイページ</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>アプリについて</Text>
          <InfoRow label="アプリ名" value="宅建士対策 by Zaibase" />
          <InfoRow label="バージョン" value="1.0.0" />
          <InfoRow label="対応試験" value="宅地建物取引士（宅建士）" />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>音声設定</Text>
          <TouchableOpacity style={styles.row} onPress={clearTTSCache}>
            <Text style={styles.rowLabel}>音声キャッシュをクリア</Text>
            <Text style={styles.rowValue}>🗑️</Text>
          </TouchableOpacity>
          <InfoRow label="音声プロバイダー" value="Google Cloud TTS（Standard）" />
          <InfoRow label="言語" value="日本語（ja-JP-Standard-C）" />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>試験情報</Text>
          <InfoRow label="実施機関" value="（一財）不動産適正取引推進機構" />
          <InfoRow label="試験形式" value="4択マークシート 50問 2時間" />
          <InfoRow label="合格ライン" value="例年35〜38点（全国平均15〜17%）" />
          <InfoRow label="試験日" value="毎年10月 第3日曜日" />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>運営</Text>
          <InfoRow label="運営" value="南條 雅哉 / Zaibase Group" />
          <InfoRow label="メール" value="info@zaibase.group" />
          <TouchableOpacity style={styles.row} onPress={() => Linking.openURL('https://www.zaibase.group')}>
            <Text style={styles.rowLabel}>会社サイト</Text>
            <Text style={styles.rowLink}>zaibase.group ↗</Text>
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
  content: { padding: 16, gap: 16 },
  section: {
    backgroundColor: '#fff', borderRadius: 14, overflow: 'hidden',
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4, elevation: 2,
  },
  sectionTitle: { fontSize: 13, fontWeight: '700', color: '#94A3B8', padding: 14, borderBottomWidth: 1, borderBottomColor: '#F1F5F9' },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 14, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#F8FAFC' },
  rowLabel: { fontSize: 14, color: '#374151' },
  rowValue: { fontSize: 13, color: '#64748B', maxWidth: '55%', textAlign: 'right' },
  rowLink: { fontSize: 13, color: '#1E40AF', fontWeight: '600' },
});
