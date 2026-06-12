/**
 * Zaibase チーム・労働者協同組合（§19）
 * createTeam / joinTeamByInvite
 *
 * デプロイ: firebase deploy --only functions:createTeam,functions:joinTeamByInvite
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, FieldValue, Timestamp } = require("firebase-admin/firestore");

const db = getFirestore();

const TYPE_MAP = {
  subcontract: { type: "informal", legalStatus: "informal" },
  coop_planned: { type: "coop", legalStatus: "forming" },
  coop_existing: { type: "coop", legalStatus: "registered_coop" },
};

function genInviteCode() {
  return "ZB-" + Math.random().toString(36).slice(2, 8).toUpperCase();
}

function foundingChecklistTemplate() {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((stepId) => ({
    stepId: String(stepId),
    completed: false,
    completedAt: null,
    note: null,
  }));
}

exports.createTeam = onCall({ region: "asia-northeast1", enforceAppCheck: true }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");

  const {
    name,
    teamType = "subcontract",
    trades = [],
    areas = [],
    legalName = null,
    coopRegistrationNumber = null,
  } = req.data || {};

  if (!name || typeof name !== "string" || name.trim().length < 2 || name.length > 40) {
    throw new HttpsError("invalid-argument", "チーム名は2〜40文字で入力してください");
  }

  const mapped = TYPE_MAP[teamType] || TYPE_MAP.subcontract;
  if (mapped.legalStatus === "registered_coop" && !coopRegistrationNumber) {
    throw new HttpsError("invalid-argument", "登記済み組合は登記番号が必要です");
  }

  const uid = req.auth.uid;
  const displayName =
    req.data?.representativeName ||
    req.auth.token.name ||
    req.auth.token.email ||
    "代表者";

  const tradeList = Array.isArray(trades) ? trades.filter((t) => typeof t === "string").slice(0, 10) : [];
  const areaList = Array.isArray(areas) ? areas.filter((a) => typeof a === "string").slice(0, 5) : [];

  const existing = await db
    .collection("teams")
    .where("representativeUid", "==", uid)
    .where("status", "==", "active")
    .limit(3)
    .get();
  if (existing.size >= 3) {
    throw new HttpsError("resource-exhausted", "代表者として作成できるアクティブチームは3つまでです");
  }

  const inviteCode = genInviteCode();
  const now = FieldValue.serverTimestamp();
  const teamRef = db.collection("teams").doc();

  const teamDoc = {
    name: name.trim(),
    legalName: legalName?.trim() || null,
    slug: null,
    type: mapped.type,
    legalStatus: mapped.legalStatus,
    coopRegistrationNumber: coopRegistrationNumber?.trim() || null,
    corporateNumber: null,
    invoiceRegistrationNumber: null,
    constructionLicenseNo: null,
    representativeUid: uid,
    representativeName: displayName,
    trades: tradeList,
    areas: areaList,
    memberCount: 1,
    memberIds: [uid],
    minMembersForCoop: 3,
    stripeConnectAccountId: null,
    stripeOnboardingComplete: false,
    teamScore: 50,
    completedJobs: 0,
    totalContractValue: 0,
    ccusTotalDays: 0,
    avgRating: null,
    foundingChecklist: foundingChecklistTemplate(),
    status: "active",
    createdBy: uid,
    createdAt: now,
    updatedAt: now,
    disclaimerVersion: 1,
  };

  const memberDoc = {
    uid,
    displayName,
    trade: tradeList[0] || "",
    role: "founder",
    equityShares: 1,
    status: "active",
    coopFoundingConsent: mapped.type === "coop",
    joinedAt: now,
    leftAt: null,
    ccusDays: 0,
    jobsCompleted: 0,
  };

  const inviteRef = db.collection("teamInvites").doc();
  const inviteDoc = {
    teamId: teamRef.id,
    code: inviteCode,
    createdBy: uid,
    maxUses: 20,
    useCount: 0,
    expiresAt: Timestamp.fromDate(new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)),
    status: "active",
    createdAt: now,
  };

  const batch = db.batch();
  batch.set(teamRef, teamDoc);
  batch.set(teamRef.collection("members").doc(uid), memberDoc);
  batch.set(inviteRef, inviteDoc);
  batch.set(
    db.collection("craftsmanProfiles").doc(uid),
    { teamIds: FieldValue.arrayUnion(teamRef.id), updatedAt: now },
    { merge: true }
  );
  await batch.commit();

  return {
    teamId: teamRef.id,
    inviteCode,
    legalStatus: mapped.legalStatus,
    message:
      "チームを作成しました。本機能は弁護士・社労士確認前の設計実装です。法人格の労働者協同組合ではありません。",
  };
});

exports.joinTeamByInvite = onCall({ region: "asia-northeast1", enforceAppCheck: true }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");

  const { inviteCode, displayName: inputName, trade = "" } = req.data || {};
  if (!inviteCode || typeof inviteCode !== "string") {
    throw new HttpsError("invalid-argument", "招待コードが必要です");
  }

  const code = inviteCode.trim().toUpperCase();
  const uid = req.auth.uid;
  const displayName = inputName?.trim() || req.auth.token.name || req.auth.token.email || "メンバー";

  const inviteSnap = await db
    .collection("teamInvites")
    .where("code", "==", code)
    .where("status", "==", "active")
    .limit(1)
    .get();

  if (inviteSnap.empty) throw new HttpsError("not-found", "招待コードが無効です");

  const invite = inviteSnap.docs[0];
  const inviteData = invite.data();
  if (inviteData.useCount >= inviteData.maxUses) {
    throw new HttpsError("failed-precondition", "招待コードの利用上限に達しています");
  }
  if (inviteData.expiresAt?.toDate?.() < new Date()) {
    throw new HttpsError("failed-precondition", "招待コードの有効期限が切れています");
  }

  const teamRef = db.collection("teams").doc(inviteData.teamId);
  const teamSnap = await teamRef.get();
  if (!teamSnap.exists || teamSnap.data().status !== "active") {
    throw new HttpsError("not-found", "チームが見つかりません");
  }

  const team = teamSnap.data();
  if (team.memberIds?.includes(uid)) {
    throw new HttpsError("already-exists", "既にこのチームのメンバーです");
  }

  const memberRef = teamRef.collection("members").doc(uid);
  const existingMember = await memberRef.get();
  if (existingMember.exists && existingMember.data().status === "active") {
    throw new HttpsError("already-exists", "既にこのチームのメンバーです");
  }

  const now = FieldValue.serverTimestamp();
  const batch = db.batch();
  batch.set(memberRef, {
    uid,
    displayName,
    trade: typeof trade === "string" ? trade.slice(0, 30) : "",
    role: "member",
    equityShares: 0,
    status: "active",
    coopFoundingConsent: false,
    joinedAt: now,
    leftAt: null,
    ccusDays: 0,
    jobsCompleted: 0,
  });
  batch.update(teamRef, {
    memberCount: FieldValue.increment(1),
    memberIds: FieldValue.arrayUnion(uid),
    updatedAt: now,
  });
  batch.update(invite.ref, { useCount: FieldValue.increment(1) });
  batch.set(
    db.collection("craftsmanProfiles").doc(uid),
    { teamIds: FieldValue.arrayUnion(teamRef.id), updatedAt: now },
    { merge: true }
  );
  await batch.commit();

  return { teamId: teamRef.id, teamName: team.name };
});
