// このファイルは scripts/generate-formula-images.mjs による自動生成です。
// 公式・まとめの item.label 文字列 → イラスト画像（assets/formulas/*.png）のマッピング。
// 画像が未生成の項目は、アプリ側でベクター図形／ステップ表示にフォールバックします。
import { ImageSourcePropType } from 'react-native';

export const formulaImages: Record<string, ImageSourcePropType> = {
  "長方形・正方形の面積": require('../assets/formulas/sansu-rect-area.png'),
  "三角形の面積": require('../assets/formulas/sansu-triangle-area.png'),
  "平行四辺形の面積": require('../assets/formulas/sansu-parallelogram-area.png'),
  "台形の面積": require('../assets/formulas/sansu-trapezoid-area.png'),
  "ひし形の面積": require('../assets/formulas/sansu-rhombus-area.png'),
  "直方体・立方体の体積": require('../assets/formulas/sansu-cuboid-volume.png'),
  "角柱・円柱の体積": require('../assets/formulas/sansu-cylinder-volume.png'),
  "速さ・道のり・時間の関係": require('../assets/formulas/sansu-speed-basic.png'),
  "旅人算（出会い）": require('../assets/formulas/sansu-meeting-problem.png'),
};
