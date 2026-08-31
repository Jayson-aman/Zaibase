import { Platform } from 'react-native';

export type SubscriptionTier = 'free' | 'pro' | 'max';

export const ENTITLEMENT_PRO = 'pro';
export const ENTITLEMENT_MAX = 'max';
export const ENTITLEMENT_VOCAB = 'vocab';

const isWeb = Platform.OS === 'web';

const RC_KEY_IOS = process.env.EXPO_PUBLIC_RC_API_KEY_IOS ?? '';
const RC_KEY_ANDROID = process.env.EXPO_PUBLIC_RC_API_KEY_ANDROID ?? '';
const RC_KEY_WEB = process.env.EXPO_PUBLIC_RC_API_KEY_WEB ?? '';

// RevenueCatダッシュボードのWeb Billingオファリングで、これらのIDのパッケージを作成する
const WEB_PACKAGE_ID_PRO = 'pro_monthly';
const WEB_PACKAGE_ID_MAX = 'max_monthly';
const WEB_PACKAGE_ID_VOCAB_MONTHLY = 'vocab_monthly';
const WEB_PACKAGE_ID_VOCAB_YEARLY = 'vocab_yearly';

const WEB_APP_USER_ID_KEY = 'zaibase_exam_rc_app_user_id';

export function isRevenueCatConfigured(): boolean {
  const key = isWeb ? RC_KEY_WEB : (Platform.select({ ios: RC_KEY_IOS, android: RC_KEY_ANDROID, default: '' }) ?? '');
  return key.length > 10 && !key.toUpperCase().includes('XXXX');
}

// Web版にはネイティブのようなCustomerInfo更新リスナーが無いため、購入・復元の直後に
// useSubscription/useVocabSubscription へ明示的に通知して画面の権限表示を即座に更新する。
type EntitlementListener = (info: unknown) => void;
const entitlementListeners = new Set<EntitlementListener>();

export function onEntitlementChanged(listener: EntitlementListener): () => void {
  entitlementListeners.add(listener);
  return () => entitlementListeners.delete(listener);
}

function emitEntitlementChanged(info: unknown): void {
  entitlementListeners.forEach((listener) => listener(info));
}

async function getWebPurchases() {
  const { Purchases } = await import('@revenuecat/purchases-js');
  if (Purchases.isConfigured()) return Purchases.getSharedInstance();
  let appUserId: string | null = null;
  try {
    appUserId = window.localStorage.getItem(WEB_APP_USER_ID_KEY);
  } catch {
    // localStorage不可時（プライベートブラウズ等）は毎回匿名IDを発行
  }
  if (!appUserId) {
    appUserId = Purchases.generateRevenueCatAnonymousAppUserId();
    try {
      window.localStorage.setItem(WEB_APP_USER_ID_KEY, appUserId);
    } catch {
      // 保存できなくても購入自体は可能
    }
  }
  return Purchases.configure({ apiKey: RC_KEY_WEB, appUserId });
}

// ログインしたユーザー（Firebase UID）をRevenueCatに紐付ける。
// 全デバイス・全プラットフォームで同一 appUserId になるため、加入状態が
// 共有され、iOSで加入した人がWebで二重に課金される事故を防げる。
export async function identifyUser(uid: string): Promise<void> {
  if (!isRevenueCatConfigured() || !uid) return;
  try {
    if (isWeb) {
      try {
        window.localStorage.setItem(WEB_APP_USER_ID_KEY, uid);
      } catch {
        // 保存不可でも続行
      }
      const { Purchases } = await import('@revenuecat/purchases-js');
      if (Purchases.isConfigured()) {
        const inst = Purchases.getSharedInstance() as unknown as {
          changeUser?: (id: string) => Promise<unknown>;
        };
        if (typeof inst.changeUser === 'function') {
          await inst.changeUser(uid);
          return;
        }
      }
      Purchases.configure({ apiKey: RC_KEY_WEB, appUserId: uid });
    } else {
      const Purchases = (await import('react-native-purchases')).default;
      await Purchases.logIn(uid);
    }
  } catch {
    // 紐付け失敗は致命的ではない（購入自体は可能）
  }
}

