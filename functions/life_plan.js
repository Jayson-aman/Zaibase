/**
 * Zaibase シニア施工管理技師 支援センター（§34）
 *
 * getMentors      — メンター・相談窓口一覧取得
 * saveLifePlan    — ライフプラン保存（年齢別マイルストーン・退職計画等）
 * getLifePlanStats — ライフプラン統計（管理者向け）
 *
 * 対象: 50代以上の施工管理技師・現場監督
 * 目的: 心のケア・資格継続・経済設計・人脈・70〜80代現役支援
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

const db = getFirestore();

const VALID_PLAN_CATEGORIES = ["mental", "career", "finance", "network", "plan"];

/**
 * メンター・相談窓口一覧をFirestoreから返す。
 * データが存在しない場合はデフォルトのリソースリストを返す。
 */
exports.getMentors = onCall({ region: "asia-northeast1" }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");

  const snapshot = await db.collection("seniorMentors")
    .where("active", "==", true)
    .orderBy("priority", "asc")
    .limit(20)
    .get();

  if (snapshot.empty) {
    return {
      ok: true,
      mentors: [
        {
          id: "default_1",
          name: "建設業退職者支援センター",
          role: "キャリア・再就職相談",
          specialty: ["キャリア", "再就職", "資格相談"],
          contact: "https://www.kensetsu-kikin.or.jp/",
          note: "建設業退職金共済（建退共）の相談窓口も兼ねる。全国対応。",
        },
        {
          id: "default_2",
          name: "勤労者退職金共済機構",
          role: "退職金・経済設計",
          specialty: ["退職金", "財務計画"],
          contact: "https://www.kinou-taisyoku.jp/",
          note: "建退共・中退共の加入状況確認・給付申請。",
        },
        {
          id: "default_3",
          name: "産業カウンセラー協会",
          role: "メンタルヘルス相談",
          specialty: ["心のケア", "ストレス", "職場人間関係"],
          contact: "https://www.counselor.or.jp/",
          note: "電話・オンライン相談可。施工管理の現場ストレスに対応。",
        },
        {
          id: "default_4",
          name: "一般社団法人 日本施工管理技士会",
          role: "資格・技術継続支援",
          specialty: ["1級施工管理技士", "監理技術者", "資格更新"],
          contact: "https://www.jctc.jp/",
          note: "CPD登録・講習・資格更新手続きをサポート。",
        },
        {
          id: "default_5",
          name: "ファイナンシャルプランナー（FP）紹介",
          role: "定年後経済設計",
          specialty: ["年金", "iDeCo", "相続"],
          contact: "https://www.jafp.or.jp/",
          note: "日本FP協会の相談窓口。建設業特有の収入変動・共済に詳しいFPを指名可能。",
        },
        {
          id: "default_6",
          name: "厚生労働省 こころの健康相談統一ダイヤル",
          role: "24時間メンタル緊急相談",
          specialty: ["緊急相談", "メンタルヘルス"],
          contact: "tel:0570-064-556",
          note: "0570-064-556（24時間。匿名OK）",
        },
      ],
    };
  }

  const mentors = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  return { ok: true, mentors };
});

/**
 * ユーザーのライフプランを保存する。
 * カテゴリ別（mental/career/finance/network/plan）のデータをマージ保存。
 */
exports.saveLifePlan = onCall({ region: "asia-northeast1" }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");

  const { category, data } = req.data || {};
  if (!VALID_PLAN_CATEGORIES.includes(category)) {
    throw new HttpsError("invalid-argument", "category は mental/career/finance/network/plan のいずれかです");
  }
  if (!data || typeof data !== "object") {
    throw new HttpsError("invalid-argument", "data が必要です");
  }

  const planRef = db.collection("lifePlans").doc(req.auth.uid);
  await planRef.set(
    {
      uid: req.auth.uid,
      [category]: { ...data, savedAt: FieldValue.serverTimestamp() },
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );

  // ストレスチェックは別コレクションにも記録
  if (category === "mental" && data.stressScore !== undefined) {
    await db.collection("stressChecks").add({
      uid: req.auth.uid,
      score: Number(data.stressScore),
      level: data.stressLevel || null,
      answers: data.answers || null,
      checkedAt: FieldValue.serverTimestamp(),
    });
  }

  return { ok: true, category };
});

/**
 * ライフプラン統計を返す（管理者・ダッシュボード向け）。
 * 一般ユーザーには自分のデータのみ返す。
 */
exports.getLifePlanStats = onCall({ region: "asia-northeast1" }, async (req) => {
  if (!req.auth?.uid) throw new HttpsError("unauthenticated", "ログインが必要です");

  const uid = req.auth.uid;
  const planSnap = await db.collection("lifePlans").doc(uid).get();

  const now = new Date();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const stressSnap = await db.collection("stressChecks")
    .where("uid", "==", uid)
    .where("checkedAt", ">=", monthStart)
    .orderBy("checkedAt", "desc")
    .limit(10)
    .get();

  const plan = planSnap.exists ? planSnap.data() : {};
  const recentStress = stressSnap.docs.map((d) => ({
    score: d.data().score,
    level: d.data().level,
    checkedAt: d.data().checkedAt?.toDate?.()?.toISOString() || null,
  }));

  return {
    ok: true,
    hasPlan: planSnap.exists,
    categories: VALID_PLAN_CATEGORIES.filter((c) => !!plan[c]),
    recentStressChecks: recentStress,
    latestStressScore: recentStress[0]?.score ?? null,
  };
});
