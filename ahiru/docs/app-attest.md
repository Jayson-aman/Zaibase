# iOS App Attest（App Check）の導入と有効化手順（2026/11/15）

目的：アプリを経由しない自動登録・偽のアプリから、無料のAI枠を使わせない。顔などの個人データは使わない。

## しくみ
- アプリ（`services/appAttest.ts`）が端末の鍵で Apple に証明（attestation）→ Functions（`functions/appAttest.js`）が Apple のルート証明書までの鎖・nonce・App ID・環境を検証して保存。
- 以後は署名（assertion）を検証して、Firebase の App Check トークンを発行（Admin SDK の `createToken`）。トークンは Firebase の標準の仕組みで `req.app` に入る。
- 無料枠（`_freeGuard.js` の `requireAppCheckForFree`）は、既定では**見るだけ**（ログ `freeGuard appcheck` に present を出す）。`REQUIRE_APP_CHECK_FREE=1` で、トークンのない無料枠を断る。

## ユーザー作業（この順）
1. **Apple Team ID** を確認（developer.apple.com → Membership details の Team ID、10文字）。
2. **Firebase のアプリID**（`1:…:ios:…` または既存の web の `1:…:web:…`）を1つ選ぶ。iOS アプリを Firebase に未登録なら、既存の `EXPO_PUBLIC_FIREBASE_APP_ID`（web）でもよい。
3. `ahiru/functions/.env` に書く（秘密ではない）：
   ```
   APPLE_TEAM_ID=XXXXXXXXXX
   APP_CHECK_APP_ID=1:...
   ```
   TestFlight・App Store のビルドは `production`（既定）。Xcode から直接入れた開発ビルドだけ `APP_ATTEST_ENV=development`。
4. Google Cloud の IAM で、Functions の実行サービスアカウント（`zaibase-exam` の既定の Compute Engine サービスアカウント）に **「サービス アカウント トークン作成者」** を、そのサービスアカウント自身に付ける（`createToken` の署名に必要）。
5. `firebase deploy --only functions --project zaibase-exam`（他のシークレットを聞かれても仮の値で上書きしない）。
6. 新しいビルドを作って TestFlight で確認（`git log --oneline -1` で目的のコミットを確認してから `eas build`）。App Attest のエンタイトルメントは `app.json` に入れてある。Apple 側の App ID に App Attest が必要なら EAS が同期する（失敗したらビルドログに出る）。

## 確認と切りかえ
- 実機で AI英会話などを呼び、Cloud Logging の `freeGuard appcheck` が `present: true` になるか。`appAttest: ... rejected` の警告が無いか。
- 十分な割合になったら `REQUIRE_APP_CHECK_FREE=1` を `.env` に足して再デプロイ。**古いアプリ（2.2.13以前）と Android は無料枠が断られる**ので、更新が広まってから。Web は reCAPTCHA（`EXPO_PUBLIC_FIREBASE_RECAPTCHA_SITE_KEY`）が本番で設定済みか先に確認する。
- 全関数で Firebase 標準の `enforceAppCheck` にするのは、さらに後。

## 未確認・制限
- 検証コードは模擬の証明書（自作の鎖）で、受理・拒否の両方を確認済み。**Apple の本物の証明書での通しは、実機での初回が初めて**。
- ルート証明書は公開ライブラリからの転記（SHA-256 指紋 `1C:B9:82:3B:…` で始まる）。Apple 公式と照合すること。
- 端末ごとではなく**インストールごと**の鍵（アプリを入れ直すと新しい鍵）。入れ直しの回数を数えるのは、既存の端末ID・IPの上限と同じ役割。
- Android（Play Integrity）は未対応。
