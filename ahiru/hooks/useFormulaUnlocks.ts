import { useCallback, useEffect, useRef, useState } from 'react';
import { fetchFormulaUnlockProduct, purchaseProduct } from '../services/subscription';
import { getUnlockedFormulaIds, markFormulaUnlocked } from '../services/formulaUnlockStore';
import { FORMULA_UNLOCK_PRICE_LABEL } from '../constants/pricing';

export type UnlockPurchaseResult = { ok: true } | { ok: false; message: string };

export interface FormulaUnlocksState {
  /** 買い切り解放済みのfigureId一覧（Firestoreから読み込み中はloadingがtrue） */
  unlockedIds: Set<string>;
  loading: boolean;
  /** ¥50の商品が実際に購入可能な状態か（App Store Connect/Play Console未登録の間はfalse） */
  productReady: boolean;
  /** 商品の価格表示（ストア未設定時はフォールバック文言） */
  priceLabel: string;
  /** 指定した公式を購入して解放する。成功したらunlockedIdsにも反映する。 */
  unlockFormula: (figureId: string) => Promise<UnlockPurchaseResult>;
  purchasingFigureId: string | null;
}

export function useFormulaUnlocks(): FormulaUnlocksState {
  const [unlockedIds, setUnlockedIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<unknown>(null);
  const [purchasingFigureId, setPurchasingFigureId] = useState<string | null>(null);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    getUnlockedFormulaIds()
      .then((ids) => {
        if (mounted.current) setUnlockedIds(ids);
      })
      .finally(() => {
        if (mounted.current) setLoading(false);
      });
    fetchFormulaUnlockProduct().then((p) => {
      if (mounted.current) setProduct(p);
    });
    return () => {
      mounted.current = false;
    };
  }, []);

  const unlockFormula = useCallback(
    async (figureId: string): Promise<UnlockPurchaseResult> => {
      if (product == null) {
        return { ok: false, message: 'この機能は準備中です。しばらくしてからもう一度お試しください。' };
      }
      setPurchasingFigureId(figureId);
      try {
        await purchaseProduct(product);
        await markFormulaUnlocked(figureId);
        if (mounted.current) {
          setUnlockedIds((prev) => new Set(prev).add(figureId));
        }
        return { ok: true };
      } catch (e) {
        const message = e instanceof Error ? e.message : '購入処理に失敗しました';
        return { ok: false, message };
      } finally {
        if (mounted.current) setPurchasingFigureId(null);
      }
    },
    [product]
  );

  const storePriceString = (product as { priceString?: string } | null)?.priceString;

  return {
    unlockedIds,
    loading,
    productReady: product != null,
    priceLabel: storePriceString ?? FORMULA_UNLOCK_PRICE_LABEL,
    unlockFormula,
    purchasingFigureId,
  };
}
