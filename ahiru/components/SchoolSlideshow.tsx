import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { schoolSlides } from '../data/schools';

const SLIDE_INTERVAL_MS = 4000;
const FADE_MS = 900;

type Props = {
  children: React.ReactNode;
};

export default function SchoolSlideshow({ children }: Props) {
  const [index, setIndex] = useState(0);
  const opacity = useRef(new Animated.Value(1)).current;
  const indexRef = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: FADE_MS,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (!finished) return;
        const next = (indexRef.current + 1) % schoolSlides.length;
        indexRef.current = next;
        setIndex(next);
        Animated.timing(opacity, {
          toValue: 1,
          duration: FADE_MS,
          useNativeDriver: true,
        }).start();
      });
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [opacity]);

  const slide = schoolSlides[index];

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.imageWrap, { opacity }]}>
        <Image
          source={{ uri: slide.imageUrl }}
          style={styles.image}
          resizeMode="cover"
          accessibilityLabel={slide.name}
        />
      </Animated.View>

      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.55)']}
        style={styles.overlay}
      />

      <View style={styles.labelWrap}>
        <Text style={styles.region}>{slide.region}</Text>
        <Text style={styles.schoolName}>{slide.name}</Text>
      </View>

      <View style={styles.content}>{children}</View>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    minHeight: 220,
  },
  imageWrap: {
    ...StyleSheet.absoluteFill,
  },
  image: {
    width,
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFill,
  },
  labelWrap: {
    position: 'absolute',
    bottom: 12,
    left: 16,
    right: 16,
    zIndex: 2,
  },
  region: {
    fontSize: 11,
    fontWeight: '700',
    color: 'rgba(255,255,255,0.75)',
    letterSpacing: 1,
    marginBottom: 2,
  },
  schoolName: {
    fontSize: 15,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.5,
    textShadowColor: 'rgba(0,0,0,0.4)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 28,
    alignItems: 'center',
    zIndex: 3,
  },
});
