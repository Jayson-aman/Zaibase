// 「決済は成功したが、サーバーでの解放の確認がまだ済んでいない」購入を、端末に記録する。
//
// 消耗型の商品は、確認に失敗したあとにもう一度「購入」を押すと、購入が二重に走って二重課金になる。
// そこで、決済のあとにこの記録を付け、確認が済むまで残す。
//
// ・記録は【ユーザーごと】に分ける。以前は全員ぶんをログイン・ログアウトのたびに消していたため、
//   確認に失敗した人が、ログインし直しただけで記録を失い、同じ項目をもう一度買えてしまった。
// ・画面を開いたとき、記録が残っている項目の確認を、自動でやり直す（購入ボタンを押さなくてよい）。
import AsyncStorage from '@react-native-async-storage/async-storage';

const DAY = 24 * 60 * 60 * 1000;
const keyOf = (prefix: string, uid: string | null, id: string) => `${prefix}${uid ?? 'anon'}__${id}`;

export async function markPending(prefix: string, uid: string | null, id: string): Promise<void> {
  try {
    await AsyncStorage.setItem(keyOf(prefix, uid, id), String(Date.now()));
  } catch {
    // 保存に失敗しても処理は続行する（今回の呼び出しの中でも確認はやり直される）
  }
}

export async function isPending(prefix: string, uid: string | null, id: string): Promise<boolean> {
  try {
    const k = keyOf(prefix, uid, id);
    const v = await AsyncStorage.getItem(k);
    if (!v) return false;
    // 24時間たっても確認できないものは「確認待ち」を解く。解かないと、別の理由で確認が通らない項目を
    // 二度と買えなくなる。（決済から24時間たてば、RevenueCat側にも購入が反映されている）
    const t = Number(v);
    if (t > 1 && Date.now() - t > DAY) {
      await AsyncStorage.removeItem(k);
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

export async function clearPending(prefix: string, uid: string | null, id: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(keyOf(prefix, uid, id));
  } catch {
    // 消し忘れても実害はない（次回も確認だけやり直される）
  }
}

/** このユーザーの「確認待ち」の項目id一覧（24時間より古いものは除く） */
export async function listPending(prefix: string, uid: string | null): Promise<string[]> {
  try {
    const head = `${prefix}${uid ?? 'anon'}__`;
    const keys = (await AsyncStorage.getAllKeys()).filter((k) => k.startsWith(head));
    const out: string[] = [];
    for (const k of keys) {
      const id = k.slice(head.length);
      if (await isPending(prefix, uid, id)) out.push(id);
    }
    return out;
  } catch {
    return [];
  }
}

/**
 * 購入が「ご家族の承認待ち」（Apple の「承認と購入のリクエスト」／Google の保留中の取引）で止まったか。
 * RevenueCat は PAYMENT_PENDING_ERROR（コード20）で返す。決済は未確定だが、承認されると確定するので、
 * 失敗として扱って買い直させると二重に払うことになる。
 */
export function isPaymentPending(e: unknown): boolean {
  const err = e as { code?: unknown; errorCode?: unknown; readableErrorCode?: unknown } | null;
  return (
    String(err?.code ?? '') === '20' ||
    String(err?.errorCode ?? '') === '20' ||
    String(err?.readableErrorCode ?? '') === 'PAYMENT_PENDING_ERROR'
  );
}
