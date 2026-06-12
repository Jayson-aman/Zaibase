# Zaibase Group

建設業に特化したデジタルプラットフォーム群。

```
Zaibase Group/          ← このリポジトリ（ハードディスク上のフォルダ）
├── kensetsu/           ← Zaibase建設
├── horitsu/            ← Zaibase法律相談（開発中）
├── brand/              ← 共有ブランド資産
├── docs/
│   ├── group/          ← グループ全体の戦略・収益計画
│   ├── kensetsu/       ← Zaibase建設 仕様・設計書
│   └── horitsu/        ← Zaibase法律相談 仕様・設計書
└── README.md           ← このファイル
```

## プロダクト

| | プロダクト | 概要 | 状態 |
|---|---|---|---|
| `kensetsu/` | **Zaibase建設** | 建設職人マッチング・労務管理・法令支援 | 本番準備中 |
| `horitsu/` | **Zaibase法律相談** | 建設業・労働法専門 法律相談サービス | 開発中 |

## 料金体系

### Zaibase建設（`kensetsu/`）
| プラン | 月払い | 年払い |
|---|---|---|
| フリー | ¥0 | — |
| スターター | ¥1,980 | ¥19,800 |
| プロ | ¥5,480 | ¥54,800 |
| チーム | ¥14,800 | ¥148,000 |

### Zaibase法律相談（`horitsu/`）
| プラン | 月払い | 年払い |
|---|---|---|
| フリー（初回1回のみ無料相談） | ¥0 | — |
| スタンダード | ¥2,980 | ¥29,800 |
| プロ | ¥7,800 | ¥78,000 |

> **グループ割引**：Zaibase建設プロプラン会員は法律相談スタンダード **¥1,000引き → ¥1,980/月**

## デプロイ手順

```bash
# Zaibase建設
cd kensetsu/
firebase use zaisai-share
firebase deploy

# Zaibase法律相談（準備中）
cd horitsu/
firebase use zaibase-horitsu   # 別Firebaseプロジェクト
firebase deploy
```

## ローカルで起動（開発確認）

```bash
# Zaibase建設
cd kensetsu/frontend
python3 -m http.server 8080
# → http://localhost:8080/Zaibase.html
```
