import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, Animated, Easing, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SubjectKey } from '../data/questions-meta';

// 明朝体フォント（iOS: HiraMinProN-W6, Web: Hiragino Mincho等）
const SERIF = Platform.select({
  ios:     'HiraMinProN-W6',
  android: undefined,
  web:     '"Hiragino Mincho ProN", "Yu Mincho", "Noto Serif JP", Georgia, serif',
  default: undefined,
}) as string | undefined;

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

type TextDecorItem = {
  text: string;
  left: number;   // %
  top: number;    // %
  size: number;
  color: string;
  rotate?: number;
  bold?: boolean;
};

type PhotoItem = {
  uri: string;
  left: number;   // %
  top: number;    // %
  w: number;      // %
  h: number;      // %
  opacity?: number;
  radius?: number;
};

const SCENES: Record<SubjectKey, {
  bg: [string, string];
  elems: Elem[];
  texts?: TextDecorItem[];
  photos?: PhotoItem[];
}> = {
  sansu: {
    bg: ['#FFFDE7', '#FFE082'],
    elems: [
      { emoji: '✏️', left: 6,  top: 8,  size: 76, anim: 'bounce', delay: 0,   dur: 800  },
      { emoji: '📐', left: 50, top: 5,  size: 88, anim: 'swing',  delay: 150, dur: 1100 },
      { emoji: '💡', left: 74, top: 48, size: 72, anim: 'pulse',  delay: 300, dur: 850  },
      { emoji: '⭐', left: 12, top: 60, size: 64, anim: 'pop',    delay: 500, dur: 950  },
      { emoji: '🔢', left: 55, top: 62, size: 60, anim: 'float',  delay: 100, dur: 1300 },
    ],
    // シルバー数式オーバーレイ
    texts: [
      { text: 'a²+b²=c²',   left: 2,  top: 27, size: 18, color: 'rgba(90,100,150,0.82)',  rotate: -14, bold: true },
      { text: 'y = ax + b', left: 38, top: 11, size: 15, color: 'rgba(80,90,140,0.75)',   rotate: 9,   bold: true },
      { text: '√2 ≈ 1.414', left: 45, top: 56, size: 13, color: 'rgba(95,105,155,0.68)', rotate: -5               },
      { text: 'π',           left: 79, top: 29, size: 42, color: 'rgba(110,120,165,0.55)', rotate: 7               },
      { text: 'x²+y²=r²',   left: 4,  top: 76, size: 13, color: 'rgba(88,98,148,0.65)',  rotate: 11              },
      { text: '∑',           left: 83, top: 70, size: 44, color: 'rgba(105,115,160,0.48)', rotate: -4              },
    ],
  },
  kokugo: {
    // 教科書体・クリームペーパー背景
    bg: ['#FBF7EF', '#F2E8D5'],
    elems: [
      { emoji: '📖', left: 8,  top: 6,  size: 88, anim: 'float',  delay: 0,   dur: 1400 },
      { emoji: '🌸', left: 62, top: 5,  size: 72, anim: 'spin',   delay: 200, dur: 3000 },
      { emoji: '✍️', left: 10, top: 58, size: 76, anim: 'bounce', delay: 100, dur: 900  },
      { emoji: '🎭', left: 66, top: 55, size: 64, anim: 'swing',  delay: 400, dur: 1200 },
      { emoji: '💫', left: 38, top: 70, size: 56, anim: 'pop',    delay: 650, dur: 1000 },
    ],
    // 大きな半透明漢字（水墨画風）
    texts: [
      { text: '春',   left: 2,  top: 1,  size: 84, color: 'rgba(130,35,50,0.11)',  rotate: 0 },
      { text: '秋',   left: 65, top: 3,  size: 70, color: 'rgba(110,30,45,0.09)',  rotate: -2 },
      { text: '心',   left: 30, top: 46, size: 62, color: 'rgba(120,33,48,0.08)',  rotate: 3  },
      { text: '読む', left: 68, top: 63, size: 21, color: 'rgba(90,25,40,0.52)',   rotate: 0, bold: true },
      { text: '書く', left: 5,  top: 74, size: 21, color: 'rgba(90,25,40,0.50)',   rotate: 0, bold: true },
      { text: '詩',   left: 46, top: 30, size: 44, color: 'rgba(100,28,43,0.07)',  rotate: -1 },
    ],
  },
  rika: {
    bg: ['#E8F5E9', '#C8E6C9'],
    elems: [
      { emoji: '🔬', left: 28, top: 4,  size: 96, anim: 'bounce', delay: 0,   dur: 1000 },
      { emoji: '🧬', left: 4,  top: 52, size: 76, anim: 'float',  delay: 200, dur: 1600 },
      { emoji: '🧪', left: 66, top: 38, size: 72, anim: 'swing',  delay: 400, dur: 1100 },
      { emoji: '🔍', left: 68, top: 66, size: 62, anim: 'pop',    delay: 600, dur: 750  },
      { emoji: '⚡', left: 18, top: 18, size: 56, anim: 'pulse',  delay: 300, dur: 700  },
    ],
    // 化学式・科学記号
    texts: [
      { text: 'H₂O',   left: 8,  top: 14, size: 22, color: 'rgba(18,110,55,0.58)', rotate: -9,  bold: true },
      { text: 'CO₂',   left: 60, top: 72, size: 20, color: 'rgba(18,110,55,0.52)', rotate: 10,  bold: true },
      { text: 'DNA',   left: 50, top: 8,  size: 18, color: 'rgba(18,110,55,0.48)', rotate: 5               },
      { text: 'E=mc²', left: 2,  top: 34, size: 15, color: 'rgba(18,110,55,0.45)', rotate: -5,  bold: true },
    ],
  },
  shakai: {
    bg: ['#FFF8E1', '#FFECB3'],
    elems: [
      { emoji: '🗾', left: 20, top: 8,  size: 88, anim: 'float',  delay: 0,   dur: 1800 },
      { emoji: '🏯', left: 64, top: 5,  size: 76, anim: 'bounce', delay: 200, dur: 1000 },
      { emoji: '🚅', left: 4,  top: 60, size: 68, anim: 'swing',  delay: 400, dur: 900  },
      { emoji: '⛩️', left: 62, top: 57, size: 72, anim: 'pulse',  delay: 100, dur: 1200 },
      { emoji: '🌸', left: 36, top: 72, size: 56, anim: 'pop',    delay: 600, dur: 1100 },
    ],
    texts: [
      { text: '日本', left: 68, top: 28, size: 28, color: 'rgba(130,80,10,0.38)', rotate: 5,  bold: true },
      { text: '歴史', left: 4,  top: 20, size: 26, color: 'rgba(130,80,10,0.35)', rotate: -8, bold: true },
      { text: '地理', left: 42, top: 68, size: 22, color: 'rgba(130,80,10,0.40)', rotate: 4,  bold: true },
    ],
    photos: [
      // 二条城（京都・世界文化遺産）
      {
        uri: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nijo-jo_Castle.jpg',
        left: 2, top: 28, w: 44, h: 38, opacity: 0.84, radius: 10,
      },
      // 四日市コンビナート（工場地帯・公害の歴史）
      {
        uri: 'https://commons.wikimedia.org/wiki/Special:FilePath/Yokkaichi-Nw.JPG',
        left: 52, top: 33, w: 44, h: 32, opacity: 0.80, radius: 10,
      },
    ],
  },
  eigo: {
    bg: ['#E3F2FD', '#BBDEFB'],
    elems: [
      { emoji: '✈️', left: 4,  top: 10, size: 84, anim: 'swing',  delay: 0,   dur: 1300 },
      { emoji: '🌍', left: 54, top: 6,  size: 88, anim: 'spin',   delay: 0,   dur: 4000 },
      { emoji: '💬', left: 8,  top: 58, size: 72, anim: 'pop',    delay: 300, dur: 1000 },
      { emoji: '⭐', left: 68, top: 60, size: 60, anim: 'bounce', delay: 500, dur: 800  },
      { emoji: '🌟', left: 38, top: 72, size: 52, anim: 'pulse',  delay: 200, dur: 900  },
    ],
    texts: [
      { text: 'Hello!',  left: 48, top: 48, size: 20, color: 'rgba(15,70,170,0.48)', rotate: 9,  bold: true },
      { text: 'ABC',     left: 4,  top: 22, size: 28, color: 'rgba(15,70,170,0.42)', rotate: -8 },
      { text: 'English', left: 4,  top: 74, size: 15, color: 'rgba(15,70,170,0.38)', rotate: 5  },
    ],
    photos: [
      // 国連本部（ニューヨーク）
      {
        uri: 'https://commons.wikimedia.org/wiki/Special:FilePath/United_Nations_Headquarters_in_New_York_City.jpg',
        left: 38, top: 28, w: 56, h: 40, opacity: 0.82, radius: 10,
      },
      // ビッグベン（英国・英語圏の象徴）
      {
        uri: 'https://commons.wikimedia.org/wiki/Special:FilePath/Big_Ben_2013.jpg',
        left: 2, top: 30, w: 36, h: 38, opacity: 0.80, radius: 10,
      },
    ],
  },
};

