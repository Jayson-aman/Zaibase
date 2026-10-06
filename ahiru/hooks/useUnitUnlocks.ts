import { useCallback, useEffect, useRef, useState } from 'react';
import { useFocusEffect } from 'expo-router';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  fetchUnitUnlockProduct,
  purchaseProduct,
  startStripeUnlockCheckout,
  confirmPendingStripeUnlockOnce,
} from '../services/subscription';
import { getUnlockedUnitIds, markUnitUnlocked } from '../services/unitUnlockStore';
import { UNIT_UNLOCK_PRICE_LABEL } from '../constants/pricing';

const isWebPlatform = Platform.OS === 'web';

// 決済（消耗型・課金確定）は成功したが、サーバー側の確認（unlockContent）が
// まだ済んでいないlessonIdを端末に記録しておく。これが無いと、確認が失敗した
// あとにユーザーがもう一度ボタンを押したときpurchaseProductを再度呼んでしまい、
// 消耗型商品なので実際に二重課金されてしまう。
import { useAuthUser } from './useAuthUser';
import { markPending, isPending, clearPending, listPending } from '../utils/purchasePending';
const PENDING_KEY_PREFIX = 'unit_unlock_pending_';

// 購入の「確認待ち」の記録は utils/purchasePending.ts（ユーザーごと・画面を開いたときに自動で確認をやり直す）

export type UnitUnlockPurchaseResult =
  | { ok: true; /** Webで決済ページへ移動した（まだ購入は終わっていない） */ redirected?: boolean }
  | { ok: false; message: string; /** 本人が取りやめた（エラーとして見せない） */ cancelled?: boolean };

export interface UnitUnlocksState {
  /** 買い切り解放済みのLesson.id一覧（Firestoreから読み込み中はloadingがtrue） */
  unlockedIds: Set<string>;
  loading: boolean;
  /** ¥150の商品が実際に購入可能な状態か（App Store Connect/Play Console未登録の間はfalse） */
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
  // ログイン中のユーザーが変わったら、前のユーザーの解放済み表示を捨てて取り直す
  // （足し合わせるだけだと、ログアウトしても前のユーザーの解放内容が残る）
  const { user: authUser } = useAuthUser();
  const uid = authUser?.uid ?? null;
  // 購入のコールバックの中で、いまのユーザーを読むため
  const uidRef = useRef<string | null>(uid);
  uidRef.current = uid;
  const seenUid = useRef<string | null | undefined>(undefined);
  useEffect(() => {
    if (seenUid.current === undefined) {
      seenUid.current = uid;
      return;
    }
    if (seenUid.current === uid) return;
    seenUid.current = uid;
    setUnlockedIds(new Set());
    getUnlockedUnitIds()
      .then((ids) => {
        if (mounted.current) setUnlockedIds(new Set(ids));
      })
      .catch(() => {});
  }, [uid]);

  useEffect(() => {
    mounted.current = true;
    getUnlockedUnitIds()
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
        if (mounted.current && result?.type === 'unit') {
          setUnlockedIds((prev) => new Set(prev).add(result.itemId));
        }
      });
    } else {
      fetchUnitUnlockProduct().then((p) => {
        if (mounted.current) setProduct(p);
      });
    }
    return () => {
      mounted.current = false;
    };
  }, []);

  // 別の画面で買った分を、この画面に戻ったときに反映する（二重課金の防止）
  useFocusEffect(
    useCallback(() => {
      getUnlockedUnitIds()
        .then((ids) => {
          if (mounted.current) setUnlockedIds((prev) => new Set([...prev, ...ids]));
        })
        .catch(() => {});
      // 決済は済んだのに確認に失敗して残っている購入は、ここで確認をやり直す
      if (!isWebPlatform) {
        const myUid = uidRef.current;
        listPending(PENDING_KEY_PREFIX, myUid)
          .then(async (ids) => {
            for (const id of ids) {
              try {
                await markUnitUnlocked(id);
                await clearPending(PENDING_KEY_PREFIX, myUid, id);
                if (mounted.current) setUnlockedIds((prev) => new Set(prev).add(id));
              } catch {
                // まだ確認できない。記録は残し、次に画面を開いたときにまたやり直す
              }
            }
          })
          .catch(() => {});
      }
    }, []),
  );

  const unlockUnitInner = useCallback(
    async (lessonId: string): Promise<UnitUnlockPurchaseResult> => {
      if (isWebPlatform) {
        setPurchasingLessonId(lessonId);
        try {
          const { alreadyUnlocked } = await startStripeUnlockCheckout('unit', lessonId);
          if (alreadyUnlocked && mounted.current) {
            setUnlockedIds((prev) => new Set(prev).add(lessonId));
          }
          // alreadyUnlockedでなければここでブラウザがStripe Checkoutへ遷移する。
          if (mounted.current) setPurchasingLessonId(null);
          return { ok: true, redirected: !alreadyUnlocked };
        } catch (e) {
          if (mounted.current) setPurchasingLessonId(null);
          const message = e instanceof Error ? e.message : '購入処理に失敗しました';
          return { ok: false, message };
        }
      }
      if (product == null) {
        return { ok: false, message: 'この機能は準備中です。しばらくしてからもう一度お試しください。' };
      }
      // 買う直前に最新の解放済み一覧を確かめる。すでに解放されていれば課金しない。
      try {
        const fresh = await getUnlockedUnitIds();
        if (fresh.has(lessonId)) {
          if (mounted.current) setUnlockedIds((prev) => new Set([...prev, ...fresh]));
          return { ok: true };
        }
      } catch {
        // 取得に失敗したときは、そのまま購入に進む
      }
      setPurchasingLessonId(lessonId);
      // 前回この単元を購入したときに、決済は成功したがサーバー確認が未完了の
      // まま終わっている場合は、購入をやり直さずに確認だけをリトライする。
      const alreadyPurchasedPending = await isPending(PENDING_KEY_PREFIX, uidRef.current, lessonId);
      if (!alreadyPurchasedPending) {
        try {
          await purchaseProduct(product);
          await markPending(PENDING_KEY_PREFIX, uidRef.current, lessonId);
        } catch (e) {
          if (mounted.current) setPurchasingLessonId(null);
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
          await markUnitUnlocked(lessonId);
          await clearPending(PENDING_KEY_PREFIX, uidRef.current, lessonId);
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

  // 購入ボタンの連打で、購入の確認ダイアログや決済が二重に走らないようにする
  // （state の更新は遅れるので、同期的に確かめられる ref で守る）
  const inFlight = useRef(false);
  const unlockUnit = useCallback(
    async (lessonId: string): Promise<UnitUnlockPurchaseResult> => {
      if (inFlight.current) return { ok: false, message: '', cancelled: true };
      inFlight.current = true;
      try {
        return await unlockUnitInner(lessonId);
      } finally {
        inFlight.current = false;
      }
    },
    [unlockUnitInner]
  );

  const storePriceString = (product as { priceString?: string } | null)?.priceString;

  return {
    unlockedIds,
    loading,
    productReady: isWebPlatform || product != null,
    priceLabel: storePriceString ?? UNIT_UNLOCK_PRICE_LABEL,
    unlockUnit,
    purchasingLessonId,
  };
}
