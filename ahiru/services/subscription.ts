import { Platform } from 'react-native';

export type SubscriptionTier = 'free' | 'pro' | 'max';

export const ENTITLEMENT_PRO = 'pro';
export const ENTITLEMENT_MAX = 'max';
export const ENTITLEMENT_VOCAB = 'vocab';

const isWeb = Platform.OS === 'web';

const RC_KEY_IOS = process.env.EXPO_PUBLIC_RC_API_KEY_IOS ?? '';
const RC_KEY_ANDROID = process.env.EXPO_PUBLIC_RC_API_KEY_ANDROID ?? '';

export function isRevenueCatConfigured(): boolean {
  const key = Platform.select({ ios: RC_KEY_IOS, android: RC_KEY_ANDROID, default: '' }) ?? '';
  return key.length > 10 && !key.includes('XXXX');
}

export function initRevenueCat(): void {
  if (isWeb || !isRevenueCatConfigured()) return;
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

export function hasVocabEntitlement(info: unknown): boolean {
  if (!isRevenueCatConfigured()) return false;
  const active = (info as CustomerInfoLike)?.entitlements?.active ?? {};
  return ENTITLEMENT_VOCAB in active;
}

export async function getCustomerInfo(): Promise<unknown> {
  if (isWeb || !isRevenueCatConfigured()) {
    return { entitlements: { active: {} } };
  }
  const Purchases = (await import('react-native-purchases')).default;
  return Purchases.getCustomerInfo();
}

export const PRODUCT_ID_PRO = 'com.zaibase.exam.pro.monthly';
export const PRODUCT_ID_MAX = 'com.zaibase.exam.max.monthly';
export const PRODUCT_ID_VOCAB_MONTHLY = 'com.zaibase.exam.vocab.monthly';
export const PRODUCT_ID_VOCAB_YEARLY = 'com.zaibase.exam.vocab.yearly';

export async function fetchCurrentOffering(): Promise<unknown> {
  if (isWeb || !isRevenueCatConfigured()) return null;
  const Purchases = (await import('react-native-purchases')).default;
  const offerings = await Purchases.getOfferings();
  return offerings.current ?? null;
}

export async function fetchProMaxProducts(): Promise<{ pro: unknown; max: unknown }> {
  if (isWeb || !isRevenueCatConfigured()) return { pro: null, max: null };
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
  if (isWeb || !isRevenueCatConfigured()) return { monthly: null, yearly: null };
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

export async function purchaseProduct(product: unknown): Promise<unknown> {
  if (!isRevenueCatConfigured()) throw new Error('課金は準備中です');
  const Purchases = (await import('react-native-purchases')).default;
  const { customerInfo } = await Purchases.purchaseStoreProduct(product as never);
  return customerInfo;
}

export async function purchasePackage(pkg: unknown): Promise<unknown> {
  if (!isRevenueCatConfigured()) {
    throw new Error('課金は準備中です');
  }
  const Purchases = (await import('react-native-purchases')).default;
  const { customerInfo } = await Purchases.purchasePackage(pkg as never);
  return customerInfo;
}

export async function restorePurchases(): Promise<unknown> {
  if (!isRevenueCatConfigured()) {
    throw new Error('課金は準備中です');
  }
  const Purchases = (await import('react-native-purchases')).default;
  return Purchases.restorePurchases();
}
