/**
 * iOS の App Attest で「本物のアプリ」であることを示し、Firebase の App Check トークンを受け取る。
 * サーバー側は functions/appAttest.js（先頭の説明を参照）。顔などの個人データは使わない。
 *
 * - 鍵は端末の Secure Enclave に作られ、アプリを消すと失われる（keyId だけを AsyncStorage に覚える）。
 * - 非対応の端末・シミュレーター・Android では何もしない（トークンなしで続ける。サーバーは見るだけ／設定次第で無料枠を断る）。
 * - この3つの呼び出しは、App Check を付けない別の Firebase アプリで行う（自分自身のトークン待ちで固まらないため）。
 */
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';

const KEY_STORE = 'ahiru_appattest_key_v1';
const FAIL_COOLDOWN_MS = 10 * 60 * 1000;
let lastFailAt = 0;

export function isAppAttestAvailable(config: object): boolean {
  if (Platform.OS !== 'ios') return false;
  return !!config;
}

function plainApp(config: object): FirebaseApp {
  const existing = getApps().find((a) => a.name === 'appattest');
  return existing ?? initializeApp(config, 'appattest');
}

async function call<T>(config: object, name: string, data: object): Promise<T> {
  const fn = httpsCallable<object, T>(getFunctions(plainApp(config), 'asia-northeast1'), name);
  return (await fn(data)).data;
}

async function newChallenge(config: object): Promise<string> {
  return (await call<{ challenge: string }>(config, 'appAttestChallenge', {})).challenge;
}

async function registerKey(config: object, AI: typeof import('@expo/app-integrity')): Promise<string> {
  const keyId = await AI.generateKeyAsync();
  const challenge = await newChallenge(config);
  const attestation = await AI.attestKeyAsync(keyId, challenge);
  await call(config, 'appAttestRegister', { keyId, attestation, challenge });
  await AsyncStorage.setItem(KEY_STORE, keyId);
  return keyId;
}

/** App Check トークンを取る。取れないときは例外（呼び出し側がトークンなしで続ける） */
export async function fetchAppAttestToken(config: object): Promise<{ token: string; expireTimeMillis: number }> {
  if (Platform.OS !== 'ios') throw new Error('unsupported');
  if (Date.now() - lastFailAt < FAIL_COOLDOWN_MS) throw new Error('cooldown');
  try {
    const AI = await import('@expo/app-integrity');
    if (!AI.isSupported) throw new Error('unsupported');
    let keyId = await AsyncStorage.getItem(KEY_STORE);
    if (!keyId) keyId = await registerKey(config, AI);
    const tryToken = async (id: string) => {
      const challenge = await newChallenge(config);
      const assertion = await AI.generateAssertionAsync(id, challenge);
      return call<{ token: string; ttlMillis: number }>(config, 'appAttestToken', { keyId: id, assertion, challenge });
    };
    let res: { token: string; ttlMillis: number };
    try {
      res = await tryToken(keyId);
    } catch (e: any) {
      // サーバーに鍵が無い・鍵が壊れている → 作りなおして一度だけやりなおす
      if (!/not-found|permission-denied/.test(String(e?.code ?? e?.message ?? ''))) throw e;
      await AsyncStorage.removeItem(KEY_STORE);
      keyId = await registerKey(config, AI);
      res = await tryToken(keyId);
    }
    // 期限の5分前に更新させる
    return { token: res.token, expireTimeMillis: Date.now() + res.ttlMillis - 5 * 60 * 1000 };
  } catch (e) {
    lastFailAt = Date.now();
    throw e;
  }
}
