import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import type { MangaScript, MangaSpeaker } from '../data/manga-types';

type SpeakerInfo = {
  name: string;
  emoji: string;
  color: string;
  bg: string;
  align: 'flex-start' | 'flex-end' | 'center';
};

const SPEAKERS: Record<MangaSpeaker, SpeakerInfo> = {
  s1: { name: 'リク', emoji: '🧑', color: '#1D5FA8', bg: '#EAF3FC', align: 'flex-start' },
  s2: { name: 'ミオ', emoji: '👧', color: '#C0392B', bg: '#FCEEEC', align: 'flex-end' },
  t: { name: '先生', emoji: '🧑‍🏫', color: '#1B7A4A', bg: '#EAF8EF', align: 'center' },
};

type Props = {
  script: MangaScript;
};

export default function MangaDialogue({ script }: Props) {
  const [index, setIndex] = useState(0);
  const panel = script.panels[index];
  const info = SPEAKERS[panel.speaker];
  const total = script.panels.length;
  const isLast = index >= total - 1;

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerLabel}>🎬 マンガで探求</Text>
        <Text style={styles.counter}>{index + 1} / {total}</Text>
      </View>

      <View style={styles.dots}>
        {script.panels.map((_, i) => (
          <View
            key={i}
            style={[styles.dot, i === index && styles.dotActive, i < index && styles.dotDone]}
          />
        ))}
      </View>

      <View
        style={[
          styles.panel,
          { backgroundColor: info.bg, borderColor: info.color },
          panel.emphasis && styles.panelEmphasis,
        ]}
      >
        <View style={[styles.speakerRow, { justifyContent: info.align === 'flex-end' ? 'flex-end' : 'flex-start' }]}>
          <View style={[styles.avatar, { backgroundColor: info.color }]}>
            <Text style={styles.avatarEmoji}>{info.emoji}</Text>
          </View>
          <Text style={[styles.speakerName, { color: info.color }]}>{info.name}</Text>
        </View>
        <Text style={[styles.line, panel.emphasis && styles.lineEmphasis]}>{panel.line}</Text>
      </View>

      <View style={styles.navRow}>
        <TouchableOpacity
          style={[styles.navBtn, styles.navBtnBack, index === 0 && styles.navBtnDisabled]}
          onPress={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
          activeOpacity={0.8}
        >
          <Text style={[styles.navBtnText, styles.navBtnBackText]}>◀ もどる</Text>
        </TouchableOpacity>
        {!isLast && (
          <TouchableOpacity
            style={styles.navBtn}
            onPress={() => setIndex((i) => Math.min(total - 1, i + 1))}
            activeOpacity={0.8}
          >
            <Text style={styles.navBtnText}>つぎへ →</Text>
          </TouchableOpacity>
        )}
        {isLast && (
          <TouchableOpacity style={styles.navBtn} onPress={() => setIndex(0)} activeOpacity={0.8}>
            <Text style={styles.navBtnText}>🔁 もう一度読む</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    backgroundColor: '#FAF6EF',
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E8DCC8',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  headerLabel: { fontSize: 13, fontWeight: '800', color: '#8B5A38' },
  counter: { fontSize: 12, fontWeight: '700', color: '#9C9186' },
  dots: {
    flexDirection: 'row',
    gap: 4,
    marginBottom: 10,
  },
  dot: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#E8DCC8',
  },
  dotDone: { backgroundColor: '#C7B9A6' },
  dotActive: { backgroundColor: '#B5622E' },
  panel: {
    borderRadius: 12,
    borderWidth: 1.5,
    padding: 14,
    minHeight: 120,
    justifyContent: 'center',
  },
  panelEmphasis: {
    borderWidth: 2.5,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  speakerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 6,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarEmoji: { fontSize: 15 },
  speakerName: { fontSize: 13, fontWeight: '800' },
  line: {
    fontSize: 15.5,
    lineHeight: 24,
    color: '#2B2420',
    fontWeight: '600',
  },
  lineEmphasis: {
    fontSize: 17,
    fontWeight: '800',
    color: '#221C18',
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
    marginTop: 12,
  },
  navBtn: {
    backgroundColor: '#B5622E',
    borderRadius: 8,
    paddingVertical: 9,
    paddingHorizontal: 16,
  },
  navBtnBack: {
    backgroundColor: '#EFE7D8',
  },
  navBtnDisabled: {
    opacity: 0.4,
  },
  navBtnText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 13.5,
  },
  navBtnBackText: {
    color: '#8B5A38',
  },
});
