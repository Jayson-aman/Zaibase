import AsyncStorage from '@react-native-async-storage/async-storage';

// レベル別ドリル・入試対策の「1日あたりN問無料」カウント。
// 画面を離れてすぐ入り直すだけで無料枠がリセットされてしまわないよう、
// 日付をキーに含めてAsyncStorageへ永続化する（日が変われば自然にリセットされる）。
function todayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function storageKey(id: string): string {
  return `session_free_used_${id}_${todayKey()}`;
}

export async function getSessionFreeUsed(id: string): Promise<number> {
  try {
    const val = await AsyncStorage.getItem(storageKey(id));
    if (!val) return 0;
    const n = parseInt(val, 10);
    return Number.isFinite(n) && n >= 0 ? n : 0;
  } catch {
    return 0;
  }
}

export async function incrementSessionFreeUsed(id: string): Promise<number> {
  const count = await getSessionFreeUsed(id);
  const next = count + 1;
  try {
    await AsyncStorage.setItem(storageKey(id), String(next));
  } catch {
    // 保存に失敗しても回数だけは返す
  }
  return next;
}
