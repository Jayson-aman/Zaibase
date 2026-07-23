// このファイルは scripts/generate-geography-images.mjs による自動生成です。
// 産地スポットライト名 → イラスト画像（assets/geography/*.png）のマッピング。
// 画像が未生成の場合は空になります（UIは画像なしで動作します）。
import { ImageSourcePropType } from 'react-native';

export const geographyImages: Record<string, ImageSourcePropType> = {
  "じゃがいも（男爵・メークイン）": require('../assets/geography/hokkaido-potato.png'),
  "根釧台地の酪農": require('../assets/geography/hokkaido-dairy.png'),
  "さくらんぼ（佐藤錦）": require('../assets/geography/yamagata-cherry.png'),
  "ひとめぼれ・つや姫": require('../assets/geography/tohoku-rice.png'),
  "とちおとめイチゴ": require('../assets/geography/tochigi-strawberry.png'),
  "嬬恋キャベツ": require('../assets/geography/gunma-cabbage.png'),
  "花木・花き（房総半島）": require('../assets/geography/chiba-flowers.png'),
  "静岡茶（牧之原台地）": require('../assets/geography/shizuoka-tea.png'),
  "野辺山高原のレタス": require('../assets/geography/nagano-lettuce.png'),
  "岡山マスカット": require('../assets/geography/okayama-muscat.png'),
  "高知の促成栽培（なす・ピーマン）": require('../assets/geography/kochi-vegetables.png'),
  "宮崎牛（A5ランク黒毛和牛）": require('../assets/geography/miyazaki-beef.png'),
  "知覧茶（お茶）": require('../assets/geography/kagoshima-tea.png'),
  "有田みかん（和歌山）": require('../assets/geography/arida-mikan.png'),
  "南高梅〔梅〕（和歌山・みなべ町）": require('../assets/geography/nanko-ume.png'),
};
