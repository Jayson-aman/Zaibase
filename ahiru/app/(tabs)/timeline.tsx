import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { ERAS, EVENTS, type Era } from '../../data/timeline';
import { getPortraitsForPerson, getEventImages } from '../../data/history-portraits';
import { historyImages } from '../../data/historyImages';

export default function TimelineScreen() {
  const router = useRouter();
  const [selectedEra, setSelectedEra] = useState<Era>('明治・大正');

  const events = EVENTS[selectedEra];
  const eraInfo = ERAS.find((e) => e.key === selectedEra)!;

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, { backgroundColor: eraInfo.color }]}>
        <Text style={styles.headerEmoji}>{eraInfo.emoji}</Text>
        <View style={{ flex: 1 }}>
          <Text style={styles.headerTitle}>📅 歴史年表</Text>
          <Text style={styles.headerSub}>時代の流れを一覧で学ぶ</Text>
        </View>
        <TouchableOpacity
          style={styles.songBtn}
          onPress={() => router.push(`/songs?tab=歴史&era=${encodeURIComponent(selectedEra)}`)}
          activeOpacity={0.85}
        >
          <Text style={styles.songBtnText}>🎵 この時代の替え歌</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.eraScrollWrap}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.eraScroll} contentContainerStyle={styles.eraScrollContent}>
          {ERAS.map((era) => (
            <TouchableOpacity
              key={era.key}
              style={[styles.eraChip, selectedEra === era.key && { backgroundColor: era.color }]}
              onPress={() => setSelectedEra(era.key)}
              activeOpacity={0.8}
            >
              <Text style={styles.eraChipEmoji}>{era.emoji}</Text>
              <Text style={[styles.eraChipText, selectedEra === era.key && styles.eraChipTextActive]} numberOfLines={1}>
                {era.key}
              </Text>
              <Text style={[styles.eraChipPeriod, selectedEra === era.key && { color: 'rgba(255,255,255,0.8)' }]}>
                {era.period}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <LinearGradient
          colors={['rgba(255,255,255,0)', '#FFFFFF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.eraScrollFade}
          pointerEvents="none"
        />
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <View style={[styles.eraHeader, { backgroundColor: eraInfo.color + '22', borderColor: eraInfo.color }]}>
          <Text style={styles.eraHeaderEmoji}>{eraInfo.emoji}</Text>
          <View>
            <Text style={[styles.eraHeaderTitle, { color: eraInfo.color }]}>{eraInfo.key}</Text>
            <Text style={styles.eraHeaderPeriod}>{eraInfo.period}</Text>
          </View>
        </View>

        {events.map((ev, i) => {
          const portraits = getPortraitsForPerson(ev.person);
          const eventImages = getEventImages(`${ev.event} ${ev.note}`);
          const illust = ev.img != null && historyImages[ev.img] != null
            ? [{ key: `img-${ev.img}`, image: historyImages[ev.img], label: null, caption: 'イメージイラスト（教育用に作成した想像図。実物・実写ではありません）' }]
            : [];
          const images = [
            ...portraits.map((p) => ({ key: `person-${p.person}`, image: p.image, label: p.person, caption: p.caption })),
            ...eventImages.map((e, idx) => ({ key: `event-${e.eventMatch}-${idx}`, image: e.image, label: null, caption: e.caption })),
            ...illust,
          ];
          return (
            <View key={i} style={styles.eventRow}>
              <View style={[styles.eventDot, { backgroundColor: eraInfo.color }]} />
              <View style={[styles.eventLine, i === events.length - 1 && styles.eventLineHidden, { backgroundColor: eraInfo.color + '44' }]} />
              <View style={styles.eventCard}>
                <View style={styles.eventCardInner}>
                  <View style={styles.eventCardText}>
                    <Text style={[styles.eventYear, { color: eraInfo.color }]}>{ev.year}</Text>
                    {ev.person != null && (
                      <View style={[styles.personChip, { backgroundColor: eraInfo.color + '18', borderColor: eraInfo.color + '55' }]}>
                        <Text style={[styles.personChipText, { color: eraInfo.color }]}>👤 {ev.person}</Text>
                      </View>
                    )}
                    <Text style={styles.eventTitle}>{ev.event}</Text>
                    <Text style={styles.eventNote}>{ev.note}</Text>
                    {ev.goroawase != null && (
                      <View style={styles.goroawaseBox}>
                        <Text style={styles.goroawaseText}>🎵 {ev.goroawase}</Text>
                      </View>
                    )}
                  </View>
                  {images.length > 0 && (
                    <View style={styles.portraitStack}>
                      {images.map((img) => (
                        <Image key={img.key} source={img.image} style={styles.portraitImage} resizeMode="cover" />
                      ))}
                    </View>
                  )}
                </View>
                {images.map((img) => (
                  <Text key={img.key} style={styles.portraitCaption}>
                    🖼 {img.label != null ? `${img.label}：` : ''}{img.caption}
                  </Text>
                ))}
              </View>
            </View>
          );
        })}

        <TouchableOpacity onPress={() => router.push('/credits')} activeOpacity={0.7}>
          <Text style={styles.creditsLink}>画像クレジットを見る →</Text>
        </TouchableOpacity>
        <View style={{ height: 120 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  header: {
    paddingTop: 16,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  headerEmoji: { fontSize: 40 },
  headerTitle: { fontSize: 22, fontWeight: '900', color: '#FFFFFF' },
  songBtn: { backgroundColor: 'rgba(255,255,255,0.25)', borderRadius: 999, paddingHorizontal: 12, paddingVertical: 8, maxWidth: 120 },
  songBtnText: { color: '#FFFFFF', fontWeight: '800', fontSize: 12, textAlign: 'center' },
  headerSub: { fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: '500', marginTop: 2 },
  eraScrollWrap: { backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderBottomColor: '#E5EAF0' },
  eraScroll: { flexGrow: 0 },
  eraScrollContent: { padding: 10, paddingRight: 30, gap: 8, flexDirection: 'row' },
  eraScrollFade: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 28,
  },
  eraChip: {
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: '#F0F3F7',
    minWidth: 80,
  },
  eraChipEmoji: { fontSize: 18, marginBottom: 2 },
  eraChipText: { fontSize: 10, fontWeight: '700', color: '#444', textAlign: 'center' },
  eraChipTextActive: { color: '#FFFFFF' },
  eraChipPeriod: { fontSize: 9, color: '#888', marginTop: 2, textAlign: 'center' },
  scroll: { flex: 1 },
  content: { padding: 16 },
  eraHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderRadius: 14,
    borderWidth: 1.5,
    padding: 14,
    marginBottom: 20,
  },
  eraHeaderEmoji: { fontSize: 36 },
  eraHeaderTitle: { fontSize: 20, fontWeight: '900' },
  eraHeaderPeriod: { fontSize: 13, color: '#666', fontWeight: '500', marginTop: 2 },
  eventRow: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  eventDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginTop: 4,
    marginRight: 12,
    flexShrink: 0,
    zIndex: 2,
  },
  eventLine: {
    position: 'absolute',
    left: 6,
    top: 18,
    width: 2,
    bottom: -4,
    zIndex: 1,
  },
  eventLineHidden: { opacity: 0 },
  eventCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  eventCardInner: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', gap: 12 },
  eventCardText: { flex: 1, minWidth: 160 },
  portraitStack: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, flexShrink: 0 },
  portraitImage: {
    width: 56,
    height: 74,
    borderRadius: 8,
    backgroundColor: '#F0F3F7',
    flexShrink: 0,
  },
  portraitCaption: { fontSize: 11, color: '#94A3B8', marginTop: 8, fontStyle: 'italic' },
  creditsLink: { fontSize: 12, color: '#64748B', textAlign: 'center', marginTop: 4, textDecorationLine: 'underline' },
  eventYear: { fontSize: 12, fontWeight: '800', marginBottom: 4 },
  personChip: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginBottom: 6,
  },
  personChipText: { fontSize: 12, fontWeight: '800' },
  eventTitle: { fontSize: 16, fontWeight: '800', color: '#1A1A2E', marginBottom: 6 },
  eventNote: { fontSize: 13, color: '#555', lineHeight: 20, fontWeight: '400' },
  goroawaseBox: {
    backgroundColor: '#FFFBEB',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FDE68A',
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  goroawaseText: { fontSize: 12.5, color: '#92400E', fontWeight: '700' },
});
