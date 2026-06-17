import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SubjectKey } from '../data/questions';

type AnimType = 'bounce' | 'float' | 'pulse' | 'swing' | 'spin' | 'pop';

type Elem = {
  emoji: string;
  left: number;
  top: number;
  size: number;
  anim: AnimType;
  delay: number;
  dur: number;
};

const SCENES: Record<SubjectKey, { bg: [string, string]; elems: Elem[] }> = {
  sansu: {
    bg: ['#FFFDE7', '#FFE082'],
    elems: [
      { emoji: '✏️', left: 6,  top: 8,  size: 76, anim: 'bounce', delay: 0,   dur: 800 },
      { emoji: '📐', left: 50, top: 5,  size: 88, anim: 'swing',  delay: 150, dur: 1100 },
      { emoji: '💡', left: 74, top: 48, size: 72, anim: 'pulse',  delay: 300, dur: 850 },
      { emoji: '⭐', left: 12, top: 60, size: 64, anim: 'pop',    delay: 500, dur: 950 },
      { emoji: '🔢', left: 55, top: 62, size: 60, anim: 'float',  delay: 100, dur: 1300 },
    ],
  },
  kokugo: {
    bg: ['#FCE4EC', '#F8BBD0'],
    elems: [
      { emoji: '📖', left: 8,  top: 6,  size: 88, anim: 'float',  delay: 0,   dur: 1400 },
      { emoji: '🌸', left: 62, top: 5,  size: 72, anim: 'spin',   delay: 200, dur: 3000 },
      { emoji: '✍️', left: 10, top: 58, size: 76, anim: 'bounce', delay: 100, dur: 900 },
      { emoji: '🎭', left: 66, top: 55, size: 64, anim: 'swing',  delay: 400, dur: 1200 },
      { emoji: '💫', left: 38, top: 70, size: 56, anim: 'pop',    delay: 650, dur: 1000 },
    ],
  },
  rika: {
    bg: ['#E8F5E9', '#C8E6C9'],
    elems: [
      { emoji: '🔬', left: 30, top: 5,  size: 92, anim: 'bounce', delay: 0,   dur: 1000 },
      { emoji: '🌱', left: 6,  top: 52, size: 76, anim: 'float',  delay: 200, dur: 1600 },
      { emoji: '🧪', left: 66, top: 38, size: 72, anim: 'swing',  delay: 400, dur: 1100 },
      { emoji: '💧', left: 72, top: 68, size: 60, anim: 'pop',    delay: 600, dur: 750 },
      { emoji: '⚡', left: 18, top: 18, size: 56, anim: 'pulse',  delay: 300, dur: 700 },
    ],
  },
  shakai: {
    bg: ['#FFF8E1', '#FFECB3'],
    elems: [
      { emoji: '🗾', left: 20, top: 8,  size: 88, anim: 'float',  delay: 0,   dur: 1800 },
      { emoji: '🏯', left: 64, top: 5,  size: 76, anim: 'bounce', delay: 200, dur: 1000 },
      { emoji: '🚅', left: 4,  top: 60, size: 68, anim: 'swing',  delay: 400, dur: 900 },
      { emoji: '⛩️', left: 62, top: 57, size: 72, anim: 'pulse',  delay: 100, dur: 1200 },
      { emoji: '🌸', left: 36, top: 72, size: 56, anim: 'pop',    delay: 600, dur: 1100 },
    ],
  },
  eigo: {
    bg: ['#E3F2FD', '#BBDEFB'],
    elems: [
      { emoji: '✈️', left: 4,  top: 10, size: 84, anim: 'swing',  delay: 0,   dur: 1300 },
      { emoji: '🌍', left: 54, top: 6,  size: 88, anim: 'spin',   delay: 0,   dur: 4000 },
      { emoji: '💬', left: 8,  top: 58, size: 72, anim: 'pop',    delay: 300, dur: 1000 },
      { emoji: '⭐', left: 68, top: 60, size: 60, anim: 'bounce', delay: 500, dur: 800 },
      { emoji: '🌟', left: 38, top: 72, size: 52, anim: 'pulse',  delay: 200, dur: 900 },
    ],
  },
};

