import { useCallback, useEffect, useRef, useState } from 'react';
import { useFocusEffect } from 'expo-router';
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
import { useAuthUser } from './useAuthUser';
const PENDING_KEY_PREFIX = 'formula_unlock_pending_';

async function markPurchasePending(figureId: string): Promise<void> {
  try {
    await AsyncStorage.setItem(`${PENDING_KEY_PREFIX}${figureId}`, String(Date.now()));
  } catch {
    // 保存に失敗しても処理は続行する（最悪ケースは確認リトライが尽きた後の
    // 再購入リスクが残るだけで、確認自体は今回の呼び出し内でリトライされる）
  }
}

async function isPurchasePending(figureId: string): Promise<boolean> {
  try {
    const v = await AsyncStorage.getItem(`${PENDING_KEY_PREFIX}${figureId}`);
    if (!v) return false;
    // 24時間たっても確認できないものは「確認待ち」を解く。解かないと、別の理由で確認が通らない項目を
    // 二度と買えなくなる。（決済から24時間たてば、RevenueCat側にも購入が反映されている）
    const t = Number(v);
    if (t > 1 && Date.now() - t > 24 * 60 * 60 * 1000) {
      await AsyncStorage.removeItem(`${PENDING_KEY_PREFIX}${figureId}`);
      return false;
    }
    return true;
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

export type UnlockPurchaseResult =
  | { ok: true; /** Webで決済ページへ移動した（まだ購入は終わっていない） */ redirected?: boolean }
  | { ok: false; message: string; /** 本人が取りやめた（エラーとして見せない） */ cancelled?: boolean };

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
  /** ストアが返した数値の価格と通貨（割引率の計算用。Webやストア未取得ならnull） */
  itemPriceValue: number | null;
  bundlePriceValue: number | null;
  currencyCode: string | null;
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
  // ログイン中のユーザーが変わったら、前のユーザーの解放済み表示を捨てて取り直す
  // （足し合わせるだけだと、ログアウトしても前のユーザーの解放内容が残る）
  const { user: authUser } = useAuthUser();
  const uid = authUser?.uid ?? null;
  const seenUid = useRef<string | null | undefined>(undefined);
  useEffect(() => {
    if (seenUid.current === undefined) {
      seenUid.current = uid;
      return;
    }
    if (seenUid.current === uid) return;
    seenUid.current = uid;
    setUnlockedIds(new Set());
    getUnlockedFormulaIds()
      .then((ids) => {
        if (mounted.current) setUnlockedIds(new Set(ids));
      })
      .catch(() => {});
  }, [uid]);

  useEffect(() => {
    mounted.current = true;
    getUnlockedFormulaIds()
      .then((ids) => {
        // 画面が開いたあとにStripeの確認などで足された分を消さないよう、合成する
        if (mounted.current) setUnlockedIds((prev) => new Set([...prev, ...ids]));
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

  // 別の画面（単元ページなど）で買った分を、この画面に戻ったときに反映する。
  // 反映しないと鍵と購入ボタンが残り、もう一度押すと二重に課金されてしまう。
  useFocusEffect(
    useCallback(() => {
      getUnlockedFormulaIds()
        .then((ids) => {
          if (mounted.current) setUnlockedIds((prev) => new Set([...prev, ...ids]));
        })
        .catch(() => {});
    }, []),
  );

  const unlockFormulaInner = useCallback(
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
          return { ok: true, redirected: !alreadyUnlocked };
        } catch (e) {
          if (mounted.current) setPurchasingFigureId(null);
          const message = e instanceof Error ? e.message : '購入処理に失敗しました';
          return { ok: false, message };
        }
      }
      if (target == null) {
        return { ok: false, message: 'この機能は準備中です。しばらくしてからもう一度お試しください。' };
      }
      // 買う直前に最新の解放済み一覧を確かめる。すでに解放されていれば課金しない（二重課金の防止）。
      try {
        const fresh = await getUnlockedFormulaIds();
        if (fresh.has(figureId)) {
          if (mounted.current) setUnlockedIds((prev) => new Set([...prev, ...fresh]));
          return { ok: true };
        }
      } catch {
        // 取得に失敗したときは、そのまま購入に進む（購入自体はサーバー側で二重解放されない）
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
          if ((e as { userCancelled?: boolean } | null)?.userCancelled) return { ok: false, message: '', cancelled: true };
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

  // 購入ボタンの連打で、購入の確認ダイアログや決済が二重に走らないようにする
  // （state の更新は遅れるので、同期的に確かめられる ref で守る）
  const inFlight = useRef(false);
  const unlockFormula = useCallback(
    async (figureId: string, kind: 'formula' | 'bundle' = 'formula'): Promise<UnlockPurchaseResult> => {
      if (inFlight.current) return { ok: false, message: '', cancelled: true };
      inFlight.current = true;
      try {
        return await unlockFormulaInner(figureId, kind);
      } finally {
        inFlight.current = false;
      }
    },
    [unlockFormulaInner]
  );

  const storePriceString = (product as { priceString?: string } | null)?.priceString;
  const bundlePriceString = (bundleProduct as { priceString?: string } | null)?.priceString;
  const numeric = (p: unknown) => {
    const v = (p as { price?: number } | null)?.price;
    return typeof v === 'number' && v > 0 ? v : null;
  };
  const itemCur = (product as { currencyCode?: string } | null)?.currencyCode ?? null;
  const bundleCur = (bundleProduct as { currencyCode?: string } | null)?.currencyCode ?? null;
  // 単品とまとめ買いで通貨がちがう（ありえないが）ときは、割引の計算をしない
  const sameCurrency = itemCur != null && itemCur === bundleCur;

  return {
    unlockedIds,
    loading,
    productReady: isWebPlatform || product != null,
    priceLabel: storePriceString ?? FORMULA_UNLOCK_PRICE_LABEL,
    bundleReady: isWebPlatform || bundleProduct != null,
    bundlePriceLabel: bundlePriceString ?? FORMULA_BUNDLE_PRICE_LABEL,
    itemPriceValue: sameCurrency ? numeric(product) : null,
    bundlePriceValue: sameCurrency ? numeric(bundleProduct) : null,
    currencyCode: sameCurrency ? itemCur : null,
    unlockFormula,
    purchasingFigureId,
  };
}
