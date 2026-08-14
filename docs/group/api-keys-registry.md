# Zaibase Group APIキー・証明書 台帳

Apple Developer / App Store Connect のAPIキーはApple ID（開発者アカウント）単位で発行され、**特定のアプリに紐付かず全アプリで共通利用できる**。そのため「どのキーが何用か」が分からなくなりやすい。新しいキーを作成・使用したら、必ずこの表に追記すること。

## 命名ルール

キー名は **「サービス名-アプリ名（略称）」** 形式にする（例：`RevenueCat-exam`）。`RevenueCat` のような用途不明の汎用名は付けない。

## App Store Connect API キー（統合 →「App Store Connect API」タブ＝チームキー）

権限（Role）を選択できるキー。RevenueCatの商品同期には最低 **App Manager** 権限が必要。

| キー名 | キーID | 権限 | 用途 | 対象アプリ | 作成日 |
|---|---|---|---|---|---|
| RevenueCat-exam | （生成後に記入） | App Manager | RevenueCatの商品カタログ同期（Products/価格の自動取得） | ahiru（Zaibase受験） | 2026-07-26 |
| [Expo] EAS Submit WDtUZLzdRn | 847R92HH2K | Admin | EAS Build / EAS Submit（Expo CLIが自動作成・管理） | ahiru（Zaibase受験） | 2026年6月頃 |

## App内購入キー（統合 →「アプリ内購入」タブ）

権限を選択できない、App内課金のサーバー間通信専用キー（App Store Server API・自動更新サブスクのプロモーションオファー等）。**RevenueCatの商品同期には使えない**（App Manager権限を持てないため）。

| キー名 | キーID | 用途 | 対象アプリ | 作成日 | 備考 |
|---|---|---|---|---|---|
| RevenueCat | 7P88W75AF2 | 用途不明（現在未使用） | 不明 | 2026-06-23 | ファイル名を`SubscriptionKey_7P88W75AF2.p8`に変更して保管していたため一時混同。今後は使わない場合、無効化を検討 |
| RevenueCat-ewp | 98XHC2P872 | おそらくEWP.Zaibase（英単語アプリ・Cursor担当）用 | EWP.Zaibase（推測・要確認） | 2026-06-28 | |
| QualiZ（クオリズ）- 国家資格の試験対策 | 475QBCC22Y | QualiZアプリ用 | QualiZ | 2026-07-13 | |
| RevenueCat（無効化済み） | Z9C9GXC8TL | — | — | 無効化: 2026-06-23 | 30日間のみApple側に表示 |

## Firebase / EAS 環境変数（参考・値は非公開）

各プロダクトの環境変数の詳細は各リポジトリの `docs/*-setup-checklist.md` を参照。ここにはキーの「存在と用途」だけ記録し、値自体は書かない。

| プロダクト | 環境変数 | 保管場所 | 詳細 |
|---|---|---|---|
| ahiru | `EXPO_PUBLIC_RC_API_KEY_IOS` | EAS production環境変数 | RevenueCat iOS公開SDKキー（`appl_...`） |
| ahiru | `REVENUECAT_SECRET_KEY` | Firebase Functions Secret | サーバー側でのentitlement判定用（RevenueCat Secret key） |

## 更新ルール

- 新しいAPIキー・証明書を作成したら、その場でこの表に追記する
- 用途が分からなくなったキーは「用途不明」と正直に書く（放置せず、いつか確認する対象として残す）
- 使わなくなったキーは無効化し、この表にも「無効化済み」と記録する
