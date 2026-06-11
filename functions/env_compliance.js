/**
 * Zaibase 環境法令コンプライアンス（水質汚濁防止法・土壌汚染対策法）
 *
 * checkEnvCompliance   — 案件応募前の環境法令適合チェック
 * submitEnvComplianceDoc — 届出・調査報告書の自己申告登録
 * logEnvComplianceEvent  — 汚染土出品ブロック等の監査ログ
 *
 * 適用法令:
 *   水質汚濁防止法（昭和45年法律第138号）
 *     第5条: 特定施設設置届出義務（コンクリートプラント・洗浄設備等）
 *     第12条: 排水基準遵守義務
 *   土壌汚染対策法（平成14年法律第53号）
 *     第3条: 有害物質使用特定施設廃止時の土壌汚染状況調査義務
 *     第4条: 一定規模以上（3,000㎡以上）の土地形質変更時の届出義務
 *     第5条: 土壌汚染のおそれがある土地の調査命令
 *     第16条: 汚染土地の形質変更届出
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

const db = getFirestore();

// 土壌汚染対策法が適用されやすい工種
const SOIL_RELEVANT_TRADES = [
  "解体", "土工", "地盤改良", "掘削", "埋め立て", "残土", "浚渫",
  "土木", "基礎", "ボーリング", "杭工",
];

// 水質汚濁防止法上の特定施設を使う可能性がある工種
const WATER_RELEVANT_TRADES = [
  "解体", "コンクリート", "左官", "土木", "地盤改良", "掘削",
  "基礎", "外構", "杭工", "型枠",
];

function normalizeTrade(t) {
  return String(t || "").toLowerCase().replace(/[・\s　]/g, "");
}

function isTradeRelevant(trade, list) {
  const t = normalizeTrade(trade);
  return list.some((keyword) => t.includes(normalizeTrade(keyword)));
}

function isDocValid(doc) {
  if (!doc?.submitted) return false;
  if (!doc.expiry) return true;
  return doc.expiry >= new Date().toISOString().slice(0, 10);
}

/**
 * 案件・工種に対して環境法令コンプライアンスを検証する。
 * フロントエンドからは応募時・案件投稿時に呼び出す。
 */
