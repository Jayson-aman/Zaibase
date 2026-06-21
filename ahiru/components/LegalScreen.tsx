import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import { router } from 'expo-router';
import type { LegalSection } from '../data/legal';

type Props = {
  title: string;
  updated: string;
  sections: LegalSection[];
};

export default function LegalScreen({ title, updated, sections }: Props) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => router.back()}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <Text style={styles.backBtnText}>‹ 戻る</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>
          {title}
        </Text>
        <View style={styles.backBtn} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={true}
      >
        {sections.map((sec, i) => (
          <View key={`${i}-${sec.heading}`} style={styles.section}>
            {sec.heading !== '' && (
              <Text style={styles.heading}>{sec.heading}</Text>
            )}
            {sec.paragraphs?.map((p, j) => (
              <Text key={`p-${j}`} style={styles.paragraph}>
                {p}
              </Text>
            ))}
            {sec.bullets?.map((b, j) => (
              <View key={`b-${j}`} style={styles.bulletRow}>
                <Text style={styles.bulletDot}>・</Text>
                <Text style={styles.bulletText}>{b}</Text>
              </View>
            ))}
          </View>
        ))}
        <Text style={styles.updated}>最終更新日：{updated}</Text>
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const SERIF = Platform.select({
  ios: 'HiraMinProN-W3',
  default: undefined,
}) as string | undefined;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ECECF1',
    backgroundColor: '#FFFFFF',
  },
  backBtn: { minWidth: 64 },
  backBtnText: { fontSize: 17, color: '#4A90D9', fontWeight: '600' },
  headerTitle: {
    flex: 1,
    fontSize: 17,
    fontWeight: '800',
    color: '#1A1A2E',
    textAlign: 'center',
  },
  scroll: { padding: 20 },
  section: { marginBottom: 18 },
  heading: {
    fontSize: 16,
    fontWeight: '800',
    color: '#2D1B69',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 14.5,
    lineHeight: 24,
    color: '#333344',
    marginBottom: 6,
    fontFamily: SERIF,
  },
  bulletRow: { flexDirection: 'row', marginBottom: 4, paddingRight: 4 },
  bulletDot: { fontSize: 14.5, lineHeight: 24, color: '#666', marginRight: 2 },
  bulletText: {
    flex: 1,
    fontSize: 14.5,
    lineHeight: 24,
    color: '#333344',
    fontFamily: SERIF,
  },
  updated: {
    fontSize: 13,
    color: '#9999AA',
    marginTop: 12,
    textAlign: 'right',
  },
});
