/**
 * ahiru（中学受験対策）Cloud Functions — エントリーポイント
 *
 * プロジェクト: ahiru専用Firebaseプロジェクト（要作成）
 */
const { setGlobalOptions } = require("firebase-functions/v2");
const admin = require("firebase-admin");

admin.initializeApp();
setGlobalOptions({ region: "asia-northeast1", maxInstances: 10 });

// ── AI弱点コーチ（Maxプラン限定） ──────────────────────────────────
const aiCoach = require("./aiCoach");
exports.getWeakPointCoaching = aiCoach.getWeakPointCoaching;

// ── AI個別指導（Maxプラン限定・月18問・1問6往復） ──────────────────
const aiTutor = require("./aiTutor");
exports.askTutor = aiTutor.askTutor;
exports.addTutorCredits = aiTutor.addTutorCredits;

// ── 聞き流しTTS（英単語Pro・1日30回まで） ──────────────────────
const tts = require("./tts");
exports.speakText = tts.speakText;

// ── AI英会話練習（無料1日3・有料1日15メッセージまで） ──────────────────────
const aiConversation = require("./aiConversation");
exports.chatEnglishConversation = aiConversation.chatEnglishConversation;

// ── 全国ランキング（順位計算はサーバー側。全ユーザーの一覧を公開しないため） ──
const ranking = require("./ranking");
exports.getMyRanking = ranking.getMyRanking;
