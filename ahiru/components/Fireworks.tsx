import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View, Text, Easing } from 'react-native';

// ───────────────────────────────────────────────────────────────
// 正解したときのお祝い「花火」演出（純JS Animated・ネイティブ依存なし）
// 複数の色付きパーティクルが中心から放射状に飛び散り、フェードアウトする。
// Web・iOS・Android すべてで動く。onDone で親に終了を通知する。
// ───────────────────────────────────────────────────────────────

const COLORS = ['#FF5252', '#FFD740', '#69F0AE', '#40C4FF', '#E040FB', '#FF6E40', '#FFFFFF'];
const PARTICLES = 22;

type Burst = { x: number; y: number; delay: number };

// 画面内の3か所で時間差に花火を打ち上げる
const BURSTS: Burst[] = [
  { x: 0, y: -60, delay: 0 },
  { x: -90, y: 30, delay: 220 },
  { x: 90, y: -10, delay: 400 },
];

function Particle({
  angle,
  color,
  distance,
  delay,
}: {
  angle: number;
  color: string;
  distance: number;
  delay: number;
}) {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 900,
      delay,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  }, [progress, delay]);

  const dx = Math.cos(angle) * distance;
  const dy = Math.sin(angle) * distance;

  const translateX = progress.interpolate({ inputRange: [0, 1], outputRange: [0, dx] });
  const translateY = progress.interpolate({ inputRange: [0, 1], outputRange: [0, dy] });
  const opacity = progress.interpolate({ inputRange: [0, 0.7, 1], outputRange: [1, 1, 0] });
  const scale = progress.interpolate({ inputRange: [0, 0.5, 1], outputRange: [0.4, 1, 0.6] });

  return (
    <Animated.View
      style={[
        styles.particle,
        { backgroundColor: color, opacity, transform: [{ translateX }, { translateY }, { scale }] },
      ]}
    />
  );
}

function BurstView({ burst }: { burst: Burst }) {
  return (
    <View style={[styles.burstCenter, { transform: [{ translateX: burst.x }, { translateY: burst.y }] }]}>
      {Array.from({ length: PARTICLES }).map((_, i) => (
        <Particle
          key={i}
          angle={(Math.PI * 2 * i) / PARTICLES}
          color={COLORS[i % COLORS.length]}
          distance={70 + (i % 4) * 18}
          delay={burst.delay}
        />
      ))}
    </View>
  );
}

export default function Fireworks({ onDone }: { onDone?: () => void }) {
  const bannerScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.spring(bannerScale, { toValue: 1, friction: 5, tension: 120, useNativeDriver: true }),
      Animated.delay(700),
      Animated.timing(bannerScale, { toValue: 0, duration: 250, useNativeDriver: true }),
    ]).start();

    const t = setTimeout(() => onDone?.(), 1600);
    return () => clearTimeout(t);
  }, [bannerScale, onDone]);

  return (
    <View style={styles.overlay} pointerEvents="none">
      {BURSTS.map((b, i) => (
        <BurstView key={i} burst={b} />
      ))}
      <Animated.View style={[styles.banner, { transform: [{ scale: bannerScale }] }]}>
        <Text style={styles.bannerEmoji}>🎆</Text>
        <Text style={styles.bannerText}>正解！</Text>
        <Text style={styles.bannerEmoji}>🎉</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  burstCenter: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 0,
    height: 0,
  },
  particle: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: 'rgba(0,166,81,0.95)',
    paddingHorizontal: 28,
    paddingVertical: 16,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  bannerEmoji: { fontSize: 34 },
  bannerText: {
    fontSize: 34,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 2,
  },
});
