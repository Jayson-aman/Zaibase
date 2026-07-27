# iOS 課金・ビルド セットアップ完全チェックリスト

TestFlight / App Store 提出に向けて、**この順番どおり**に設定すれば、ログイン・AI先生・課金がすべて動くビルドが作れる。
コード側はすべて実装済み。ダッシュボード側の設定と環境変数の登録だけが残っている。

- Firebaseプロジェクト：`zaibase-exam`
- iOS Bundle ID：`com.zaibase.exam`
- Apple ID（App）：`6782930084`
- EASプロジェクト：`@masaya.nanjo/entrance-exam`（id: `fee2f912-842f-470e-a90a-5f885535db09`）

---

## STEP 1. App Store Connect：サブスク商品を4本作成

App Store Connect → マイApp → Zaibase受験 → 「App内課金」または「サブスクリプション」

**サブスクリプショングループを2つ作る：**
- グループA「メインプラン」…PRO と MAX を入れる（同一グループにするとアップグレード/ダウングレード可）
- グループB「英単語」…vocab月額・年額を入れる

**商品4本（Product IDは下記と一字一句一致させること。ドットなし形式——Apple側のID再利用制限により旧ドット付きIDから変更された経緯があるため、必ず下記の形式を使うこと）：**

| プラン | Product ID | 種別 | 価格（日本・税込） | グループ |
|---|---|---|---|---|
| PRO 月額 | `com.zaibase.exam.promonthly` | 自動更新（1か月） | ¥1,980 | A メインプラン |
| MAX 月額 | `com.zaibase.exam.maxmonthly` | 自動更新（1か月） | ¥2,890 | A メインプラン |
| 英単語 月額 | `com.zaibase.exam.vocabmonthly` | 自動更新（1か月） | ¥1,680 | B 英単語 |
| 英単語 年額 | `com.zaibase.exam.vocabyearly` | 自動更新（1年） | ¥13,800 | B 英単語 |

（定義元・唯一の情報源：`services/subscription.ts` と `constants/pricing.ts`。この表が古くなっていたことがあるので、実装と食い違う場合は必ずコード側を信用すること）

- 各商品に「表示名」「説明」「審査用スクリーンショット」を設定（審査用スクショはPaywall画面のもので可）。
- 価格は「価格ポイント」から日本円で上記額に一致するものを選ぶ。
- **審査に出すには、少なくとも1つの商品を「App審査に添付」する必要がある**（初回のみ、Appのバージョンと一緒に審査される）。

## STEP 2. App Store Connect：契約・税・口座（Agreements）

「契約/税金/口座情報」→ 有料App（Paid Apps）契約に同意し、銀行口座・税務情報を登録。
**これが未完了だと課金商品が有効にならない**ので必ず完了させる。

## STEP 3. App Store Connect：App用共有シークレット（RevenueCat連携用）

「App内課金」→「App専用共有シークレット」を生成し、値をコピー。（STEP 4でRevenueCatに貼る）

## STEP 4. RevenueCat ダッシュボード設定

### 4-1. プロジェクト内に iOS アプリを追加
- App Bundle ID：`com.zaibase.exam`
- 「App-Specific Shared Secret」に STEP 3 でコピーした値を貼る
- 「In-App Purchase Key」（App Store Connect の「App内課金」→「App内課金キー」で作った .p8）をアップロード（推奨。Server通知の信頼性向上）

### 4-2. App Store Server通知のURL（App Store Connect側に設定）
App Store Connect →「App情報」→「App Store Server通知」の本番・Sandbox両方に以下を設定：
```
https://api.revenuecat.com/v1/apple/webhook
```

### 4-3. Entitlement（権限）を3つ作成 ※IDを完全一致
- `pro`
- `max`
- `vocab`

### 4-4. Products を取り込み
RevenueCat →「Products」で、STEP 1の4商品（`com.zaibase.exam.*`）をApp Storeから取り込む。

### 4-5. Products に Entitlement を割り当て
- `com.zaibase.exam.promonthly` → `pro`
- `com.zaibase.exam.maxmonthly` → `max`
- `com.zaibase.exam.vocabmonthly` → `vocab`
- `com.zaibase.exam.vocabyearly` → `vocab`

### 4-6. Offering を作成し、Package ID を設定 ※IDを完全一致
「Offerings」でデフォルトのOfferingを作り、以下のPackage（Identifier）を作って各商品を紐付ける：
- `pro_monthly` → PRO月額
- `max_monthly` → MAX月額
- `vocab_monthly` → 英単語月額
- `vocab_yearly` → 英単語年額

