import AsyncStorage from '@react-native-async-storage/async-storage';

// 無料の枠を「同じ端末で、アカウントを何個も作って」何度も使われないようにするための端末ID。
// アプリが最初に作る乱数で、端末の中に保存する（個人を特定する情報ではない）。
// サーバー側（functions/_freeGuard.js）が「1台で無料を使えるアカウントは3つまで」と数える。
//  ・アプリを入れ直す／ブラウザのデータを消すと、新しいIDになる。完全な防止ではなく、
//    「同じ端末で連続して作る」ことへの歯止め。根本対策の App Check（ネイティブ）は未実装。
//  ・IDが取れなかったとき（保存できない環境）は、送らない。サーバーは端末の上限だけ見ない。
const KEY = 'ahiru_device_id_v1';
let cached: string | null = null;

function randomId(): string {
  const bytes = new Uint8Array(16);
  const c: { getRandomValues?: (a: Uint8Array) => Uint8Array } | undefined = (globalThis as any).crypto;
  if (c?.getRandomValues) c.getRandomValues(bytes);
  else for (let i = 0; i < bytes.length; i++) bytes[i] = Math.floor(Math.random() * 256);
  return 'd' + Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
}

/** 端末ID（英数字33文字）。取れなければ undefined */
export async function getDeviceId(): Promise<string | undefined> {
  if (cached) return cached;
  try {
    const saved = await AsyncStorage.getItem(KEY);
    if (saved && /^[A-Za-z0-9_-]{16,80}$/.test(saved)) {
      cached = saved;
      return saved;
    }
    const id = randomId();
    await AsyncStorage.setItem(KEY, id);
    cached = id;
    return id;
  } catch {
    return undefined;
  }
}
