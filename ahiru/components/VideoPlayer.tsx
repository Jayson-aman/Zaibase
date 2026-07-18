import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Linking,
  Dimensions,
} from 'react-native';
import { Video, ResizeMode } from 'expo-av';

/**
 * 解説動画プレイヤー（クロスプラットフォーム）。
 * - MP4 / HLS などの直リンク → expo-av の Video でインライン再生（Web・iOS・Android）。
 * - YouTube / Vimeo など → Web は iframe 埋め込み、ネイティブは「▶ 再生」ボタンで
 *   外部（ブラウザ/アプリ）を開く（react-native-webview 非依存で確実に動く）。
 */

function parseYouTubeId(url: string): string | null {
  const m =
    url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/) ??
    null;
  return m ? m[1] : null;
}

function isDirectVideo(url: string): boolean {
  return /\.(mp4|m3u8|mov|webm|m4v)(\?|$)/i.test(url);
}

export default function VideoPlayer({
  url,
  title,
}: {
  url: string;
  title?: string;
}) {
  const w = Math.min(Dimensions.get('window').width - 48, 440);
  const h = Math.round((w * 9) / 16);
  const ytId = parseYouTubeId(url);

  let body: React.ReactNode;

  if (isDirectVideo(url)) {
    body = (
      <Video
        source={{ uri: url }}
        style={{ width: '100%', height: h, borderRadius: 12, backgroundColor: '#000' }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
      />
    );
  } else if (ytId && Platform.OS === 'web') {
    // Web は react-dom 経由なので実DOMのiframeを生成できる
    body = React.createElement('iframe', {
      src: `https://www.youtube.com/embed/${ytId}`,
      width: '100%',
      height: h,
      frameBorder: 0,
      allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
      allowFullScreen: true,
      style: { border: 0, borderRadius: 12 },
      title: title ?? '解説動画',
    });
  } else {
    // ネイティブの YouTube 等 → 外部で開く
    body = (
      <TouchableOpacity
        style={[styles.openBtn, { height: h }]}
        activeOpacity={0.85}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.playIcon}>▶</Text>
        <Text style={styles.openText}>動画を再生（外部で開く）</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.wrap}>
      <View style={styles.labelRow}>
        <Text style={styles.label}>🎬 {title ?? '解説動画'}</Text>
      </View>
      <View style={{ width: w, alignSelf: 'center' }}>{body}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginTop: 12,
    marginBottom: 4,
    alignItems: 'center',
  },
  labelRow: {
    alignSelf: 'stretch',
    paddingHorizontal: 4,
    marginBottom: 6,
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0369A1',
  },
  openBtn: {
    width: '100%',
    borderRadius: 12,
    backgroundColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playIcon: {
    fontSize: 34,
    color: '#fff',
    marginBottom: 6,
  },
  openText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
