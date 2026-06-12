/**
 * Zaibase 顔認証入退場（AWS Rekognition）
 *
 * Phase 1: registerFace — 職人が自撮り → Rekognitionコレクション登録
 * Phase 2: authenticateFace — 現場タブレットで顔検索 → faceAuthLogs
 * Phase 3: onFaceAuthCreated（ccus.js）— CCUS就業履歴へ自動送信
 *
 * ⚠️ PHASE 2 — index.js からはエクスポートしていません
 *
 * Secrets:
 *   AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, REKOGNITION_COLLECTION_ID
 *
 * フィールド（craftsmanProfiles/{uid}）:
 *   faceAuthEnabled, rekognitionFaceId, faceRegisteredAt, faceAuthConsent
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { onDocumentDeleted } = require("firebase-functions/v2/firestore");
const { getFirestore, Timestamp } = require("firebase-admin/firestore");
const { defineSecret } = require("firebase-functions/params");

const db = getFirestore();

const AWS_ACCESS_KEY_ID = defineSecret("AWS_ACCESS_KEY_ID");
const AWS_SECRET_ACCESS_KEY = defineSecret("AWS_SECRET_ACCESS_KEY");
const AWS_REGION = defineSecret("AWS_REGION");
const REKOGNITION_COLLECTION = defineSecret("REKOGNITION_COLLECTION_ID");

const FACE_MATCH_THRESHOLD = 90;
const FACE_DETECT_MIN_CONFIDENCE = 90;
const AUTH_COOLDOWN_SEC = 300;

const FACE_SECRETS = [
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_REGION,
  REKOGNITION_COLLECTION,
];

function getOrdererId(c) {
  return c.ordererId || c.clientId;
}

function getRekognition() {
  const { RekognitionClient } = require("@aws-sdk/client-rekognition");
  return new RekognitionClient({
    region: AWS_REGION.value(),
    credentials: {
      accessKeyId: AWS_ACCESS_KEY_ID.value(),
      secretAccessKey: AWS_SECRET_ACCESS_KEY.value(),
    },
  });
}

function parseImageBase64(imageBase64) {
  const base64Data = String(imageBase64).replace(/^data:image\/\w+;base64,/, "");
  return Buffer.from(base64Data, "base64");
}

async function getCraftsmanFaceMeta(uid) {
  const profileSnap = await db.collection("craftsmanProfiles").doc(uid).get();
  const profile = profileSnap.data() || {};
  if (profile.rekognitionFaceId) {
    return {
      displayName: profile.displayName || "不明",
      rekognitionFaceId: profile.rekognitionFaceId,
      faceAuthEnabled: !!profile.faceAuthEnabled,
    };
  }

  const userSnap = await db.collection("users").doc(uid).get();
  const user = userSnap.data() || {};
  return {
    displayName: user.displayName || profile.displayName || "不明",
    rekognitionFaceId: user.rekognitionFaceId || null,
    faceAuthEnabled: !!user.faceAuthEnabled,
  };
}

async function saveCraftsmanFaceMeta(uid, fields) {
  await db.collection("craftsmanProfiles").doc(uid).set(fields, { merge: true });
}

async function deleteRekognitionFace(faceId) {
  if (!faceId) return;
  const rek = getRekognition();
  const { DeleteFacesCommand } = require("@aws-sdk/client-rekognition");
  await rek.send(new DeleteFacesCommand({
    CollectionId: REKOGNITION_COLLECTION.value(),
    FaceIds: [faceId],
  }));
}

exports.registerFace = onCall(
  { region: "asia-northeast1", enforceAppCheck: true, secrets: FACE_SECRETS },
  async (req) => {
    const uid = req.auth?.uid;
    const imageBase64 = req.data?.imageBase64;
    const consent = req.data?.consent;

    if (!uid) throw new HttpsError("unauthenticated", "login required");
    if (!imageBase64) throw new HttpsError("invalid-argument", "imageBase64 required");
    if (!consent) {
      throw new HttpsError("failed-precondition", "顔認証データの利用に同意してください");
    }

    const imageBytes = parseImageBase64(imageBase64);
    const rek = getRekognition();
    const { IndexFacesCommand, DetectFacesCommand } = require("@aws-sdk/client-rekognition");

    const detectRes = await rek.send(new DetectFacesCommand({
      Image: { Bytes: imageBytes },
      Attributes: ["DEFAULT"],
    }));

    const faces = detectRes.FaceDetails || [];
    if (faces.length === 0) {
      throw new HttpsError("invalid-argument", "顔が検出できませんでした。正面を向いて撮影してください。");
    }
    if (faces.length > 1) {
      throw new HttpsError("invalid-argument", "複数の顔が検出されました。1人で撮影してください。");
    }

    const confidence = faces[0].Confidence ?? 0;
    if (confidence < FACE_DETECT_MIN_CONFIDENCE) {
      throw new HttpsError("invalid-argument", "顔の検出精度が低いです。明るい場所で撮影してください。");
    }

    const existing = await getCraftsmanFaceMeta(uid);
    if (existing.rekognitionFaceId) {
      try {
        await deleteRekognitionFace(existing.rekognitionFaceId);
      } catch (e) {
        console.warn("既存顔データ削除失敗（継続）:", e.message);
      }
    }

    const indexRes = await rek.send(new IndexFacesCommand({
      CollectionId: REKOGNITION_COLLECTION.value(),
      Image: { Bytes: imageBytes },
      ExternalImageId: uid,
      DetectionAttributes: ["DEFAULT"],
      MaxFaces: 1,
      QualityFilter: "HIGH",
    }));

    if (!indexRes.FaceRecords?.length) {
      throw new HttpsError("internal", "顔データの登録に失敗しました。");
    }

    const faceId = indexRes.FaceRecords[0].Face?.FaceId;
    const now = Timestamp.now();

    await saveCraftsmanFaceMeta(uid, {
      faceAuthEnabled: true,
      rekognitionFaceId: faceId,
      faceRegisteredAt: now,
      faceAuthConsent: true,
      faceAuthConsentAt: now,
      faceConsentRevokedAt: null,
    });

    return {
      success: true,
      faceId,
      message: "顔認証の登録が完了しました。現場での入退場認証が使えます。",
    };
  }
);

exports.authenticateFace = onCall(
  { region: "asia-northeast1", enforceAppCheck: true, secrets: FACE_SECRETS },
  async (req) => {
    const imageBase64 = req.data?.imageBase64;
    const contractId = req.data?.contractId;
    const siteId = req.data?.siteId ?? null;
    const authType = req.data?.type === "exit" ? "exit" : "entry";

    if (!imageBase64 || !contractId) {
      throw new HttpsError("invalid-argument", "imageBase64 and contractId required");
    }

    const contractDoc = await db.collection("contracts").doc(contractId).get();
    if (!contractDoc.exists) {
      throw new HttpsError("not-found", "contract not found");
    }

    const contract = contractDoc.data();
    const callerUid = req.auth?.uid;
    if (callerUid) {
      const ordererId = getOrdererId(contract);
      const contractorId = contract.contractorId || contract.workerId;
      if (callerUid !== ordererId && callerUid !== contractorId) {
        throw new HttpsError("permission-denied", "この現場の入退場認証権限がありません");
      }
    }

    const imageBytes = parseImageBase64(imageBase64);
    const rek = getRekognition();
    const { SearchFacesByImageCommand } = require("@aws-sdk/client-rekognition");

    let searchRes;
    try {
      searchRes = await rek.send(new SearchFacesByImageCommand({
        CollectionId: REKOGNITION_COLLECTION.value(),
        Image: { Bytes: imageBytes },
        MaxFaces: 1,
        FaceMatchThreshold: FACE_MATCH_THRESHOLD,
      }));
    } catch (_) {
      return { success: false, authenticated: false, reason: "顔が検出できませんでした" };
    }

    const matches = searchRes.FaceMatches ?? [];
    if (!matches.length) {
      await logUnknownFaceAttempt(contractId, authType);
      return {
        success: false,
        authenticated: false,
        reason: "登録されていない顔です。Zaibaseアプリで顔登録を行ってください。",
      };
    }

    const best = matches[0];
    const similarity = best.Similarity ?? 0;
    const matchedUid = best.Face?.ExternalImageId;
    if (!matchedUid) {
      return { success: false, authenticated: false, reason: "認証エラー" };
    }

    const recentLog = await db.collection("faceAuthLogs")
      .where("userId", "==", matchedUid)
      .where("contractId", "==", contractId)
      .where("type", "==", authType)
      .orderBy("timestamp", "desc")
      .limit(1)
      .get();

    if (!recentLog.empty) {
      const lastTime = recentLog.docs[0].data().timestamp.toDate();
      const elapsed = (Date.now() - lastTime.getTime()) / 1000;
      if (elapsed < AUTH_COOLDOWN_SEC) {
        return {
          success: false,
          authenticated: false,
          reason: `${Math.ceil((AUTH_COOLDOWN_SEC - elapsed) / 60)}分後に再認証できます`,
        };
      }
    }

    const craftsman = await getCraftsmanFaceMeta(matchedUid);

    let entryLogId = null;
    if (authType === "exit") {
      const entryLog = await db.collection("faceAuthLogs")
        .where("userId", "==", matchedUid)
        .where("contractId", "==", contractId)
        .where("type", "==", "entry")
        .orderBy("timestamp", "desc")
        .limit(1)
        .get();
      entryLogId = entryLog.empty ? null : entryLog.docs[0].id;
    }

    const today = new Date().toISOString().slice(0, 10);
    const logRef = await db.collection("faceAuthLogs").add({
      userId: matchedUid,
      userName: craftsman.displayName,
      contractId,
      siteId,
      type: authType,
      date: today,
      timestamp: Timestamp.now(),
      similarity,
      method: "face",
      entryLogId,
      ccusStatus: "pending",
    });

    return {
      success: true,
      authenticated: true,
      userId: matchedUid,
      userName: craftsman.displayName,
      similarity: Math.round(similarity * 10) / 10,
      type: authType,
      logId: logRef.id,
      timestamp: new Date().toISOString(),
    };
  }
);

exports.onCraftsmanProfileDeleted = onDocumentDeleted(
  { document: "craftsmanProfiles/{uid}", region: "asia-northeast1", secrets: FACE_SECRETS },
  async (event) => {
    const profile = event.data?.data();
    const faceId = profile?.rekognitionFaceId;
    if (!faceId) return;

    try {
      await deleteRekognitionFace(faceId);
      console.log(`顔データ削除完了: ${event.params.uid}`);
    } catch (e) {
      console.error(`顔データ削除失敗: ${e.message}`);
    }
  }
);

exports.revokeFaceConsent = onCall(
  { region: "asia-northeast1", enforceAppCheck: true, secrets: FACE_SECRETS },
  async (req) => {
    const uid = req.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "login required");

    const meta = await getCraftsmanFaceMeta(uid);
    if (meta.rekognitionFaceId) {
      try {
        await deleteRekognitionFace(meta.rekognitionFaceId);
      } catch (e) {
        console.error("Rekognition削除失敗:", e.message);
      }
    }

    await saveCraftsmanFaceMeta(uid, {
      faceAuthEnabled: false,
      rekognitionFaceId: null,
      faceRegisteredAt: null,
      faceAuthConsent: false,
      faceConsentRevokedAt: Timestamp.now(),
    });

    return { success: true, message: "顔認証データを削除しました。" };
  }
);

async function logUnknownFaceAttempt(contractId, authType) {
  await db.collection("securityLogs").add({
    type: "unknown_face_attempt",
    contractId,
    authType,
    timestamp: Timestamp.now(),
  });
}
