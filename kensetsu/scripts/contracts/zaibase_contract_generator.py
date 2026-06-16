"""
Zaibase 契約書自動生成モジュール
対応法律：
  - 職業安定法（書面明示義務）
  - フリーランス保護法 第5条・第12条（条件明示・60日支払）
  - 建設業法 第19条（書面契約）・第22条（一括下請禁止）
  - 偽装請負防止（派遣法・建設業法）
"""

from fpdf import FPDF
from datetime import date
import os

FONT_REGULAR = "/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc"
FONT_BOLD    = "/usr/share/fonts/opentype/noto/NotoSansCJK-Medium.ttc"

COLOR_PRIMARY = (26, 60, 94)      # 濃紺
COLOR_ACCENT  = (232, 160, 32)    # オレンジ
COLOR_LIGHT   = (245, 247, 250)   # 背景グレー
COLOR_BORDER  = (208, 213, 221)   # 罫線
COLOR_WARN_BG = (255, 243, 205)   # 注意背景
COLOR_WARN_TX = (133, 100, 4)     # 注意文字
COLOR_WHITE   = (255, 255, 255)
COLOR_BLACK   = (0, 0, 0)
COLOR_MUTED   = (100, 100, 100)


class ZaibaseContract(FPDF):

    def __init__(self):
        super().__init__(orientation="P", unit="mm", format="A4")
        self.add_font("NotoJP",      style="",  fname=FONT_REGULAR)
        self.add_font("NotoJP",      style="B", fname=FONT_BOLD)
        self.set_margins(20, 18, 20)
        self.set_auto_page_break(True, margin=18)

    # ── ヘルパー ──────────────────────────────────────────────
    def set_jp(self, size=9, bold=False):
        self.set_font("NotoJP", style="B" if bold else "", size=size)

    def row_bg(self, y, h, color):
        self.set_fill_color(*color)
        self.rect(self.l_margin, y, self.w - self.l_margin - self.r_margin, h, style="F")

    def hr(self, thick=0.3, color=COLOR_BORDER):
        self.set_draw_color(*color)
        self.set_line_width(thick)
        self.line(self.l_margin, self.get_y(), self.w - self.r_margin, self.get_y())
        self.ln(2)

    def section_title(self, text):
        self.ln(4)
        self.set_jp(10, bold=True)
        self.set_text_color(*COLOR_PRIMARY)
        self.cell(0, 7, text, ln=True)
        self.set_draw_color(*COLOR_ACCENT)
        self.set_line_width(0.6)
        self.line(self.l_margin, self.get_y(), self.l_margin + 60, self.get_y())
        self.ln(3)

    def info_row(self, label, value, shade=False):
        lw, vw = 44, 125
        h = 7
        if shade:
            self.set_fill_color(*COLOR_LIGHT)
        y0 = self.get_y()
        # ラベル
        self.set_jp(8, bold=True)
        self.set_text_color(*COLOR_PRIMARY)
        self.set_draw_color(*COLOR_BORDER)
        self.set_line_width(0.3)
        self.cell(lw, h, label, border=1, fill=True, ln=False)
        # 値（複数行対応）
        self.set_jp(8, bold=False)
        self.set_text_color(*COLOR_BLACK)
        self.multi_cell(vw, h, value, border=1, fill=shade, ln=True)

    def clause(self, title, body):
        self.set_jp(9, bold=True)
        self.set_text_color(*COLOR_PRIMARY)
        self.cell(0, 6, title, ln=True)
        self.set_jp(8.5, bold=False)
        self.set_text_color(*COLOR_BLACK)
        self.set_x(self.l_margin + 4)
        self.multi_cell(self.w - self.l_margin - self.r_margin - 4, 6, body, ln=True)
        self.ln(2)


