# 多層下請・透明性管理 設計正本（建設業法第22条対応）

> **前提**：画面実装は弁護士（建設業法・下請法）確認後。本書は「大手→中小→組合→一人親方」構造の法的整理と Zaibase の役割定義。  
> 関連：[`SPEC.md`](./SPEC.md) §20・§15③・§19・[`teams-coop-design.md`](./teams-coop-design.md)

---

## 0. 全体構造

```
大手ゼネコン（発注者・元請）
　↓ 元請契約
中小建設会社（1次下請）
　↓ 下請契約（専門工事を分離発注）
一人親方組合（2次下請）
　↓ 組合内の業務分担・従事分量配当
組合員の一人親方（実際の施工）
```

**Zaibaseの立場**：上記チェーンの**当事者ではない**。**透明性の担保者**（契約・実質関与・階層・報酬の可視化と証跡）。

---

## 1. 法的リスク3点（最重要）

### ① 一括下請負の禁止（建設業法第22条）—— 最重要

受注した建設工事の**全部または主要部分**を下請に丸投げすることを禁止。

| 違反時の制裁（監督処分基準） | 内容 |
|---|---|
| 営業停止 | **15日以上** |
| その他 | 建設業許可取消の可能性 |

**Zaibaseでの検知シグナル（設計）**

- 下請契約の工事内容が上位契約と**ほぼ同一**（専門分離なし）
- 中間層の `substantiveInvolvement` 証跡が**ゼロ**
- 報酬の大部分が中間層に滞留（末端への分配率が閾値未満）

### ② 下請階層の深さ

| 区分 | 内容 |
|---|---|
| 建設業法 | 「何次まで」と明文化した上限条文は**なし** |
| 実務 | 元請の指導監督義務が階層とともに困難化 → **実質3次が限界** |
| 自治体 | 多くが**3次下請まで**の独自制限 |

**Zaibaseルール（システム既定）**

- `tierLevel > 3` → **案件登録ブロック**（管理者 override 不可のデフォルト）
- `tierLevel === 3` → 警告バナー＋実質関与証跡を**必須**

### ③ 実質的関与（名義貸し・中間搾取の排除）

1次・2次下請でも、以下を**主として**行うことが求められる。

- 施工計画の作成
- 工程管理
- 品質管理
- 安全管理
- 技術的指導

**名前だけ挟む中間業者＝違法リスク**。Zaibaseは写真報告・現場記録・指示書のタイムスタンプで**関与の有無**を証跡化する。

---

## 2. 合法構造 vs 違法構造

```
【合法】
大手 → 中小（1次）← 工程・品質・安全を実際に担当
     → 組合（2次）← 専門工種（タイル・配管等）を実際に施工
     → 組合員   ← 手を動かす
◎ 各層が実質関与 / 専門工種分離発注

【違法】
大手 → 中小（1次）← 丸投げ ✗
     → 組合（2次）← 丸投げ ✗
     → 一人親方  ← 施工のみ
✗ 名義貸し・中間搾取・一括下請に該当しうる
```

---

## 3. Zaibaseの役割：透明性の担保者

### 3.1 できること（5機能）

| # | 機能 | 既存資産 | 新規 |
|---|---|---|---|
| **①** | **契約の透明化** | `contracts`・契約書HTML生成 | `contractChains`・階層ツリーUI |
| **②** | **実質関与の記録** | `photoReportScreen`・`sitePhotos`・`hazardReports` | `substantiveInvolvement` チェックリスト＋証跡紐付け |
| **③** | **下請構造の可視化** | — | 元請〜末端の階層一覧・3次アラート |
| **④** | **報酬の透明化** | `payment_alert.js`・60日期限 | 階層別マージン表示・末端分配率アラート |
| **⑤** | **CCUS連携** | `ccus.js`・`ccusLogs` | 全層の就業履歴を `chainId` で紐付け |

### 3.2 絶対にしてはいけないこと（利用規約・システムゲート）

| 禁止 | 理由 |
|---|---|
| Zaibase自身が中間に入り丸投げしながら手数料を取る | 商業ブローカー化・一括下請助長 |
| 4次以下の多重下請を容認・助長 | 監督困難・末端の単価剥奪 |
| 「名義だけ貸す」業者の登録 | 実質関与なし＝違法構造 |
| 末端への不適正報酬を見て見ぬふり | フリーランス保護法・下請法・プラットフォーム責任 |

### 3.3 手数料が取れるポイント（中間に入らない）

Zaibaseは**チェーンの1リンクをマッチングした当事者**からのみ課金する。階層ごとに「中抜き」しない。

| 収益源 | 誰が払う | 法的ラベル |
|---|---|---|
| マッチング手数料 | 各契約の**発注側**（下請発注者） | プラットフォーム利用料（§6.4逓減） |
| 透明化ダッシュボード | 元請・1次下請（エンタープライズ月額） | SaaS利用料（§7.5） |
| エスクロー管理料 | 発注側 | 決済代行・預託管理（§6.7） |
| CCUS・証跡パック | Pro/Max 職人・組合 | サブスク付加価値 |

**例**：1次下請が組合に発注 → その**1件のマッチング**に対し1次下請が手数料負担。Zaibaseは2次・3次の「間」に入らない。

---

## 4. 多層契約管理：データモデル

### 4.1 `contractChains/{chainId}`

