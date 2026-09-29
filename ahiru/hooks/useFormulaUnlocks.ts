import { useCallback, useEffect, useRef, useState } from 'react';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  fetchFormulaUnlockProduct,
  fetchFormulaBundleProduct,
  purchaseProduct,
  startStripeUnlockCheckout,
  confirmPendingStripeUnlockOnce,
} from '../services/subscription';
import { getUnlockedFormulaIds, markFormulaUnlocked } from '../services/formulaUnlockStore';
import { FORMULA_UNLOCK_PRICE_LABEL, FORMULA_BUNDLE_PRICE_LABEL } from '../constants/pricing';

const isWebPlatform = Platform.OS === 'web';

// 決済（消耗型・課金確定）は成功したが、サーバー側の確認（unlockContent）が
// まだ済んでいないfigureIdを端末に記録しておく。これが無いと、確認が失敗した
// あとにユーザーがもう一度ボタンを押したときpurchaseProductを再度呼んでしまい、
// 消耗型商品なので実際に二重課金されてしまう。
const PENDING_KEY_PREFIX = 'formula_unlock_pending_';

async function markPurchasePending(figureId: string): Promise<void> {
  try {
    await AsyncStorage.setItem(`${PENDING_KEY_PREFIX}${figureId}`, '1');
  } catch {
    // 保存に失敗しても処理は続行する（最悪ケースは確認リトライが尽きた後の
    // 再購入リスクが残るだけで、確認自体は今回の呼び出し内でリトライされる）
  }
}

async function isPurchasePending(figureId: string): Promise<boolean> {
  try {
    return (await AsyncStorage.getItem(`${PENDING_KEY_PREFIX}${figureId}`)) === '1';
  } catch {
    return false;
  }
}

async function clearPurchasePending(figureId: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(`${PENDING_KEY_PREFIX}${figureId}`);
  } catch {
    // 消し忘れても実害はない（次回も確認だけリトライされるため）
  }
}

export type UnlockPurchaseResult = { ok: true } | { ok: false; message: string };

export interface FormulaUnlocksState {
  /** 買い切り解放済みのfigureId一覧（Firestoreから読み込み中はloadingがtrue） */
  unlockedIds: Set<string>;
  loading: boolean;
  /** ¥50の商品が実際に購入可能な状態か（App Store Connect/Play Console未登録の間はfalse） */
  productReady: boolean;
  /** 商品の価格表示（ストア未設定時はフォールバック文言） */
  priceLabel: string;
  /** まとめ買いの商品が購入可能な状態か */
  bundleReady: boolean;
  bundlePriceLabel: string;
  /**
   * 指定した公式（kind='formula'）、またはまとめ買い（kind='bundle'、idは bundle:受験種別:教科）を
   * 購入して解放する。成功したらunlockedIdsにも反映する。
   */
  unlockFormula: (figureId: string, kind?: 'formula' | 'bundle') => Promise<UnlockPurchaseResult>;
  purchasingFigureId: string | null;
}

export function useFormulaUnlocks(): FormulaUnlocksState {
  const [unlockedIds, setUnlockedIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<unknown>(null);
  const [bundleProduct, setBundleProduct] = useState<unknown>(null);
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
    if (isWebPlatform) {
      // Web版はStripe直接決済を使うため、RevenueCatの商品取得（常にnull）はしない。
      // Stripe Checkoutから戻ってきた直後なら、ここで解放を確定させる。
      confirmPendingStripeUnlockOnce().then((result) => {
        if (mounted.current && (result?.type === 'formula' || result?.type === 'bundle')) {
          setUnlockedIds((prev) => new Set(prev).add(result.itemId));
        }
      });
    } else {
      fetchFormulaUnlockProduct().then((p) => {
        if (mounted.current) setProduct(p);
      });
      fetchFormulaBundleProduct().then((p) => {
        if (mounted.current) setBundleProduct(p);
      });
    }
    return () => {
      mounted.current = false;
    };
  }, []);

  const unlockFormula = useCallback(
    async (figureId: string, kind: 'formula' | 'bundle' = 'formula'): Promise<UnlockPurchaseResult> => {
      const target = kind === 'bundle' ? bundleProduct : product;
      if (isWebPlatform) {
        setPurchasingFigureId(figureId);
        try {
          const { alreadyUnlocked } = await startStripeUnlockCheckout(kind, figureId);
          if (alreadyUnlocked && mounted.current) {
            setUnlockedIds((prev) => new Set(prev).add(figureId));
          }
          // alreadyUnlockedでなければここでブラウザがStripe Checkoutへ遷移する。
          if (mounted.current) setPurchasingFigureId(null);
          return { ok: true };
        } catch (e) {
          if (mounted.current) setPurchasingFigureId(null);
          const message = e instanceof Error ? e.message : '購入処理に失敗しました';
          return { ok: false, message };
        }
      }
      if (target == null) {
        return { ok: false, message: 'この機能は準備中です。しばらくしてからもう一度お試しください。' };
      }
      setPurchasingFigureId(figureId);
      // 前回この公式を購入したときに、決済は成功したがサーバー確認が未完了の
      // まま終わっている場合は、購入をやり直さずに確認だけをリトライする。
      const alreadyPurchasedPending = await isPurchasePending(figureId);
      if (!alreadyPurchasedPending) {
        try {
          await purchaseProduct(target);
          await markPurchasePending(figureId);
        } catch (e) {
          if (mounted.current) setPurchasingFigureId(null);
          const message = e instanceof Error ? e.message : '購入処理に失敗しました';
          return { ok: false, message };
        }
      }
      // ここから先は決済自体は成功済み（消耗型商品なので、失敗したからと
      // もう一度purchaseProductを呼ぶと二重課金になる）。サーバー側の確認
      // （RevenueCatへの反映待ち・一時的な通信断）だけをリトライする。
      for (let attempt = 0; attempt < 3; attempt++) {
        try {
          await markFormulaUnlocked(figureId, kind);
          await clearPurchasePending(figureId);
          if (mounted.current) {
            setUnlockedIds((prev) => new Set(prev).add(figureId));
            setPurchasingFigureId(null);
          }
          return { ok: true };
        } catch (e) {
          if (attempt === 2) {
            if (mounted.current) setPurchasingFigureId(null);
            const message = e instanceof Error ? e.message : '購入の確認に失敗しました';
            return {
              ok: false,
              message: `${message}\n\n決済自体は完了しています。もう一度「購入する」ボタンは押さず、しばらくしてからこの画面を開き直してください。`,
            };
          }
          await new Promise((resolve) => setTimeout(resolve, 1500 * (attempt + 1)));
        }
      }
      if (mounted.current) setPurchasingFigureId(null);
      return { ok: false, message: '購入の確認に失敗しました' };
    },
    [product, bundleProduct]
  );

  const storePriceString = (product as { priceString?: string } | null)?.priceString;
  const bundlePriceString = (bundleProduct as { priceString?: string } | null)?.priceString;

  return {
    unlockedIds,
    loading,
    productReady: isWebPlatform || product != null,
    priceLabel: storePriceString ?? FORMULA_UNLOCK_PRICE_LABEL,
    bundleReady: isWebPlatform || bundleProduct != null,
    bundlePriceLabel: bundlePriceString ?? FORMULA_BUNDLE_PRICE_LABEL,
    unlockFormula,
    purchasingFigureId,
  };
}