// ── テキスト装飾コンポーネント ─────────────────────────────
function TextDecor({ t }: { t: TextDecorItem }) {
  return (
    <Text
      style={[
        styles.textDecor,
        {
          left:       `${t.left}%` as any,
          top:        `${t.top}%` as any,
          fontSize:   t.size,
          color:      t.color,
          fontFamily: SERIF,
          fontWeight: t.bold ? '700' : '400',
          transform:  t.rotate ? [{ rotate: `${t.rotate}deg` }] : undefined,
        },
      ]}
    >
      {t.text}
    </Text>
  );
}

// ── 写真コンポーネント ─────────────────────────────────────
function PhotoDecor({ p }: { p: PhotoItem }) {
  const [err, setErr] = useState(false);
  if (err) return null;
  return (
    <Image
      source={{ uri: p.uri }}
      style={[
        styles.photo,
        {
          left:         `${p.left}%` as any,
          top:          `${p.top}%` as any,
          width:        `${p.w}%` as any,
          height:       `${p.h}%` as any,
          opacity:      p.opacity ?? 0.85,
          borderRadius: p.radius ?? 10,
        },
      ]}
      resizeMode="cover"
      onError={() => setErr(true)}
    />
  );
}

// ── アニメーション絵文字コンポーネント ──────────────────────
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
            Animated.timing(v, { toValue: 1,  duration: e.dur / 2, easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
            Animated.timing(v, { toValue: -1, duration: e.dur,     easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
            Animated.timing(v, { toValue: 0,  duration: e.dur / 2, easing: Easing.inOut(Easing.quad), useNativeDriver: true }),
          ])
        );
      } else if (e.anim === 'spin') {
        loop = Animated.loop(
          Animated.timing(v, { toValue: 1, duration: e.dur, easing: Easing.linear, useNativeDriver: true })
        );
      } else {
        loop = Animated.loop(
          Animated.sequence([
            Animated.timing(v, { toValue: 1,    duration: e.dur * 0.3, useNativeDriver: true }),
            Animated.timing(v, { toValue: 0.85, duration: e.dur * 0.1, useNativeDriver: true }),
            Animated.timing(v, { toValue: 1,    duration: e.dur * 0.1, useNativeDriver: true }),
            Animated.delay(e.dur * 0.5),
          ])
        );
      }
      loop.start();
    };
    const t = setTimeout(run, e.delay);
    return () => clearTimeout(t);
  }, [e, v]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let transform: any[];
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
          left:      `${e.left}%` as any,
          top:       `${e.top}%` as any,
          fontSize:  e.size,
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
      {/* 写真（最背面） */}
      {scene.photos?.map((p, i) => <PhotoDecor key={`p${i}`} p={p} />)}
      {/* テキスト装飾 */}
      {scene.texts?.map((t, i) => <TextDecor key={`t${i}`} t={t} />)}
      {/* アニメーション絵文字（前面） */}
      {scene.elems.map((e, i) => <AnimEmoji key={i} e={e} />)}
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
  textDecor: {
    position: 'absolute',
    includeFontPadding: false,
  },
  photo: {
    position: 'absolute',
  },
});
