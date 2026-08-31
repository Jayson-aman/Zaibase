import { useCallback, useEffect, useRef, useState } from 'react';
import { fetchUnitUnlockProduct, purchaseProduct } from '../services/subscription';
import { getUnlockedUnitIds, markUnitUnlocked } from '../services/unitUnlockStore';
import { UNIT_UNLOCK_PRICE_LABEL } from '../constants/pricing';

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
      try {
        await purchaseProduct(product);
        await markUnitUnlocked(lessonId);
        if (mounted.current) {
          setUnlockedIds((prev) => new Set(prev).add(lessonId));
        }
        return { ok: true };
      } catch (e) {
        const message = e instanceof Error ? e.message : '購入処理に失敗しました';
        return { ok: false, message };
      } finally {
        if (mounted.current) setPurchasingLessonId(null);
      }
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