// ログアウト時：RevenueCatを匿名ユーザーへ戻す。
export async function logoutUser(): Promise<void> {
  if (!isRevenueCatConfigured()) return;
  try {
    if (isWeb) {
      try {
        window.localStorage.removeItem(WEB_APP_USER_ID_KEY);
      } catch {
        // ignore
      }
      const { Purchases } = await import('@revenuecat/purchases-js');
      const anon = Purchases.generateRevenueCatAnonymousAppUserId();
      if (Purchases.isConfigured()) {
        const inst = Purchases.getSharedInstance() as unknown as {
          changeUser?: (id: string) => Promise<unknown>;
        };
        if (typeof inst.changeUser === 'function') {
          await inst.changeUser(anon);
        }
      }
    } else {
      const Purchases = (await import('react-native-purchases')).default;
      await Purchases.logOut();
    }
  } catch {
    // ignore
  }
}

export function initRevenueCat(): void {
  if (!isRevenueCatConfigured()) return;
  if (isWeb) {
    getWebPurchases().catch(() => {
      // Web Billing未設定時は無視
    });
    return;
  }
  (async () => {
    try {
      const Purchases = (await import('react-native-purchases')).default;
      if (__DEV__) {
        const { LOG_LEVEL } = await import('react-native-purchases');
        Purchases.setLogLevel(LOG_LEVEL.DEBUG);
      }
      const apiKey =
        Platform.select({ ios: RC_KEY_IOS, android: RC_KEY_ANDROID }) ?? RC_KEY_IOS;

      // 先に匿名で configure してから logIn(uid) で紐付ける。
      //
      // configure({ appUserID }) を直接使ってはいけない：
      //   configure は「そのIDで始める」だけで、既存の匿名IDに紐づいた購入を
      //   引き継がない。既に購入済みの人が新バージョンを開くと別人扱いになり、
      //   課金しているのに無料表示に戻ってしまう。
      //   logIn は現在が匿名なら購入を新しいIDへ移し替える（エイリアス）ので、
      //   既存購入者も、匿名のまま購入した人が後からログインする場合も救われる。
      //
      // uid を紐付ける目的：サーバー（Cloud Functions）は Firebase uid で
      // RevenueCat に問い合わせるため、一致していないと課金者が無料扱いになる。
      Purchases.configure({ apiKey });

      // 認証の待ちで configure 自体が遅れないよう、紐付けは後追いで行う。
      // ネットワーク不調で認証が返らない場合に購入導線ごと死なせないため、
      // タイムアウトを設ける。
      try {
        const { getAuthUid } = await import('./firebaseClient');
        const uid = await Promise.race([
          getAuthUid(),
          new Promise<null>((resolve) => setTimeout(() => resolve(null), 8000)),
        ]);
        if (uid) await Purchases.logIn(uid);
      } catch {
        // 紐付けに失敗しても購入自体は可能。次回起動時に再試行される。
      }
    } catch {
      // RevenueCat 未設定時は無視
    }
  })();
}

type CustomerInfoLike = {
  entitlements?: { active?: Record<string, unknown> };
};

export function tierFromCustomerInfo(info: unknown): SubscriptionTier {
  if (!isRevenueCatConfigured()) return 'free';
  const active = (info as CustomerInfoLike)?.entitlements?.active ?? {};
  if (ENTITLEMENT_MAX in active) return 'max';
  if (ENTITLEMENT_PRO in active) return 'pro';
  return 'free';
}

export function hasVocabEntitlement(info: unknown): boolean {
  if (!isRevenueCatConfigured()) return false;
  const active = (info as CustomerInfoLike)?.entitlements?.active ?? {};
  return ENTITLEMENT_VOCAB in active;
}

export async function getCustomerInfo(): Promise<unknown> {
  if (!isRevenueCatConfigured()) {
    return { entitlements: { active: {} } };
  }
  if (isWeb) {
    const purchases = await getWebPurchases();
    return purchases.getCustomerInfo();
  }
  const Purchases = (await import('react-native-purchases')).default;
  return Purchases.getCustomerInfo();
}

