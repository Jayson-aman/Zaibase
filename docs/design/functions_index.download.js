/**
 * Zaibase Cloud Functions — エントリーポイント
 * ─────────────────────────────────────────────────────────────
 * 全モジュールをここで統合してエクスポートする
 *
 * ファイル構成：
 *   functions/
 *     index.js                   ← このファイル
 *     modules/
 *       contractGenerator.js     ← 契約書生成（Python呼び出し）
 *       paymentAlert.js          ← 支払期日アラート
 *       escrow.js                ← エスクロー決済（Stripe）
 *       churnPrevention.js       ← 解約防止通知
 *       ccus.js                  ← CCUS自動記録
 *       faceAuth.js              ← 顔認証入退場
 */

"use strict";

// ── モジュール読み込み ─────────────────────────────────────────
const paymentAlert    = require("./modules/paymentAlert");
const escrow          = require("./modules/escrow");
const churnPrevention = require("./modules/churnPrevention");
const ccus            = require("./modules/ccus");
const faceAuth        = require("./modules/faceAuth");

// ── 支払期日アラート ───────────────────────────────────────────
exports.paymentAlertScheduler = paymentAlert.paymentAlertScheduler;
exports.confirmPayment        = paymentAlert.confirmPayment;

// ── エスクロー決済 ─────────────────────────────────────────────
exports.createEscrow          = escrow.createEscrow;
exports.stripeWebhook         = escrow.stripeWebhook;
exports.reportWorkComplete    = escrow.reportWorkComplete;
exports.approveAndRelease     = escrow.approveAndRelease;
exports.disputeEscrow         = escrow.disputeEscrow;
exports.createStripeOnboarding = escrow.createStripeOnboarding;

// ── 解約防止 ───────────────────────────────────────────────────
exports.getChurnStats         = churnPrevention.getChurnStats;
exports.churnScheduler        = churnPrevention.churnScheduler;
exports.onPlanCancelled       = churnPrevention.onPlanCancelled;
exports.cancelSubscription    = churnPrevention.cancelSubscription;

// ── CCUS自動記録 ───────────────────────────────────────────────
exports.onGpsLogCreated       = ccus.onGpsLogCreated;
exports.onFaceAuthCreated     = ccus.onFaceAuthCreated;
exports.ccusRetryScheduler    = ccus.ccusRetryScheduler;
exports.registerCcusWorkerId  = ccus.registerCcusWorkerId;
exports.registerCcusSiteId    = ccus.registerCcusSiteId;
exports.getCcusMonthlySummary = ccus.getCcusMonthlySummary;

// ── 顔認証入退場 ───────────────────────────────────────────────
exports.registerFace          = faceAuth.registerFace;
exports.authenticateFace      = faceAuth.authenticateFace;
exports.onUserDeleted         = faceAuth.onUserDeleted;
exports.revokeFaceConsent     = faceAuth.revokeFaceConsent;