### 4-7. iOS用 Public API Key を取得
RevenueCat →「API Keys」→ iOSアプリの Public SDK Key（`appl_...`）をコピー。（STEP 6で使う）

## STEP 5. Firebase の Web APIキーを確認

Firebaseコンソール → プロジェクト `zaibase-exam` → プロジェクトの設定 →「マイアプリ」（ウェブアプリ）の設定値を控える：
- apiKey / authDomain / projectId / storageBucket / messagingSenderId / appId
- App Check（reCAPTCHA v3）のサイトキー（Web版用。iOSビルドだけなら任意）

## STEP 6. EAS に環境変数を登録

`~/Documents/GitHub/Zaibase/ahiru` フォルダの中で、以下を実行（値は実際のものに差し替え）。
`EXPO_PUBLIC_` 系はビルド時にアプリへ埋め込まれる。

```bash
# RevenueCat iOS（STEP 4-7でコピーしたキー）
eas env:create --environment production --name EXPO_PUBLIC_RC_API_KEY_IOS --value appl_実際のキー --type string --visibility sensitive

# Firebase（STEP 5の値）
eas env:create --environment production --name EXPO_PUBLIC_FIREBASE_API_KEY --value 実際の値 --type string --visibility sensitive
eas env:create --environment production --name EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN --value zaibase-exam.firebaseapp.com --type string --visibility plaintext
eas env:create --environment production --name EXPO_PUBLIC_FIREBASE_PROJECT_ID --value zaibase-exam --type string --visibility plaintext
eas env:create --environment production --name EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET --value 実際の値 --type string --visibility plaintext
eas env:create --environment production --name EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID --value 実際の値 --type string --visibility plaintext
eas env:create --environment production --name EXPO_PUBLIC_FIREBASE_APP_ID --value 実際の値 --type string --visibility sensitive
```

登録内容の確認：
```bash
eas env:list --environment production
```

## STEP 6.5【必須】サーバー側（Cloud Functions）の設定とデプロイ

**これを飛ばすと、課金したユーザー全員が「プランにアップグレードしてください」と拒否される。**
AI機能の課金判定・AI応答・音声合成はすべてサーバー側で行っており、以下の
シークレットが未設定だと、判定不能→安全側に倒して全拒否になるため。

```bash
cd ahiru/functions

# 課金判定（RevenueCat ダッシュボード → API keys → Secret API key）
firebase functions:secrets:set REVENUECAT_SECRET_KEY

# AI先生・AI英会話・AI弱点コーチ（Anthropic）
firebase functions:secrets:set ANTHROPIC_API_KEY

# ネイティブ発音の音声合成（OpenAI）
firebase functions:secrets:set OPENAI_API_KEY

# 関数本体をデプロイ
firebase deploy --only functions

# Firestoreのセキュリティルールをデプロイ
# （未反映だと全国ランキングが誰にも表示されない）
cd .. && firebase deploy --only firestore:rules
```

設定できたか確認：
```bash
firebase functions:secrets:access REVENUECAT_SECRET_KEY
```

## STEP 7. iOS ビルド

```bash
eas build --platform ios --profile production
```
- Apple ID ログイン → yes
- 証明書・プロファイルのEAS自動管理 → yes
- 10〜20分でクラウドビルド完了。

## STEP 8. TestFlight へアップロード

```bash
eas submit --platform ios --profile production
```
- App Store Connect にビルドが上がり、数十分の処理後 TestFlight に表示される。
- サブスクのSandboxテストは、App Store Connect →「ユーザーとアクセス」→「Sandbox テスター」でテスト用アカウントを作り、そのアカウントで購入テストを行う（実課金なし）。

---

## 補足：まだキーが揃わない場合の暫定ビルド

RevenueCat/Firebaseの設定が間に合わない場合、環境変数なしでも `eas build --platform ios --profile production` は通る。
その場合、問題演習・教科書・動く図解・英単語などのローカルコンテンツは動くが、ログイン・AI先生・課金は無効（Paywallは「準備中」表示）になる。
コア体験のTestFlight確認だけ先に行い、キーが揃ったら再ビルドすればよい。

## Android について
上表のProduct IDと価格はGoogle Play Consoleでも同じものを使う（`docs/pricing.md` 参照）。Android課金は現状アプリ内で停止中（Paywallに「近日実装予定」）なので、iOSが通ってから着手でよい。
