import React, { useState } from 'react';
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

type Props = {
  source?: ImageSourcePropType;
  uri?: string;
  style?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  fallbackEmoji?: string;
  accessibilityLabel?: string;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'center';
};

export default function AnimeImage({
  source,
  uri,
  style,
  containerStyle,
  fallbackEmoji = '📚',
  accessibilityLabel,
  resizeMode = 'cover',
}: Props) {
  const [failed, setFailed] = useState(false);

  if ((!source && !uri) || failed) {
    return (
      <View style={[styles.fallback, containerStyle, style as ViewStyle]}>
        <Text style={styles.fallbackEmoji}>{fallbackEmoji}</Text>
      </View>
    );
  }

  return (
    <View style={containerStyle}>
      <Image
        source={source ?? { uri: uri! }}
        style={style}
        resizeMode={resizeMode}
        accessibilityLabel={accessibilityLabel}
        onError={() => setFailed(true)}
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
