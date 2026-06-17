import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SubjectKey, subjectInfo } from '../data/questions';
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

  const bounceAnim = useRef(new Animated.Value(0)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, { toValue: -8, duration: 700, useNativeDriver: true }),
        Animated.timing(bounceAnim, { toValue: 0, duration: 700, useNativeDriver: true }),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(rotateAnim, { toValue: 1, duration: 2000, useNativeDriver: true }),
        Animated.timing(rotateAnim, { toValue: 0, duration: 2000, useNativeDriver: true }),
      ])
    ).start();
  }, [bounceAnim, rotateAnim]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['-8deg', '8deg'],
  });

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

        <View style={styles.sceneRow}>
          <Animated.Text
            style={[styles.sceneEmoji, { transform: [{ translateY: bounceAnim }] }]}
          >
            {scene.emoji1}
          </Animated.Text>
          <Animated.Text
            style={[styles.sceneEmoji, { transform: [{ rotate }] }]}
          >
            {scene.emoji2}
          </Animated.Text>
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
    width: '47%',
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 18,
  },
  card: {
    borderRadius: 18,
    paddingTop: 8,
    paddingBottom: 16,
    paddingHorizontal: 8,
    alignItems: 'center',
    overflow: 'hidden',
  },
  mascotArea: {
    width: '100%',
    height: 240,
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 6,
  },
  sceneRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 6,
    height: 88,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sceneEmoji: {
    fontSize: 64,
  },
  name: {
    fontSize: 34,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 4,
    letterSpacing: 1,
  },
  sceneLabel: {
    fontSize: 20,
    color: 'rgba(255,255,255,0.85)',
    fontWeight: '600',
    marginBottom: 10,
  },
  badge: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 14,
  },
  badgeText: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
