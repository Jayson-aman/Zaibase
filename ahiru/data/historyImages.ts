// このファイルは scripts/generate-history-images.mjs による自動生成です。
// 年表イベントの img キー → 教育用オリジナルイラスト（assets/history/*.png）。
// 画像が未生成の場合は空になります（UIは画像なしで動作します）。
import { ImageSourcePropType } from 'react-native';

export const historyImages: Record<string, ImageSourcePropType> = {
  "himiko": require('../assets/history/himiko.png'),
  "daisen-kofun": require('../assets/history/daisen-kofun.png'),
  "heiankyo": require('../assets/history/heiankyo.png'),
  "teppo": require('../assets/history/teppo.png'),
  "sankin-kotai": require('../assets/history/sankin-kotai.png'),
  "dejima": require('../assets/history/dejima.png'),
  "bunmei-kaika": require('../assets/history/bunmei-kaika.png'),
  "shinkansen": require('../assets/history/shinkansen.png'),
};
