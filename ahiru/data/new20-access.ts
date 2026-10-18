// new20 単元（学年×科目ごとに追加した単元）の無料／ロック判定。
//
// 単元データ本体（約3.7MB）を読まずに判定できるよう、IDの一覧は scripts/gen-static-data.ts が
// data/new20-ids.generated.ts に前もって書き出している（npm run gen:static）。
// 単元を足したら作り直すこと。`npm run audit` が古さを見つける。
import { FREE_UNITS_PER_CLUSTER, NEW20_FREE_IDS, NEW20_LOCKED_IDS } from './new20-ids.generated';

export { FREE_UNITS_PER_CLUSTER };

const FREE_UNIT_IDS = new Set<string>(NEW20_FREE_IDS);
const LOCKED_UNIT_IDS = new Set<string>(NEW20_LOCKED_IDS);

/** この単元が「学年×科目20単元追加」バッチ由来かどうか */
export function isNew20Unit(lessonId: string): boolean {
  return lessonId.startsWith('new20_');
}

/** new20由来でない単元は常にtrue（このロックの対象外）を返す */
export function isNew20UnitFree(lessonId: string): boolean {
  if (!isNew20Unit(lessonId)) return true;
  return FREE_UNIT_IDS.has(lessonId);
}

export function isNew20UnitLocked(lessonId: string): boolean {
  return LOCKED_UNIT_IDS.has(lessonId);
}
