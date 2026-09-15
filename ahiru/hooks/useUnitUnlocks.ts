import { useCallback, useEffect, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchUnitUnlockProduct, purchaseProduct } from '../services/subscription';
import { getUnlockedUnitIds, markUnitUnlocked } from '../services/unitUnlockStore';
import { UNIT_UNLOCK_PRICE_LABEL } from '../constants/pricing';

// 決済（消耗型・課金確定）は成功したが、サーバー側の確認（unlockContent）が
// まだ済んでいないlessonIdを端末に記録しておく。これが無いと、確認が失敗した
// あとにユーザーがもう一度ボタンを押したときpurchaseProductを再度呼んでしまい、
// 消耗型商品なので実際に二重課金されてしまう。
const PENDING_KEY_PREFIX = 'unit_unlock_pending_';

async function markPurchasePending(lessonId: string): Promise<void> {
  try {
    await AsyncStorage.setItem(`${PENDING_KEY_PREFIX}${lessonId}`, '1');
  } catch {
    // 保存に失敗しても処理は続行する
  }
}

async function isPurchasePending(lessonId: string): Promise<boolean> {
  try {
    return (await AsyncStorage.getItem(`${PENDING_KEY_PREFIX}${lessonId}`)) === '1';
  } catch {
    return false;
  }
}

async function clearPurchasePending(lessonId: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(`${PENDING_KEY_PREFIX}${lessonId}`);
  } catch {
    // 消し忘れても実害はない
  }
}

export type UnitUnlockPurchaseResult = { ok: true } | { ok: false; message: string };

export interface UnitUnlocksState {
  /** 買い切り解放済みのLesson.id一覧（Firestoreから読み込み中はloadingがtrue） */
  unlockedIds: Set<string>;
  loading: boolean;
  /** ¥100の商品が実際に購入可能な状態か（App Store Connect/Play Console未登録の間はfalse） */
  productReady: boolean;
  priceLabel: string;
  unlockUnit: (lessonId: string) => Promise<UnitUnlockPurchaseResult>;
  purchasingLessonId: string | null;
}

export function useUnitUnlocks(): UnitUnlocksState {
  const [unlockedIds, setUnlockedIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<unknown>(null);
  const [purchasingLessonId, setPurchasingLessonId] = useState<string | null>(null);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    getUnlockedUnitIds()
      .then((ids) => {
        if (mounted.current) setUnlockedIds(ids);
      })
      .finally(() => {
        if (mounted.current) setLoading(false);
      });
    fetchUnitUnlockProduct().then((p) => {
      if (mounted.current) setProduct(p);
    });
    return () => {
      mounted.current = false;
    };
  }, []);

  const unlockUnit = useCallback(
    async (lessonId: string): Promise<UnitUnlockPurchaseResult> => {
      if (product == null) {
        return { ok: false, message: 'この機能は準備中です。しばらくしてからもう一度お試しください。' };
      }
      setPurchasingLessonId(lessonId);
      // 前回この単元を購入したときに、決済は成功したがサーバー確認が未完了の
      // まま終わっている場合は、購入をやり直さずに確認だけをリトライする。
      const alreadyPurchasedPending = await isPurchasePending(lessonId);
      if (!alreadyPurchasedPending) {
        try {
          await purchaseProduct(product);
          await markPurchasePending(lessonId);
        } catch (e) {
          if (mounted.current) setPurchasingLessonId(null);
          const message = e instanceof Error ? e.message : '購入処理に失敗しました';
          return { ok: false, message };
        }
      }
      // ここから先は決済自体は成功済み（消耗型商品なので、失敗したからと
      // もう一度purchaseProductを呼ぶと二重課金になる）。サーバー側の確認
      // （RevenueCatへの反映待ち・一時的な通信断）だけをリトライする。
      for (let attempt = 0; attempt < 3; attempt++) {
        try {
          await markUnitUnlocked(lessonId);
          await clearPurchasePending(lessonId);
          if (mounted.current) {
            setUnlockedIds((prev) => new Set(prev).add(lessonId));
            setPurchasingLessonId(null);
          }
          return { ok: true };
        } catch (e) {
          if (attempt === 2) {
            if (mounted.current) setPurchasingLessonId(null);
            const message = e instanceof Error ? e.message : '購入の確認に失敗しました';
            return {
              ok: false,
              message: `${message}\n\n決済自体は完了しています。もう一度「購入する」ボタンは押さず、しばらくしてからこの画面を開き直してください。`,
            };
          }
          await new Promise((resolve) => setTimeout(resolve, 1500 * (attempt + 1)));
        }
      }
      if (mounted.current) setPurchasingLessonId(null);
      return { ok: false, message: '購入の確認に失敗しました' };
    },
    [product]
  );

  const storePriceString = (product as { priceString?: string } | null)?.priceString;

  return {
    unlockedIds,
    loading,
    productReady: product != null,
    priceLabel: storePriceString ?? UNIT_UNLOCK_PRICE_LABEL,
    unlockUnit,
    purchasingLessonId,
  };
}
