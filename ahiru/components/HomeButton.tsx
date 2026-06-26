import React from 'react';
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { router } from 'expo-router';

/** Jump straight back to the home tab from anywhere in the app. */
export function goHome() {
  try {
    // @ts-ignore - canDismiss may be undefined on web
    if (typeof router.canDismiss === 'function' ? router.canDismiss() : true) {
      router.dismissAll();
    }
  } catch {
    // no stack to dismiss (already at root) — ignore
  }
  router.navigate('/(tabs)');
}

type Props = {
  /** 'light' for use on colored headers, 'dark' for light backgrounds. */
  variant?: 'light' | 'dark';
  style?: StyleProp<ViewStyle>;
  label?: string;
};

export default function HomeButton({ variant = 'light', style, label = 'ホーム' }: Props) {
  const isLight = variant === 'light';
  return (
    <TouchableOpacity
      onPress={goHome}
      activeOpacity={0.8}
      accessibilityLabel="ホームに戻る"
      style={[styles.btn, isLight ? styles.btnLight : styles.btnDark, style]}
    >
      <Text style={[styles.text, isLight ? styles.textLight : styles.textDark]}>
        🏠 {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  btnLight: {
    backgroundColor: 'rgba(255,255,255,0.22)',
  },
  btnDark: {
    backgroundColor: '#EFF6FF',
  },
  text: {
    fontSize: 13,
    fontWeight: '800',
  },
  textLight: {
    color: '#FFFFFF',
  },
  textDark: {
    color: '#1D4ED8',
  },
});
