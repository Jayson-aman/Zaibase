import { Platform } from 'react-native';

export type SubscriptionTier = 'free' | 'pro' | 'max';

export const ENTITLEMENT_PRO = 'pro';
export const ENTITLEMENT_MAX = 'max';

const isWeb = Platform.OS === 'web';

const RC_KEY_IOS = process.env.EXPO_PUBLIC_RC_API_KEY_IOS ?? '';
const RC_KEY_ANDROID = process.env.EXPO_PUBLIC_RC_API_KEY_ANDROID ?? '';
const RC_KEY_WEB = process.env.EXPO_PUBLIC_RC_API_KEY_WEB ?? '';

// RevenueCatダッシュボードのWeb Billingオファリングで、このIDのパッケージを作成する
const WEB_PACKAGE_ID_PRO = 'pro_monthly';
const WEB_PACKAGE_ID_MAX = 'max_monthly';

const WEB_APP_USER_ID_KEY = 'zaibase_takken_rc_app_user_id';

export function isRevenueCatConfigured(): boolean {
  const key = isWeb ? RC_KEY_WEB : (Platform.select({ ios: RC_KEY_IOS, android: RC_KEY_ANDROID, default: '' }) ?? '');
  return key.length > 10 && !key.toUpperCase().includes('XXXX');
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
      Purchases.configure({ apiKey });
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

// com.zaibase.takken がバンドルID
export const PRODUCT_ID_PRO = 'com.zaibase.takken.pro.monthly';
export const PRODUCT_ID_MAX = 'com.zaibase.takken.max.monthly';

type WebPackageLike = { identifier: string };

async function fetchWebPackages(): Promise<{ pro: unknown; max: unknown }> {
  try {
    const purchases = await getWebPurchases();
    const offerings = await purchases.getOfferings();
    const current = offerings.current;
    if (!current) return { pro: null, max: null };
    const packages = current.availablePackages as WebPackageLike[];
    return {
      pro: packages.find((p) => p.identifier === WEB_PACKAGE_ID_PRO) ?? null,
      max: packages.find((p) => p.identifier === WEB_PACKAGE_ID_MAX) ?? null,
    };
  } catch {
    return { pro: null, max: null };
  }
}

export async function fetchProMaxProducts(): Promise<{ pro: unknown; max: unknown }> {
  if (!isRevenueCatConfigured()) return { pro: null, max: null };
  if (isWeb) return fetchWebPackages();
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

export async function purchaseProduct(product: unknown): Promise<unknown> {
  if (!isRevenueCatConfigured()) throw new Error('課金は準備中です。RevenueCatキーを設定してください。');
  if (isWeb) {
    const purchases = await getWebPurchases();
    const result = await purchases.purchase({ rcPackage: product as never });
    return result.customerInfo;
  }
  const Purchases = (await import('react-native-purchases')).default;
  const { customerInfo } = await Purchases.purchaseStoreProduct(product as never);
  return customerInfo;
}

export async function restorePurchases(): Promise<unknown> {
  if (!isRevenueCatConfigured()) throw new Error('課金は準備中です。');
  if (isWeb) {
    // Web版は購入時のブラウザに紐づく匿名IDで管理されるため、最新の顧客情報を再取得する
    const purchases = await getWebPurchases();
    return purchases.getCustomerInfo();
  }
  const Purchases = (await import('react-native-purchases')).default;
  return Purchases.restorePurchases();
}
