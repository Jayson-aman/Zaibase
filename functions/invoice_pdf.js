/**
 * 適格請求書 PDF 生成 → Firebase Storage
 * デプロイ: firebase deploy --only functions:generateInvoicePdf
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const { getStorage } = require("firebase-admin/storage");
const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");
const https = require("https");

const db = getFirestore();
const FONT_TMP = "/tmp/ipaexg.ttf";
const FONT_CDN =
  "https://cdn.jsdelivr.net/gh/wordshub/free-font@master/IPAex%E3%83%95%E3%82%A9%E3%83%B3%E3%83%88/ipaexg.ttf";

function downloadFont() {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(FONT_TMP)) {
      resolve(FONT_TMP);
      return;
    }
    const file = fs.createWriteStream(FONT_TMP);
    https
      .get(FONT_CDN, (res) => {
        if (res.statusCode !== 200) {
          reject(new Error("フォントの取得に失敗しました"));
          return;
        }
        res.pipe(file);
        file.on("finish", () => file.close(() => resolve(FONT_TMP)));
      })
      .on("error", reject);
  });
}

function yen(n) {
  return "¥" + Math.round(Number(n) || 0).toLocaleString("ja-JP");
}

function calcTotals(items) {
  const subtotal = (items || []).reduce(
    (s, i) => s + (Number(i.qty) || 0) * (Number(i.price) || 0),
    0
  );
  const tax = Math.round(subtotal * 0.1);
  return { subtotal, tax, total: subtotal + tax };
}

function buildPdfBuffer(data, fontPath) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: "A4", margin: 48 });
    const chunks = [];
    doc.on("data", (c) => chunks.push(c));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    doc.registerFont("JP", fontPath);
    doc.font("JP");

    const { subtotal, tax, total } = calcTotals(data.items);

    doc.fontSize(20).text("請 求 書", { align: "center" });
    doc.moveDown(0.5);
    doc.fontSize(10).text(`請求書番号: ${data.invoiceNo || "—"}`, { align: "right" });
    doc.text(`発行日: ${data.issueDate || "—"}　支払期日: ${data.dueDate || "—"}`, {
      align: "right",
    });
    doc.moveDown();

    doc.fontSize(11).text(`${data.clientName || "—"} 御中`);
    doc.moveDown();

    doc.fontSize(10);
    doc.text(`請求元: ${data.issuerName || "—"}`);
    if (data.issuerAddr) doc.text(`住所: ${data.issuerAddr}`);
    if (data.invoiceNo) doc.text(`登録番号: ${data.invoiceNo}`);
    doc.moveDown();

    doc.text("【明細】");
    (data.items || []).forEach((item, idx) => {
      const lineTotal = (Number(item.qty) || 0) * (Number(item.price) || 0);
      doc.text(
        `${idx + 1}. ${item.name || "—"}　${item.qty || 0}${item.unit || ""} × ${yen(item.price)} = ${yen(lineTotal)}`
      );
    });
    doc.moveDown();

    doc.text(`小計（税抜）: ${yen(subtotal)}`);
    doc.text(`消費税（10%）: ${yen(tax)}`);
    doc.fontSize(12).text(`合計（税込）: ${yen(total)}`, { underline: true });
    doc.moveDown();

    if (data.bankName) {
      doc.fontSize(10).text("【お振込先】");
      doc.text(
        [
          data.bankName,
          data.bankBranch,
          data.bankType,
          data.bankAccount ? `口座 ${data.bankAccount}` : "",
          data.bankHolder,
        ]
          .filter(Boolean)
          .join(" ")
      );
    }
    if (data.note) {
      doc.moveDown();
      doc.text(`備考:\n${data.note}`);
    }

    doc.moveDown(2);
    doc.fontSize(8).fillColor("#666").text("Zaibase 請求書（自動生成）", { align: "center" });

    doc.end();
  });
}

exports.generateInvoicePdf = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "ログインが必要です");
  }
  const uid = request.auth.uid;
  const d = request.data || {};

  if (!d.issuerName || !d.clientName) {
    throw new HttpsError("invalid-argument", "請求元・宛先は必須です");
  }
  if (!Array.isArray(d.items) || !d.items.length) {
    throw new HttpsError("invalid-argument", "明細が1行以上必要です");
  }

  let fontPath;
  try {
    fontPath = await downloadFont();
  } catch (e) {
    throw new HttpsError("internal", "PDF用フォントの準備に失敗しました: " + e.message);
  }

  const { subtotal, tax, total } = calcTotals(d.items);
  const invoiceId = d.invoiceId || `inv_${Date.now()}`;
  const storagePath = `invoices/${uid}/${invoiceId}.pdf`;

  let pdfBuffer;
  try {
    pdfBuffer = await buildPdfBuffer(d, fontPath);
  } catch (e) {
    throw new HttpsError("internal", "PDF生成に失敗しました: " + e.message);
  }

  const bucket = getStorage().bucket();
  const file = bucket.file(storagePath);
  await file.save(pdfBuffer, {
    contentType: "application/pdf",
    metadata: { cacheControl: "private, max-age=3600" },
  });

  const [pdfUrl] = await file.getSignedUrl({
    action: "read",
    expires: Date.now() + 60 * 60 * 1000,
  });

  const record = {
    userId: uid,
    issuerName: String(d.issuerName).slice(0, 80),
    issuerAddr: String(d.issuerAddr || "").slice(0, 200),
    invoiceNo: String(d.invoiceNo || "").slice(0, 20),
    clientName: String(d.clientName).slice(0, 80),
    issueDate: d.issueDate || "",
    dueDate: d.dueDate || "",
    items: d.items,
    bankName: d.bankName || "",
    bankBranch: d.bankBranch || "",
    bankType: d.bankType || "",
    bankAccount: d.bankAccount || "",
    bankHolder: d.bankHolder || "",
    note: String(d.note || "").slice(0, 1000),
    subtotal,
    tax,
    total,
    storagePath,
    status: d.status || "issued",
    updatedAt: FieldValue.serverTimestamp(),
  };

  const ref = db.collection("invoices").doc(invoiceId);
  const existing = await ref.get();
  if (!existing.exists) record.createdAt = FieldValue.serverTimestamp();
  await ref.set(record, { merge: true });

  return { pdfUrl, storagePath, invoiceId, total };
});