def generate_contract(cd: dict, output_path: str) -> str:
    """
    契約書PDFを生成する

    cd のキー:
        contract_id, issue_date, work_description, work_location,
        start_date, end_date, reward_amount, payment_due_date,
        client_name, client_address, client_license,
        worker_name, worker_address, worker_type,
        zaibase_contract_url
    """
    pdf = ZaibaseContract()
    pdf.add_page()

    fmt = lambda d: d.strftime("%Y年%m月%d日")

    # ── ヘッダー ────────────────────────────────────────────
    pdf.set_jp(17, bold=True)
    pdf.set_text_color(*COLOR_PRIMARY)
    pdf.cell(0, 10, "工事請負契約書", ln=True, align="C")

    pdf.set_jp(8)
    pdf.set_text_color(*COLOR_MUTED)
    pdf.cell(0, 5,
        f"契約ID：{cd['contract_id']}　発行日：{fmt(cd['issue_date'])}　Zaibaseプラットフォーム経由",
        ln=True, align="C")

    # オレンジ帯
    pdf.set_fill_color(*COLOR_ACCENT)
    pdf.rect(pdf.l_margin, pdf.get_y() + 1, pdf.w - pdf.l_margin - pdf.r_margin, 1.5, style="F")
    pdf.ln(5)

    # ── 法令準拠注記 ────────────────────────────────────────
    y0 = pdf.get_y()
    pdf.set_fill_color(*COLOR_WARN_BG)
    pdf.rect(pdf.l_margin, y0, pdf.w - pdf.l_margin - pdf.r_margin, 14, style="F")
    pdf.set_draw_color(*COLOR_WARN_TX)
    pdf.set_line_width(0.5)
    pdf.rect(pdf.l_margin, y0, pdf.w - pdf.l_margin - pdf.r_margin, 14)
    pdf.set_xy(pdf.l_margin + 3, y0 + 2)
    pdf.set_jp(8, bold=True)
    pdf.set_text_color(*COLOR_WARN_TX)
    pdf.multi_cell(
        pdf.w - pdf.l_margin - pdf.r_margin - 6, 5,
        "【法令準拠】本契約書は、フリーランス保護法第12条（取引条件の書面明示）および"
        "建設業法第19条（書面契約義務）を履行するためZaibaseが自動生成したものです。",
        ln=True
    )
    pdf.set_y(y0 + 16)

    # ── 当事者情報 ──────────────────────────────────────────
    pdf.section_title("■ 当事者")
    parties = [
        ("発注者",     cd["client_name"]),
        ("発注者住所", cd["client_address"]),
        ("建設業許可", cd.get("client_license", "確認中")),
        ("受注者",     f"{cd['worker_name']}（{cd['worker_type']}）"),
        ("受注者住所", cd["worker_address"]),
    ]
    for i, (k, v) in enumerate(parties):
        pdf.info_row(k, v, shade=(i % 2 == 0))

    # ── 契約内容（フリーランス保護法 第12条 必須明示） ────────
    pdf.section_title("■ 契約内容（フリーランス保護法 第12条 必須明示事項）")
    reward_str = f"¥{cd['reward_amount']:,}（税込）"
    pay_note   = f"{fmt(cd['payment_due_date'])}（作業完了確認日から60日以内　保護法第5条）"
    content_rows = [
        ("業務内容",   cd["work_description"]),
        ("現場所在地", cd["work_location"]),
        ("作業期間",   f"{fmt(cd['start_date'])} 〜 {fmt(cd['end_date'])}"),
        ("報酬額",     reward_str),
        ("支払期日",   pay_note),
    ]
    for i, (k, v) in enumerate(content_rows):
        pdf.info_row(k, v, shade=(i % 2 == 0))

    # ── 契約条項 ────────────────────────────────────────────
    pdf.section_title("■ 契約条項")
    clauses = [
        ("第1条（請負の趣旨）",
         "受注者は、発注者に対し、上記業務内容に記載された工事（以下「本工事」）を請け負い、"
         "自己の技術・判断・責任において完成させることを約束する。"),

        ("第2条（指揮命令の禁止　偽装請負防止）",
         "発注者は、受注者に対して直接の作業指示・工程管理・労働時間管理を行ってはならない。"
         "本契約は請負契約であり、労働者派遣契約ではない。"
         "発注者が受注者に直接指揮命令を行った場合、労働者派遣法および建設業法に違反するおそれがある。"),

        ("第3条（使用工具・資材）",
         "本工事に使用する工具・道具は、別途合意がない限り受注者が用意する。"
         "発注者が資材を支給する場合は、別紙「支給材料リスト」に記載する。"),

        ("第4条（再委託の制限）",
         "受注者は、発注者の書面による事前承諾なく、本工事の全部または主要部分を"
         "第三者に再委託してはならない（建設業法第22条 一括下請負禁止）。"),

        ("第5条（報酬の支払い）",
         f"発注者は、作業完了の確認日から60日以内（{fmt(cd['payment_due_date'])}まで）に"
         "報酬を受注者指定口座に振り込む。一方的な減額は禁止する（フリーランス保護法第9条）。"),

        ("第6条（やり直し要求の制限）",
         "発注者は、発注者の責に帰すべき理由がある場合に限り、受注者に対して"
         "追加作業またはやり直しを要求できる。それ以外のやり直し要求は禁止する"
         "（フリーランス保護法第10条）。"),

        ("第7条（安全管理）",
         "受注者は、労働安全衛生法その他関係法令を遵守し、自己の責任において安全に作業を行う。"),

        ("第8条（秘密保持）",
         "両者は、本契約遂行中に知り得た相手方の業務上の秘密を第三者に開示・漏洩してはならない。"),

        ("第9条（紛争解決）",
         "本契約に関する紛争は、横浜地方裁判所を第一審の専属的合意管轄裁判所とする。"),
    ]
    for title_text, body_text in clauses:
        pdf.clause(title_text, body_text)

    # ── 電子合意欄 ──────────────────────────────────────────
    pdf.section_title("■ 電子合意")
    pdf.set_jp(8.5)
    pdf.set_text_color(*COLOR_BLACK)
    pdf.multi_cell(0, 6,
        "本契約は、Zaibaseプラットフォーム上での双方の電子合意（ボタン押下）をもって成立する。"
        "電子合意の記録はFirestoreに保存され、法的証跡として機能する。",
        ln=True
    )
    pdf.ln(2)

    # 署名テーブル
    cols = [35, 65, 65]
    headers = ["", "発注者", "受注者"]
    pdf.set_fill_color(*COLOR_PRIMARY)
    pdf.set_text_color(*COLOR_WHITE)
    pdf.set_jp(8.5, bold=True)
    for i, (h, w) in enumerate(zip(headers, cols)):
        pdf.cell(w, 7, h, border=1, fill=True, align="C", ln=(i == 2))

    rows = [
        ("氏名・社名",  cd["client_name"],       cd["worker_name"]),
        ("合意日時",    "Zaibase上で記録",         "Zaibase上で記録"),
        ("電子署名",    "プラットフォーム認証済", "プラットフォーム認証済"),
    ]
    for j, (label, cv, wv) in enumerate(rows):
        shade = j % 2 == 0
        pdf.set_fill_color(*(COLOR_LIGHT if shade else COLOR_WHITE))
        pdf.set_text_color(*COLOR_PRIMARY)
        pdf.set_jp(8, bold=True)
        pdf.cell(cols[0], 7, label, border=1, fill=True, align="C", ln=False)
        pdf.set_text_color(*COLOR_BLACK)
        pdf.set_jp(8)
        pdf.cell(cols[1], 7, cv,    border=1, fill=shade, align="C", ln=False)
        pdf.cell(cols[2], 7, wv,    border=1, fill=shade, align="C", ln=True)

    # ── フッター ────────────────────────────────────────────
    pdf.ln(6)
    pdf.hr(thick=0.3)
    pdf.set_jp(7.5)
    pdf.set_text_color(*COLOR_MUTED)
    url = cd.get("zaibase_contract_url", f"https://zaisai-share.web.app/app/contracts/{cd['contract_id']}")
    pdf.cell(0, 5, f"本契約書はZaibaseが自動生成。案件URL：{url}", ln=True)
    pdf.cell(0, 5,
        "準拠法令：建設業法第19条・第22条 ／ フリーランス保護法 ／ 職業安定法 ／ 労働者派遣法",
        ln=True)

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    pdf.output(output_path)
    return output_path


