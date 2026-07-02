import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SubjectKey, subjectInfo } from '../data/questions-meta';

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

export default function SubjectCard({ subject, onPress, questionCount }: Props) {
  const info = subjectInfo[subject];
  const lightColor = lightenColor(info.color);

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
        <Text style={styles.name}>{info.name}</Text>
        <Text style={styles.badgeText}>{questionCount}問</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
    borderRadius: 20,
  },
  card: {
    borderRadius: 20,
    paddingVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 32,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 1,
    marginBottom: 4,
  },
  badgeText: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.85)',
    fontWeight: '700',
  },
});