// ⚠️ 製品IDは App Store Connect で一度作成すると削除しても再利用不可（Apple仕様）。
// アプリ誤削除→復元で旧ID（*.pro.monthly 等）が使用済みになったため、
// ドット無しの新IDに変更。App Store Connect / RevenueCat 側もこのIDで作成すること。
export const PRODUCT_ID_PRO = 'com.zaibase.exam.promonthly';
export const PRODUCT_ID_MAX = 'com.zaibase.exam.maxmonthly';
export const PRODUCT_ID_VOCAB_MONTHLY = 'com.zaibase.exam.vocabmonthly';
export const PRODUCT_ID_VOCAB_YEARLY = 'com.zaibase.exam.vocabyearly';
// ⚠️ 公式集（無料5個超）を1個¥50で買い切り解放する消費型（Consumable）商品。
// Pro/Maxの月額課金とは別枠。App Store Connect / Google Play Console / RevenueCat の
// いずれにも「このID・消費型・¥50」で新規登録するまでは fetchFormulaUnlockProduct が
// 空を返し続け、購入ボタンは「準備中」表示のままになる。
export const PRODUCT_ID_FORMULA_UNLOCK = 'com.zaibase.exam.formulaunlock';
// ⚠️ 学年×科目ごとに追加した新規単元（無料5個超）を1個¥100で買い切り解放する消費型商品。
// 上記と同様、App Store Connect / Google Play Console / RevenueCat にこのIDで
// 新規登録するまでは購入ボタンが「準備中」表示のままになる。
export const PRODUCT_ID_UNIT_UNLOCK = 'com.zaibase.exam.unitunlock';

type WebPackageLike = {
  identifier: string;
  webBillingProduct?: { currentPrice?: { formattedPrice?: string } };
};

type WebProductWrapper = { identifier: string; priceString: string; __webPackage: unknown };

function wrapWebPackage(pkg: WebPackageLike): WebProductWrapper {
  return {
    identifier: pkg.identifier,
    priceString: pkg.webBillingProduct?.currentPrice?.formattedPrice ?? '',
    __webPackage: pkg,
  };
}

function unwrapWebPackage(product: unknown): unknown {
  return (product as { __webPackage?: unknown } | null)?.__webPackage ?? product;
}

export async function fetchCurrentOffering(): Promise<unknown> {
  if (!isRevenueCatConfigured()) return null;
  if (isWeb) {
    try {
      const purchases = await getWebPurchases();
      const offerings = await purchases.getOfferings();
      return offerings.current ?? null;
    } catch {
      return null;
    }
  }
  const Purchases = (await import('react-native-purchases')).default;
  const offerings = await Purchases.getOfferings();
  return offerings.current ?? null;
}

async function fetchWebOfferingPackages(): Promise<WebPackageLike[]> {
  const purchases = await getWebPurchases();
  const offerings = await purchases.getOfferings();
  const current = offerings.current;
  return (current?.availablePackages as WebPackageLike[] | undefined) ?? [];
}

export async function fetchProMaxProducts(): Promise<{ pro: unknown; max: unknown }> {
  if (!isRevenueCatConfigured()) return { pro: null, max: null };
  if (isWeb) {
    try {
      const packages = await fetchWebOfferingPackages();
      const pro = packages.find((p) => p.identifier === WEB_PACKAGE_ID_PRO);
      const max = packages.find((p) => p.identifier === WEB_PACKAGE_ID_MAX);
      return {
        pro: pro ? wrapWebPackage(pro) : null,
        max: max ? wrapWebPackage(max) : null,
      };
    } catch {
      return { pro: null, max: null };
    }
  }
  try {
    const Purchases = (await import('react-native-purchases')).default;
    const products = await Purchases.getProducts([PRODUCT_ID_PRO, PRODUCT_ID_MAX]);
    return {
      pro: products.find((p) => p.identifier === PRODUCT_ID_PRO) ?? null,
      max: products.find((p) => p.identifier === PRODUCT_ID_MAX) ?? null,
    };
  } catch {
    return { pro: null, max: null };
  }
}

