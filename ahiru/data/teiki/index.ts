// 定期テスト向け「教科書の延長」。教科・学年ごとのファイルを束ねる。
// 新しいファイルを足したら、ここに import と spread を足すこと（監査の「結線漏れ」が見張る）。
import type { TeikiUnit } from './types';
import { TEIKI_J1_SANSU } from './j1-sansu';

export const TEIKI_UNITS: TeikiUnit[] = [...TEIKI_J1_SANSU];