exports.checkEnvCompliance = onCall({ region: "asia-northeast1" }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");

  const { trade, jobCategory, listingType, area } = req.data || {};
  const uid = req.auth.uid;

  const profSnap = await db.collection("craftsmanProfiles").doc(uid).get();
  if (!profSnap.exists) throw new HttpsError("not-found", "プロフィールが見つかりません");
  const prof = profSnap.data();
  const vd = prof.verificationDocs || {};

  const issues = [];
  const warnings = [];
  const isSoilRelevant = isTradeRelevant(trade, SOIL_RELEVANT_TRADES);
  const isWaterRelevant = isTradeRelevant(trade, WATER_RELEVANT_TRADES);

  // ── 土壌汚染対策法チェック ──────────────────────────────────────
  if (isSoilRelevant) {
    const soilDoc = vd.soilContamination;
    if (!isDocValid(soilDoc)) {
      const isDemo = normalizeTrade(trade).includes(normalizeTrade("解体"));
      if (isDemo) {
        // 解体工事は土壌汚染対策法 第3条（特定施設廃止）の直接対象リスクが高い
        issues.push({
          law: "土壌汚染対策法（第3条・第4条）",
          type: "soil_contamination",
          severity: "required",
          msg: "解体工事を行う前に、土壌汚染状況調査報告書または敷地の非汚染確認書が必要です。有害物質使用特定施設が存在した可能性がある場合、都道府県知事による調査命令の対象になります。",
          action: "env",
        });
      } else {
        warnings.push({
          law: "土壌汚染対策法（第4条）",
          type: "soil_contamination",
          severity: "warning",
          msg: `${trade}工事では土壌汚染対策法に基づく土地形質変更届出の要否を確認してください（3,000㎡以上の掘削・造成は届出が必要な場合があります）。`,
          action: "env",
        });
      }
    }
  }

  // ── 水質汚濁防止法チェック ─────────────────────────────────────
  if (isWaterRelevant) {
    const waterDoc = vd.waterQuality;
    if (!isDocValid(waterDoc)) {
      warnings.push({
        law: "水質汚濁防止法（第5条・第12条）",
        type: "water_quality",
        severity: "warning",
        msg: "コンクリート洗浄水・掘削汚濁水を公共水域や下水道に排出する場合は水質汚濁防止法の特定施設届出（第5条）および排水基準（第12条）の遵守が必要です。",
        action: "env",
      });
    }
  }

  // 汚染土の残土マッチング出品を防止
  if (listingType === "soil" || listingType === "zandoto") {
    issues.push({
      law: "土壌汚染対策法（第16条・第17条）",
      type: "contaminated_soil_listing",
      severity: "blocked",
      msg: "土壌汚染が確認された、または汚染のおそれがある残土・埋め立て土の出品はZaibaseの利用規約および土壌汚染対策法に基づき完全にブロックされています。土壌調査報告書または非汚染証明書が必要です。",
      action: "block",
    });
  }

  const ok = issues.filter((i) => i.severity === "required" || i.severity === "blocked").length === 0;

  // 監査ログ
  if (!ok || warnings.length > 0) {
    await db.collection("envComplianceLogs").add({
      uid,
      trade: trade || null,
      jobCategory: jobCategory || null,
      listingType: listingType || null,
      area: area || null,
      issues,
      warnings,
      passed: ok,
      checkedAt: FieldValue.serverTimestamp(),
    });
  }

  return { ok, issues, warnings };
});

/**
 * 水質汚濁防止法届出・土壌汚染調査報告書の自己申告を登録する。
 * verificationDocs.waterQuality / soilContamination に保存。
 */
exports.submitEnvComplianceDoc = onCall({ region: "asia-northeast1" }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");

  const { docType, submitted, expiry, referenceNo, notes } = req.data || {};
  const VALID_TYPES = ["waterQuality", "soilContamination"];
  if (!VALID_TYPES.includes(docType)) {
    throw new HttpsError("invalid-argument", "docType は waterQuality または soilContamination のみ有効です");
  }

  const expiryDate = expiry
    ? new Date(expiry).toISOString().slice(0, 10)
    : null;

  const docEntry = {
    submitted: !!submitted,
    expiry: expiryDate,
    referenceNo: String(referenceNo || "").slice(0, 80) || null,
    notes: String(notes || "").slice(0, 200) || null,
    updatedAt: FieldValue.serverTimestamp(),
  };

  await db.collection("craftsmanProfiles").doc(req.auth.uid).set(
    { verificationDocs: { [docType]: docEntry }, updatedAt: FieldValue.serverTimestamp() },
    { merge: true }
  );

  return { ok: true, docType, submitted: docEntry.submitted };
});

/**
 * 汚染土ブロック・不法投棄疑いなどのイベントを監査ログに記録する。
 * フロントエンド（出品フロー・違反報告）から呼び出す。
 */
exports.logEnvComplianceEvent = onCall({ region: "asia-northeast1" }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");

  const { eventType, listingId, details } = req.data || {};
  const VALID_EVENTS = [
    "contaminated_soil_blocked",
    "soil_survey_missing",
    "water_quality_missing",
    "illegal_dumping_report",
  ];
  if (!VALID_EVENTS.includes(eventType)) {
    throw new HttpsError("invalid-argument", "無効な eventType です");
  }

  await db.collection("envComplianceLogs").add({
    uid: req.auth.uid,
    eventType,
    listingId: listingId || null,
    details: details || null,
    createdAt: FieldValue.serverTimestamp(),
  });

  return { ok: true };
});
