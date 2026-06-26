import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';

const SERIF = Platform.select({
  ios: 'HiraMinProN-W6',
  web: '"Hiragino Mincho ProN", "Yu Mincho", "Noto Serif JP", Georgia, serif',
  default: undefined,
}) as string | undefined;
import { LinearGradient } from 'expo-linear-gradient';
import { SubjectKey, subjectInfo } from '../data/questions-meta';
import SubjectScene from './SubjectScene';

type Props = {
  subject: SubjectKey;
  onPress: () => void;
  questionCount: number;
};

function lightenColor(hex: string): string {
  const map: Record<string, string> = {
    '#4A90D9': '#7AB5E8',
    '#E74C3C': '#EF7F73',
    '#27AE60': '#5CC98A',
    '#F39C12': '#F7BC50',
    '#9B59B6': '#B07CC8',
  };
  return map[hex] ?? hex;
}

const SUBJECT_SCENE: Record<SubjectKey, { emoji1: string; emoji2: string; label: string }> = {
  sansu: { emoji1: '✏️', emoji2: '📐', label: '式を解く' },
  kokugo: { emoji1: '📖', emoji2: '✍️', label: '読む・書く' },
  rika: { emoji1: '🔬', emoji2: '🌱', label: '実験・観察' },
  shakai: { emoji1: '🗾', emoji2: '📜', label: '地図・歴史' },
  eigo: { emoji1: '💬', emoji2: '🌍', label: '話す・聞く' },
};

export default function SubjectCard({ subject, onPress, questionCount }: Props) {
  const info = subjectInfo[subject];
  const lightColor = lightenColor(info.color);
  const scene = SUBJECT_SCENE[subject];

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.82}
      style={styles.wrapper}
    >
      <LinearGradient
        colors={[info.color, lightColor]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        <View style={styles.mascotArea}>
          <SubjectScene subject={subject} />
        </View>

        <Text style={styles.name}>{info.name}</Text>
        <Text style={styles.sceneLabel}>{scene.label}</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{questionCount}問</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.22,
    shadowRadius: 12,
    elevation: 7,
    borderRadius: 24,
  },
  card: {
    borderRadius: 24,
    paddingTop: 0,
    paddingBottom: 22,
    paddingHorizontal: 0,
    alignItems: 'center',
    overflow: 'hidden',
  },
  mascotArea: {
    width: '100%',
    height: 320,
    overflow: 'hidden',
    marginBottom: 14,
  },
  name: {
    fontSize: 42,
    fontWeight: '900',
    color: '#FFFFFF',
    marginBottom: 6,
    letterSpacing: 1,
    fontFamily: SERIF,
  },
  sceneLabel: {
    fontSize: 26,
    color: 'rgba(255,255,255,0.85)',
    fontWeight: '700',
    marginBottom: 14,
  },
  badge: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderRadius: 18,
  },
  badgeText: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: '800',
  },
});
