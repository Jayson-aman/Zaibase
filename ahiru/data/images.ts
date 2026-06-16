import { ImageSourcePropType } from 'react-native';
import { SubjectKey } from './questions';

export type HistoryTheme = 'geography' | 'ancient' | 'edo' | 'meiji' | 'modern';

export const mascots: Record<SubjectKey, ImageSourcePropType> = {
  sansu: require('../assets/mascots/mascot-sansu.png'),
  kokugo: require('../assets/mascots/mascot-kokugo.png'),
  rika: require('../assets/mascots/mascot-rika.png'),
  shakai: require('../assets/mascots/mascot-shakai.png'),
  eigo: require('../assets/mascots/mascot-eigo.png'),
};

export const homeMascot: ImageSourcePropType = require('../assets/mascots/mascot-home.png');
export const listenMascot: ImageSourcePropType = require('../assets/mascots/mascot-listen.png');
export const celebrateMascot: ImageSourcePropType = require('../assets/mascots/mascot-celebrate.png');
export const encourageMascot: ImageSourcePropType = require('../assets/mascots/mascot-home.png');

export const historyIllustrations: Record<HistoryTheme, ImageSourcePropType> = {
  geography: require('../assets/history/hist-geography.png'),
  ancient: require('../assets/history/hist-ancient.png'),
  edo: require('../assets/history/hist-edo.png'),
  meiji: require('../assets/history/hist-meiji.png'),
  modern: require('../assets/history/hist-modern.png'),
};

/** 問題単位の甲冑・合戦イラスト（Gemini / Nano Banana Pro 品質想定） */
export const shakaiBattleIllustrations: Record<string, ImageSourcePropType> = {
  shakai_07: require('../assets/history/hist-samurai-armor.png'),
  shakai_11: require('../assets/history/hist-sekigahara-battle.png'),
};

export const historyThemeLabels: Record<HistoryTheme, string> = {
  geography: '地理',
  ancient: '古代〜奈良',
  edo: '江戸時代',
  meiji: '明治時代',
  modern: '現代・公民',
};

export const shakaiQuestionLabels: Record<string, string> = {
  shakai_07: '江戸・武将（甲冑）',
  shakai_11: '関ヶ原の合戦',
};

export const shakaiQuestionTheme: Record<string, HistoryTheme> = {
  shakai_01: 'geography',
  shakai_02: 'ancient',
  shakai_03: 'geography',
  shakai_04: 'modern',
  shakai_05: 'geography',
  shakai_06: 'modern',
  shakai_07: 'edo',
  shakai_08: 'modern',
  shakai_09: 'ancient',
  shakai_10: 'geography',
  shakai_11: 'edo',
  shakai_12: 'geography',
  shakai_13: 'geography',
  shakai_14: 'meiji',
  shakai_15: 'geography',
};

export function getQuestionIllustration(
  subject: SubjectKey,
  questionId: string,
): ImageSourcePropType {
  if (subject === 'shakai') {
    const battle = shakaiBattleIllustrations[questionId];
    if (battle) return battle;
    const theme = shakaiQuestionTheme[questionId];
    if (theme) return historyIllustrations[theme];
  }
  return mascots[subject];
}

export function getHistoryThemeLabel(questionId: string): string | null {
  if (shakaiQuestionLabels[questionId]) {
    return shakaiQuestionLabels[questionId];
  }
  const theme = shakaiQuestionTheme[questionId];
  return theme ? historyThemeLabels[theme] : null;
}

export function getResultMascot(percent: number): ImageSourcePropType {
  if (percent >= 80) return celebrateMascot;
  if (percent >= 40) return homeMascot;
  return encourageMascot;
}