export async function fetchVocabProducts(): Promise<{ monthly: unknown; yearly: unknown }> {
  if (!isRevenueCatConfigured()) return { monthly: null, yearly: null };
  if (isWeb) {
    try {
      const packages = await fetchWebOfferingPackages();
      const monthly = packages.find((p) => p.identifier === WEB_PACKAGE_ID_VOCAB_MONTHLY);
      const yearly = packages.find((p) => p.identifier === WEB_PACKAGE_ID_VOCAB_YEARLY);
      return {
        monthly: monthly ? wrapWebPackage(monthly) : null,
        yearly: yearly ? wrapWebPackage(yearly) : null,
      };
    } catch {
      return { monthly: null, yearly: null };
    }
  }
  try {
    const Purchases = (await import('react-native-purchases')).default;
    const products = await Purchases.getProducts([PRODUCT_ID_VOCAB_MONTHLY, PRODUCT_ID_VOCAB_YEARLY]);
    return {
      monthly: products.find((p) => p.identifier === PRODUCT_ID_VOCAB_MONTHLY) ?? null,
      yearly: products.find((p) => p.identifier === PRODUCT_ID_VOCAB_YEARLY) ?? null,
    };
  } catch {
    return { monthly: null, yearly: null };
  }
}

// Web Billing（RevenueCat Web SDK）はサブスク用のオファリングPackageしか
// 扱えず、消費型のワンタイム商品には現状対応していないため、Web版では常にnullを返す。
export async function fetchFormulaUnlockProduct(): Promise<unknown> {
  if (!isRevenueCatConfigured() || isWeb) return null;
  try {
    const Purchases = (await import('react-native-purchases')).default;
    const products = await Purchases.getProducts([PRODUCT_ID_FORMULA_UNLOCK]);
    return products[0] ?? null;
  } catch {
    return null;
  }
}

export async function fetchUnitUnlockProduct(): Promise<unknown> {
  if (!isRevenueCatConfigured() || isWeb) return null;
  try {
    const Purchases = (await import('react-native-purchases')).default;
    const products = await Purchases.getProducts([PRODUCT_ID_UNIT_UNLOCK]);
    return products[0] ?? null;
  } catch {
    return null;
  }
}

export async function purchaseProduct(product: unknown): Promise<unknown> {
  if (!isRevenueCatConfigured()) throw new Error('課金は準備中です');
  let customerInfo: unknown;
  if (isWeb) {
    const purchases = await getWebPurchases();
    const result = await purchases.purchase({ rcPackage: unwrapWebPackage(product) as never });
    customerInfo = result.customerInfo;
  } else {
    const Purchases = (await import('react-native-purchases')).default;
    customerInfo = (await Purchases.purchaseStoreProduct(product as never)).customerInfo;
  }
  emitEntitlementChanged(customerInfo);
  return customerInfo;
}

export async function purchasePackage(pkg: unknown): Promise<unknown> {
  if (!isRevenueCatConfigured()) {
    throw new Error('課金は準備中です');
  }
  let customerInfo: unknown;
  if (isWeb) {
    const purchases = await getWebPurchases();
    const result = await purchases.purchase({ rcPackage: unwrapWebPackage(pkg) as never });
    customerInfo = result.customerInfo;
  } else {
    const Purchases = (await import('react-native-purchases')).default;
    customerInfo = (await Purchases.purchasePackage(pkg as never)).customerInfo;
  }
  emitEntitlementChanged(customerInfo);
  return customerInfo;
}

export async function restorePurchases(): Promise<unknown> {
  if (!isRevenueCatConfigured()) {
    throw new Error('課金は準備中です');
  }
  let customerInfo: unknown;
  if (isWeb) {
    // Web版は購入時のブラウザに紐づく匿名IDで管理されるため、最新の顧客情報を再取得する
    const purchases = await getWebPurchases();
    customerInfo = await purchases.getCustomerInfo();
  } else {
    const Purchases = (await import('react-native-purchases')).default;
    customerInfo = await Purchases.restorePurchases();
  }
  emitEntitlementChanged(customerInfo);
  return customerInfo;
}
