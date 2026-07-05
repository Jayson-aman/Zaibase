import React, { useEffect } from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  ImageStyle,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

export type MascotAnimation = 'none' | 'float' | 'pulse' | 'bounce';

type Props = {
  source?: ImageSourcePropType;
  uri?: string;
  style?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  fallbackEmoji?: string;
  accessibilityLabel?: string;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'center';
  animation?: MascotAnimation;
};

const AnimatedImage = Animated.createAnimatedComponent(Image);

export default function AnimatedMascot({
  source,
  uri,
  style,
  containerStyle,
  fallbackEmoji = '📚',
  accessibilityLabel,
  resizeMode = 'cover',
  animation = 'float',
}: Props) {
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);

  useEffect(() => {
    if (animation === 'none') return;

    if (animation === 'float') {
      translateY.value = withRepeat(
        withSequence(
          withTiming(-7, { duration: 1400, easing: Easing.inOut(Easing.sin) }),
          withTiming(0, { duration: 1400, easing: Easing.inOut(Easing.sin) }),
        ),
        -1,
        false,
      );
      return;
    }

    if (animation === 'pulse') {
      scale.value = withRepeat(
        withSequence(
          withTiming(1.06, { duration: 700, easing: Easing.inOut(Easing.quad) }),
          withTiming(1, { duration: 700, easing: Easing.inOut(Easing.quad) }),
        ),
        -1,
        false,
      );
      return;
    }

    if (animation === 'bounce') {
      translateY.value = withRepeat(
        withSequence(
          withTiming(-12, { duration: 450, easing: Easing.out(Easing.quad) }),
          withTiming(0, { duration: 450, easing: Easing.bounce }),
        ),
        -1,
        false,
      );
    }
  }, [animation, scale, translateY]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: translateY.value },
      { scale: scale.value },
    ],
  }));

  if (!source && !uri) {
    return (
      <View style={[styles.fallback, containerStyle, style as ViewStyle]}>
        <Text style={styles.fallbackEmoji}>{fallbackEmoji}</Text>
      </View>
    );
  }

  return (
    <View style={containerStyle}>
      <AnimatedImage
        source={source ?? { uri: uri! }}
        style={[style, animation !== 'none' && animatedStyle]}
        resizeMode={resizeMode}
        accessibilityLabel={accessibilityLabel}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fallback: {
    backgroundColor: '#EEF4FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fallbackEmoji: {
    fontSize: 40,
  },
});
