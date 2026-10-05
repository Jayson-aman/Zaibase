import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { PlanNotice } from '../utils/planStatus';

// 契約の案内を描くだけの部品（状態の取得や保存は PlanStatusBanner がする）。
// 描画だけを切り出してあるので、すべての状態を画面に出して確かめられる。
export default function PlanNoticeCard({
  notice,
  actionLabel,
  onActionPress,
  onDismiss,
  secondaryLabel,
  onSecondary,
}: {
  notice: PlanNotice;
  actionLabel: string | null;
  onActionPress: () => void;
  onDismiss?: () => void;
  /** 2つ目のボタン（例：お支払いを直したあとの「状態を更新する」） */
  secondaryLabel?: string | null;
  onSecondary?: () => void;
}) {
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
          {secondaryLabel != null && onSecondary != null && (
            <TouchableOpacity style={styles.secondaryBtn} onPress={onSecondary} activeOpacity={0.8}>
              <Text style={styles.secondaryText}>{secondaryLabel}</Text>
            </TouchableOpacity>
          )}
          {onDismiss != null && (
            <TouchableOpacity style={styles.closeBtn} onPress={onDismiss} activeOpacity={0.7}>
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
  secondaryBtn: { borderWidth: 1.5, borderColor: '#C0392B', paddingHorizontal: 14, paddingVertical: 7, borderRadius: 20 },
  secondaryText: { color: '#A12A1F', fontSize: 13, fontWeight: '800' },
  closeBtn: { paddingHorizontal: 8, paddingVertical: 9 },
  closeText: { color: '#6B5E50', fontSize: 13, fontWeight: '700' },
});
