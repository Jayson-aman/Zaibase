// このファイルは scripts/generate-geography-images.mjs による自動生成の対象です。
// 産地スポットライト名 → イラスト画像（assets/geography/*.png）のマッピング。
// 画像が未生成の間は空のまま（UIは画像なしで問題なく動作します）。
//
// 画像を生成するには:
//   export GEMINI_API_KEY="your-key"
//   node scripts/generate-geography-images.mjs
// を実行すると assets/geography/ にPNGが生成され、このファイルが自動更新されます。
import { ImageSourcePropType } from 'react-native';

export const geographyImages: Record<string, ImageSourcePropType> = {};