function AnimEmoji({ e }: { e: Elem }) {
  const v = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const run = () => {
      let loop: Animated.CompositeAnimation;

      if (e.anim === 'bounce' || e.anim === 'float') {
        loop = Animated.loop(
          Animated.sequence([
            Animated.timing(v, { toValue: 1, duration: e.dur / 2, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
            Animated.timing(v, { toValue: 0, duration: e.dur / 2, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
          ])
        );
      } else if (e.anim === 'pulse') {
        loop = Animated.loop(
          Animated.sequence([
            Animated.timing(v, { toValue: 1, duration: e.dur / 2, useNativeDriver: true }),
            Animated.timing(v, { toValue: 0, duration: e.dur / 2, useNativeDriver: true }),
          ])
        );
      } else if (e.anim === 'swing') {
        loop = Animated.loop(
          Animated.sequence([
            Animated.timing(v, { toValue: 1, duration: e.dur / 2, easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
            Animated.timing(v, { toValue: -1, duration: e.dur, easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
            Animated.timing(v, { toValue: 0, duration: e.dur / 2, easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
          ])
        );
      } else if (e.anim === 'spin') {
        loop = Animated.loop(
          Animated.timing(v, { toValue: 1, duration: e.dur, easing: Easing.linear, useNativeDriver: true })
        );
      } else {
        // pop
        loop = Animated.loop(
          Animated.sequence([
            Animated.timing(v, { toValue: 1, duration: e.dur * 0.3, useNativeDriver: true }),
            Animated.timing(v, { toValue: 0.85, duration: e.dur * 0.1, useNativeDriver: true }),
            Animated.timing(v, { toValue: 1, duration: e.dur * 0.1, useNativeDriver: true }),
            Animated.delay(e.dur * 0.5),
          ])
        );
      }
      loop.start();
    };

    const t = setTimeout(run, e.delay);
    return () => clearTimeout(t);
  }, [e, v]);

  let transform: object[];

  if (e.anim === 'bounce') {
    const ty = v.interpolate({ inputRange: [0, 1], outputRange: [0, -12] });
    transform = [{ translateY: ty }];
  } else if (e.anim === 'float') {
    const ty = v.interpolate({ inputRange: [0, 1], outputRange: [0, -8] });
    transform = [{ translateY: ty }];
  } else if (e.anim === 'pulse') {
    const s = v.interpolate({ inputRange: [0, 1], outputRange: [1, 1.25] });
    transform = [{ scale: s }];
  } else if (e.anim === 'swing') {
    const r = v.interpolate({ inputRange: [-1, 0, 1], outputRange: ['-18deg', '0deg', '18deg'] });
    transform = [{ rotate: r }];
  } else if (e.anim === 'spin') {
    const r = v.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] });
    transform = [{ rotate: r }];
  } else {
    const s = v.interpolate({ inputRange: [0, 0.85, 1], outputRange: [0.7, 0.9, 1.1] });
    transform = [{ scale: s }];
  }

  return (
    <Animated.Text
      style={[
        styles.emoji,
        {
          left: `${e.left}%` as any,
          top: `${e.top}%` as any,
          fontSize: e.size,
          transform,
        },
      ]}
    >
      {e.emoji}
    </Animated.Text>
  );
}

type Props = { subject: SubjectKey };

export default function SubjectScene({ subject }: Props) {
  const scene = SCENES[subject];

  return (
    <LinearGradient colors={scene.bg} style={styles.container}>
      {scene.elems.map((e, i) => (
        <AnimEmoji key={i} e={e} />
      ))}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  emoji: {
    position: 'absolute',
  },
});