# ── Firebase連携スニペット ─────────────────────────────────────
FIREBASE_SNIPPET = """
// Firebase Storage & Firestore への保存（Node.js / Cloud Functions）

import { getStorage } from "firebase-admin/storage";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { readFileSync } from "fs";

export async function saveContract(contractId, pdfPath, contractData) {
  // 1. Storage に PDF 保存
  const bucket = getStorage().bucket();
  const dest = `contracts/${contractId}.pdf`;
  await bucket.upload(pdfPath, {
    destination: dest,
    metadata: { contentType: "application/pdf" }
  });
  const [url] = await bucket.file(dest).getSignedUrl({
    action: "read",
    expires: "2099-01-01"
  });

  // 2. Firestore に契約レコード保存
  await getFirestore().collection("contracts").doc(contractId).set({
    ...contractData,
    pdfUrl: url,
    status: "pending_worker_approval",   // 職人の電子合意待ち
    createdAt: Timestamp.now(),
    paymentDeadline: contractData.paymentDueDate, // 60日管理
    lawCompliance: {
      freelanceLaw_article12: true,  // フリーランス保護法 書面明示
      freelanceLaw_article5:  true,  // 60日以内支払設定
      constructionLaw_art19:  true,  // 建設業法 書面契約
      antiShamContract:       true,  // 偽装請負防止条項
    }
  });

  return url;
}

// マッチング成立時に呼び出す例
// const url = await saveContract("ZB-2026-000123", "/tmp/contract.pdf", contractData);
// → Firestore に保存、双方にメール送付（Cloud Functions Trigger）
"""


# ── サンプル実行 ───────────────────────────────────────────────
if __name__ == "__main__":
    sample = {
        "contract_id":          "ZB-2026-000123",
        "issue_date":           date(2026, 6, 9),
        "work_description":     "外壁タイル張り工事（3階外壁　東面・南面　約120㎡）\n成果物：施工完了写真・工事完了報告書",
        "work_location":        "神奈川県横浜市中区山下町〇〇番地　△△ビル新築工事現場",
        "start_date":           date(2026, 6, 20),
        "end_date":             date(2026, 7, 10),
        "reward_amount":        480000,
        "payment_due_date":     date(2026, 8, 9),
        "client_name":          "株式会社〇〇建設",
        "client_address":       "神奈川県横浜市西区みなとみらい1-1-1",
        "client_license":       "国土交通大臣許可（般-〇〇）第〇〇〇〇〇号",
        "worker_name":          "山田 太郎",
        "worker_address":       "神奈川県横浜市港北区〇〇町1-2-3",
        "worker_type":          "一人親方",
        "zaibase_contract_url": "https://zaibase.jp/contracts/ZB-2026-000123",
    }

    out = "/mnt/user-data/outputs/zaibase_contract_sample.pdf"
    result = generate_contract(sample, out)
    print(f"✅ 生成完了: {result}")
    print(FIREBASE_SNIPPET)
