/**
 * Zaibase 多層契約チェーン（§20）
 * createContractChain / validateChainSubcontract / createChainContract / updateSubstantiveInvolvement
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

const db = getFirestore();
const MAX_TIER = 3;
const END_PARTY_SHARE_MIN = 0.5;

function calcContractFee(amount) {
  if (!amount || amount <= 0) return 0;
  let rate = 0.08;
  if (amount >= 20000000) rate = 0.025;
  else if (amount >= 5000000) rate = 0.04;
  else if (amount >= 1000000) rate = 0.05;
  return Math.max(Math.round(amount * rate), 3000);
}

function normalizeTrade(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/[・\s　]/g, "")
    .trim();
}

function isSpecializedSeparation(parentTrade, childTrade, parentDesc, childDesc) {
  const p = normalizeTrade(parentTrade);
  const c = normalizeTrade(childTrade);
  if (!c) return false;
  if (p && c !== p) return true;
  const pd = String(parentDesc || "").slice(0, 200);
  const cd = String(childDesc || "").slice(0, 200);
  if (pd && cd && pd !== cd && cd.length < pd.length * 0.95) return true;
  return false;
}

function countSubstanceFlags(si) {
  if (!si) return 0;
  const keys = [
    "constructionPlan",
    "scheduleManagement",
    "qualityManagement",
    "safetyManagement",
    "technicalGuidance",
  ];
  return keys.filter((k) => si[k] === true).length;
}

function defaultSubstance() {
  return {
    constructionPlan: false,
    scheduleManagement: false,
    qualityManagement: false,
    safetyManagement: false,
    technicalGuidance: false,
    lastVerifiedAt: null,
    evidenceIds: [],
  };
}

async function getChain(chainId) {
  const snap = await db.collection("contractChains").doc(chainId).get();
  if (!snap.exists) throw new HttpsError("not-found", "契約チェーンが見つかりません");
  return { id: snap.id, ...snap.data() };
}

async function assertChainParticipant(chain, uid) {
  const ids = chain.participantIds || [];
  if (chain.rootOrdererId !== uid && !ids.includes(uid)) {
    throw new HttpsError("permission-denied", "このチェーンへのアクセス権がありません");
  }
}

exports.createContractChain = onCall({ region: "asia-northeast1", enforceAppCheck: true }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");

  const {
    helpPostId,
    siteName,
    siteAddress,
    period,
    rootAmount,
    rootOrdererName,
  } = req.data || {};

  if (!helpPostId || !siteName) {
    throw new HttpsError("invalid-argument", "helpPostId と siteName が必要です");
  }

  const uid = req.auth.uid;
  const postSnap = await db.collection("helpPosts").doc(helpPostId).get();
  if (!postSnap.exists) throw new HttpsError("not-found", "案件が見つかりません");
  const post = postSnap.data();
  if (post.userId !== uid) throw new HttpsError("permission-denied", "自分の案件のみチェーンを開始できます");

  const amount = Number(rootAmount || post.rewardAmount || 0);
  if (amount <= 0) throw new HttpsError("invalid-argument", "元請契約金額が不正です");

  const chainRef = db.collection("contractChains").doc();
  const now = FieldValue.serverTimestamp();
  const chainDoc = {
    siteName: String(siteName).slice(0, 120),
    siteAddress: String(siteAddress || post.address || post.area || "").slice(0, 200),
    period: String(period || post.workPeriod || "").slice(0, 80),
    rootAmount: amount,
    rootOrdererId: uid,
    rootOrdererName: String(rootOrdererName || post.displayName || "発注者").slice(0, 80),
    rootHelpPostId: helpPostId,
    maxTierAllowed: MAX_TIER,
    currentMaxTier: 0,
    status: "active",
    contractIds: [],
    helpPostIds: [helpPostId],
    participantIds: [uid],
    platformRevenueTotal: 0,
    endPartySharePct: null,
    alerts: [],
    createdAt: now,
    updatedAt: now,
  };

  await db.runTransaction(async (tx) => {
    tx.set(chainRef, chainDoc);
    tx.update(db.collection("helpPosts").doc(helpPostId), {
      chainId: chainRef.id,
      chainTierLevel: 1,
      isChainRootPost: true,
      parentContractId: null,
      tradeScope: post.trade || "",
      isSpecializedSubcontract: true,
      updatedAt: now,
    });
  });

  return {
    chainId: chainRef.id,
    message: "多層契約チェーンを開始しました。下請発注時に透明性が記録されます。",
  };
});

async function runValidateChainSubcontract(uid, data) {
  const {
    chainId,
    parentContractId,
    tradeScope,
    rewardAmount,
    workDescription,
    skipAmountCheck,
  } = data || {};

  if (!chainId) throw new HttpsError("invalid-argument", "chainId が必要です");

  const chain = await getChain(chainId);
  await assertChainParticipant(chain, uid);

  const amount = Number(rewardAmount || 0);
  const warnings = [];
  let nextTier = 1;
  let parentTrade = "";
  let upstreamAmount = chain.rootAmount || 0;

  if (parentContractId) {
    const parentSnap = await db.collection("contracts").doc(parentContractId).get();
    if (!parentSnap.exists) throw new HttpsError("not-found", "上位契約が見つかりません");
    const parent = parentSnap.data();
    if (parent.contractorId !== uid) {
      throw new HttpsError("permission-denied", "上位契約の受注者のみ下請発注できます");
    }
    if (parent.chainId !== chainId) {
      throw new HttpsError("invalid-argument", "上位契約がチェーンと一致しません");
    }
    nextTier = (parent.tierLevel || 1) + 1;
    parentTrade = parent.tradeScope || parent.trade || "";
    upstreamAmount = parent.rewardAmount || 0;
  } else if (chain.rootOrdererId !== uid) {
    throw new HttpsError("permission-denied", "元請以外は parentContractId が必要です");
  }

  if (nextTier > MAX_TIER) {
    throw new HttpsError("failed-precondition", `${MAX_TIER}次を超える下請発注はできません（建設業法第22条・透明性ガイドライン）`);
  }

  if (!skipAmountCheck) {
    if (amount <= 0) throw new HttpsError("invalid-argument", "下請報酬額を入力してください");
    if (amount > upstreamAmount) {
      throw new HttpsError("invalid-argument", `下請額は上位受取額（¥${upstreamAmount.toLocaleString()}）以下にしてください`);
    }
  }

  const specialized = isSpecializedSeparation(parentTrade, tradeScope, "", workDescription);
  if (!specialized && nextTier >= 2) {
    throw new HttpsError(
      "failed-precondition",
      "専門工種の分離発注が必要です。上位と異なる工種・工事範囲を明示してください（一括下請負リスク）"
    );
  }
  if (!specialized) {
    warnings.push("工種分離が不明確です。丸投げと誤認されないよう専門範囲を具体化してください。");
  }

  const endPartySharePct = upstreamAmount > 0 && amount > 0 ? amount / upstreamAmount : null;
  if (endPartySharePct != null && endPartySharePct < END_PARTY_SHARE_MIN && nextTier >= 2) {
    warnings.push(`末端分配率が${Math.round(endPartySharePct * 100)}%です。中間搾取リスクに注意（推奨50%以上）。`);
  }

  return {
    ok: true,
    nextTier,
    upstreamAmount,
    platformFee: amount > 0 ? calcContractFee(amount) : 0,
    endPartySharePct,
    warnings,
    requiresSpecialized: nextTier >= 2,
  };
}

exports.validateChainSubcontract = onCall({ region: "asia-northeast1", enforceAppCheck: true }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");
  return runValidateChainSubcontract(req.auth.uid, req.data);
});

exports.createChainContract = onCall({ region: "asia-northeast1", enforceAppCheck: true }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");

  const { helpPostId, conversationId, contractorId, contractorName, ordererName } = req.data || {};
  if (!helpPostId || !conversationId) {
    throw new HttpsError("invalid-argument", "helpPostId と conversationId が必要です");
  }

  const postSnap = await db.collection("helpPosts").doc(helpPostId).get();
  if (!postSnap.exists) throw new HttpsError("not-found", "案件が見つかりません");
  const post = postSnap.data();
  if (!post.chainId) {
    throw new HttpsError("failed-precondition", "この案件はチェーンに紐づいていません");
  }

  const chain = await getChain(post.chainId);
  const uid = req.auth.uid;
  const ordererId = post.userId;
  const contractorUid = contractorId || (ordererId === uid ? null : uid);
  if (!contractorUid) throw new HttpsError("invalid-argument", "受注者を特定できません");
  if (uid !== ordererId && uid !== contractorUid) {
    throw new HttpsError("permission-denied", "契約当事者のみ作成できます");
  }

  const tierLevel = post.chainTierLevel || 1;
  if (tierLevel > MAX_TIER) {
    throw new HttpsError("failed-precondition", `${MAX_TIER}次を超える契約は作成できません`);
  }

  const upstream = Number(post.upstreamRewardAmount || chain.rootAmount || 0);
  const rewardAmount = Number(post.rewardAmount || 0);
  if (rewardAmount > upstream) {
    throw new HttpsError("invalid-argument", "契約額が上位受取額を超えています");
  }

  const parentContractId = post.parentContractId || null;
  if (parentContractId) {
    const pSnap = await db.collection("contracts").doc(parentContractId).get();
    if (!pSnap.exists) throw new HttpsError("not-found", "上位契約がありません");
    const parent = pSnap.data();
    if (parent.contractorId !== ordererId) {
      throw new HttpsError("permission-denied", "発注者は上位契約の受注者である必要があります");
    }
  }

  const tradeScope = post.tradeScope || post.trade || "";
  if (tierLevel >= 2 && !post.isSpecializedSubcontract) {
    throw new HttpsError("failed-precondition", "2次以降は専門工事分離フラグが必要です");
  }

  const platformFee = calcContractFee(rewardAmount);
  const endPartySharePct = upstream > 0 ? Math.round((rewardAmount / upstream) * 1000) / 1000 : null;
  const contractRef = db.collection("contracts").doc();
  const now = FieldValue.serverTimestamp();

  const contractDoc = {
    title: post.title,
    deliverable: post.deliverable || post.title,
    rewardType: post.rewardType || "process",
    workContent: [post.deliverable, post.workPeriod].filter(Boolean).join(" / "),
    workDescription: [post.trade, post.title, post.desc].filter(Boolean).join(" / "),
    workDetail: post.desc || "",
    trade: post.trade || "",
    tradeScope,
    area: post.area || "",
    workLocation: post.address || post.area || "別途協議",
    workPeriod: post.workPeriod || "別途協議",
    rewardAmount,
    paymentDays: post.paymentDays || 60,
    paymentMethod: post.paymentMethod || "bank_transfer",
    noPromissoryNote: true,
    templateVersion: 4,
    chainId: post.chainId,
    parentContractId,
    tierLevel,
    isSpecializedSubcontract: !!post.isSpecializedSubcontract,
    upstreamRewardAmount: upstream,
    downstreamRewardAmount: rewardAmount,
    endPartySharePct,
    platformFeeAmount: platformFee,
    substantiveInvolvement: defaultSubstance(),
    chainStatus: tierLevel <= 2 ? "pending_substance" : "active",
    ordererId,
    contractorId: contractorUid,
    ordererName: ordererName || "発注者",
    contractorName: contractorName || "受注者",
    participants: [ordererId, contractorUid].sort(),
    helpPostId,
    conversationId,
    status: "active",
    escrowEnabled: false,
    generatedBy: uid,
    generatedAt: now,
    lawCompliance: {
      constructionLaw_art22: true,
      antiShamContract: true,
      subcontractAct_payment: true,
    },
  };

  const alerts = [...(chain.alerts || [])];
  if (tierLevel === MAX_TIER) {
    alerts.push({
      type: "tier_warning",
      tierLevel,
      message: "3次下請です。実質関与の証跡を必ず記録してください。",
      createdAt: new Date().toISOString(),
    });
  }
  if (endPartySharePct != null && endPartySharePct < END_PARTY_SHARE_MIN) {
    alerts.push({
      type: "margin_squeeze",
      tierLevel,
      message: `末端分配率 ${Math.round(endPartySharePct * 100)}% — 中間搾取リスク`,
      createdAt: new Date().toISOString(),
    });
  }

  const participantIds = Array.from(
    new Set([...(chain.participantIds || []), ordererId, contractorUid])
  );

  await db.runTransaction(async (tx) => {
    tx.set(contractRef, contractDoc);
    tx.update(db.collection("contractChains").doc(post.chainId), {
      contractIds: FieldValue.arrayUnion(contractRef.id),
      helpPostIds: FieldValue.arrayUnion(helpPostId),
      participantIds,
      currentMaxTier: Math.max(chain.currentMaxTier || 0, tierLevel),
      platformRevenueTotal: (chain.platformRevenueTotal || 0) + platformFee,
      endPartySharePct: endPartySharePct ?? chain.endPartySharePct,
      alerts,
      updatedAt: now,
    });
  });

  return {
    contractId: contractRef.id,
    chainId: post.chainId,
    tierLevel,
    platformFee,
    chainStatus: contractDoc.chainStatus,
    message: tierLevel <= 2
      ? "契約を作成しました。実質関与タブで5項目の証跡を登録してください。"
      : "契約を作成しました。",
  };
});

exports.updateSubstantiveInvolvement = onCall({ region: "asia-northeast1", enforceAppCheck: true }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");

  const { contractId, flags, evidenceIds } = req.data || {};
  if (!contractId) throw new HttpsError("invalid-argument", "contractId が必要です");

  const snap = await db.collection("contracts").doc(contractId).get();
  if (!snap.exists) throw new HttpsError("not-found", "契約が見つかりません");
  const c = snap.data();
  if (c.contractorId !== req.auth.uid && c.ordererId !== req.auth.uid) {
    throw new HttpsError("permission-denied", "契約当事者のみ更新できます");
  }
  if (!c.chainId) throw new HttpsError("failed-precondition", "チェーン契約のみ更新できます");
  if ((c.tierLevel || 1) > 2) {
    throw new HttpsError("failed-precondition", "3次契約は実質関与の対象外です");
  }

  const si = {
    constructionPlan: !!flags?.constructionPlan,
    scheduleManagement: !!flags?.scheduleManagement,
    qualityManagement: !!flags?.qualityManagement,
    safetyManagement: !!flags?.safetyManagement,
    technicalGuidance: !!flags?.technicalGuidance,
    lastVerifiedAt: FieldValue.serverTimestamp(),
    evidenceIds: Array.isArray(evidenceIds) ? evidenceIds.slice(0, 20) : [],
  };
  const count = countSubstanceFlags(si);
  const chainStatus = count >= 3 ? "active" : "pending_substance";

  const chainRef = db.collection("contractChains").doc(c.chainId);
  const chain = await getChain(c.chainId);
  const alerts = [...(chain.alerts || [])].filter((a) => a.type !== "no_substance" || a.tierLevel !== c.tierLevel);
  if (count < 3) {
    alerts.push({
      type: "no_substance",
      tierLevel: c.tierLevel,
      message: `実質関与 ${count}/5 項目 — 3項目以上で有効化`,
      createdAt: new Date().toISOString(),
    });
  }

  await db.runTransaction(async (tx) => {
    tx.update(snap.ref, {
      substantiveInvolvement: si,
      chainStatus,
      updatedAt: FieldValue.serverTimestamp(),
    });
    tx.update(chainRef, { alerts, updatedAt: FieldValue.serverTimestamp() });
  });

  return { ok: true, count, chainStatus, message: count >= 3 ? "実質関与を確認しました" : `あと${3 - count}項目必要です` };
});

exports.linkHelpPostToChain = onCall({ region: "asia-northeast1", enforceAppCheck: true }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");

  const {
    helpPostId,
    chainId,
    parentContractId,
    tradeScope,
    isSpecializedSubcontract,
    workDescription,
  } = req.data || {};

  const postSnap = await db.collection("helpPosts").doc(helpPostId).get();
  if (!postSnap.exists) throw new HttpsError("not-found", "案件が見つかりません");
  const post = postSnap.data();
  if (post.userId !== req.auth.uid) throw new HttpsError("permission-denied", "自分の案件のみ");

  const validation = await runValidateChainSubcontract(req.auth.uid, {
    chainId,
    parentContractId: parentContractId || null,
    tradeScope,
    rewardAmount: post.rewardAmount,
    workDescription: workDescription || post.desc,
  });

  const nextTier = validation.nextTier || 1;
  const upstream = validation.upstreamAmount || 0;

  await db.collection("helpPosts").doc(helpPostId).update({
    chainId,
    chainTierLevel: nextTier,
    parentContractId: parentContractId || null,
    tradeScope: String(tradeScope || post.trade || "").slice(0, 80),
    isSpecializedSubcontract: !!isSpecializedSubcontract,
    upstreamRewardAmount: upstream,
    isChainRootPost: false,
    updatedAt: FieldValue.serverTimestamp(),
  });

  await db.collection("contractChains").doc(chainId).update({
    helpPostIds: FieldValue.arrayUnion(helpPostId),
    participantIds: FieldValue.arrayUnion(req.auth.uid),
    updatedAt: FieldValue.serverTimestamp(),
  });

  return { ok: true, nextTier, upstreamAmount: upstream, warnings: validation.warnings || [] };
});