```typescript
{
  siteName: string;
  siteAddress: string;
  rootOrdererId: string;           // 最上位（大手ゼネコン側の登録者）
  rootOrdererName: string;
  maxTierAllowed: number;          // default 3（システム上限）
  currentMaxTier: number;          // 実際の最深階層
  status: 'active' | 'completed' | 'disputed';
  contractIds: string[];           // チェーンに属する全 contracts.id（順序付き）
  alerts: {
    type: 'tier_warning' | 'tier_blocked' | 'no_substance' | 'margin_squeeze' | 'payment_overdue';
    tierLevel: number;
    message: string;
    createdAt: Timestamp;
  }[];
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

### 4.2 `contracts` 拡張（多層用）

```typescript
{
  // 既存フィールド …

  chainId: string | null;
  parentContractId: string | null;   // 上位の請負契約
  tierLevel: 1 | 2 | 3;              // 1=元請直下 …
  tradeScope: string;                // 専門工種（分離発注の証明）
  isSpecializedSubcontract: boolean; // 専門工事分離フラグ

  // 実質的関与（tier 1-2 は原則必須）
  substantiveInvolvement: {
    constructionPlan: boolean;
    scheduleManagement: boolean;
    qualityManagement: boolean;
    safetyManagement: boolean;
    technicalGuidance: boolean;
    lastVerifiedAt: Timestamp | null;
    evidenceIds: string[];           // photoReports / sitePhotos / hazardReports
  };

  // 報酬透明化
  upstreamRewardAmount: number | null;  // 上位からの受取額（自己申告＋契約連鎖）
  downstreamRewardAmount: number;       // 下位への発注額（= rewardAmount）
  endPartySharePct: number | null;      // 末端施工者への分配率（組合案件）
}
```

### 4.3 ゲートルール（Functions / UI）

| 条件 | アクション |
|---|---|
| `tierLevel > 3` | 下請契約の**作成不可** |
| `tierLevel === 2` かつ `isSpecializedSubcontract === false` | 警告＋弁護士確認推奨 |
| `tierLevel <= 2` かつ `substantiveInvolvement` 5項目中3未満 | 契約**有効化保留** |
| `endPartySharePct < 0.5`（仮閾値・要専門家調整） | `margin_squeeze` アラート |
| 上位と下位の `tradeScope` が同一かつ工事範囲が100%包含 | `bulk_subcontract_risk` アラート |

### 4.4 インデックス

- `contracts`: `chainId` ASC + `tierLevel` ASC
- `contractChains`: `rootOrdererId` ASC + `updatedAt` DESC

（`firestore.indexes.json` に追記予定）

---

## 5. 画面設計：多層契約管理（`#chainScreen`）

> **着手条件**：§20.4 弁護士確認後。チーム機能（§19）と**並行または後続**で実装。

### 5.1 画面構成（3タブ）

| タブ | ユーザー | 内容 |
|---|---|---|
| **チェーン一覧** | 元請・1次下請 | 現場ごとの下請階層ツリー・最大3次・警告バッジ |
| **実質関与** | 1次・2次下請 | 5項目チェック＋写真報告・安全報告の紐付け |
| **報酬フロー** | 全層（閲覧権限で制限） | 階層別金額・末端分配率・60日支払いカウントダウン |

### 5.2 主要フロー

```
1. 1次下請が「下請発注」を登録（既存 jobPost + chainId 紐付け）
2. 専門工種を明示（tradeScope）— 一括下請リスクチェック
3. 2次（組合）が応募・契約 → tierLevel=2, parentContractId 設定
4. 1次下請が実質関与タブで証跡アップロード（週1リマインド）
5. 組合内分配完了 → endPartySharePct 自動計算
6. 元請はチェーン一覧で全層を閲覧（エンタープライズ）
```

### 5.3 既存画面との統合

| 既存 | 統合方法 |
|---|---|
| `jobPostScreen` | 「既存チェーンに追加」「新規チェーン開始」「tierLevel 表示」 |
| `photoReportScreen` | 報告書に `chainId` + `contractId` を保存 |
| `paymentScreen` | 階層別支払状況を `chainId` で集約 |
| `adminScreen` | `alerts[]` 一覧・`needsAdminAlert` 連携 |

---

## 6. まとめ（ユーザー整理の正本化）

| 論点 | 答え |
|---|---|
| 大手→中小→組合→一人親方は合法か | **各層が実質的に関与**し、**専門工種分離**なら合法の余地 |
| 何次まで | 法律上の明確上限なし。**実質3次が限界**。Zaibaseは**3次でブロック** |
| 丸投げしたら | 営業停止15日以上・許可取消も |
| Zaibaseの役割 | **透明性の担保者**（契約・関与・階層・報酬の可視化） |
| Zaibaseが儲ける | 各マッチングの手数料（発注側）＋透明化SaaS月額（元請/1次） |

---

## 7. 弁護士確認チェックリスト（画面着手ゲート）

- [ ] 専門工事「分離発注」の要件を満たす `tradeScope` 設計の十分性
- [ ] `substantiveInvolvement` 5項目と証跡種別の妥当性
- [ ] 3次ブロックの強制がプラットフォーム利用規約上十分か
- [ ] 階層別報酬表示が下請法・フリーランス保護法の書面要件を補完できるか
- [ ] Zaibaseがチェーンの「透明性のみ」を提供し中間業者にならない表現（利用規約）
- [ ] `endPartySharePct` アラート閾値の根拠

---

*最終更新: 2026-06-09 / 画面実装前の設計正本*
