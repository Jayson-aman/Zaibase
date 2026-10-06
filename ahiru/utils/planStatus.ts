// 契約（Pro / Max）の状態を、画面に出す言葉に直す。
//
// 「お試しが終わった」「解約して期限が来た」「期限が切れた」が、画面のどこにも出ないため、
// 親が気づかないまま有料プランが自動で始まったり、いつのまにか無料に戻ったりしていた。
// RevenueCat の customerInfo から、いつまで使えるか・自動更新されるか・お試し中かを読み取る。

export type PlanKind =
  | 'trial'    // お試し中（導入価格の期間）。終わると自動で通常料金になることがある
  | 'ending'   // 解約ずみで、期限が来ると終わる
  | 'billing'  // お支払いに問題がある
  | 'expired'  // 期限が切れて無料に戻った
  | 'active'   // ふつうに契約中（自動更新あり）
  | 'none';    // 契約したことがない

export type PlanStatus = {
  kind: PlanKind;
  tier: 'pro' | 'max' | null;
  /** 期限（お試しの終わり・次の更新日・終了日）。無期限や不明のときは null */
  expiresAt: Date | null;
  /** 期限までの日数（切り上げ）。切れたあとは 0 以下 */
  daysLeft: number | null;
  willRenew: boolean;
  /** お支払いの問題がストアに確認された日（問題が無いときは null）。原因そのものは通知されない */
  billingDetectedAt: Date | null;
  /** ストアの「サブスクリプションの管理」ページ（お支払い方法の直し先）。無いときは null */
  managementUrl: string | null;
};

type EntLike = {
  isActive?: boolean;
  willRenew?: boolean;
  periodType?: string; // 'NORMAL' | 'INTRO' | 'TRIAL' | 'PREPAID'
  expirationDate?: string | Date | null;
  billingIssueDetectedAt?: string | Date | null;
};
type InfoLike = { managementURL?: string | null; entitlements?: { active?: Record<string, EntLike>; all?: Record<string, EntLike> } };

const DAY = 24 * 60 * 60 * 1000;

function toDate(v: unknown): Date | null {
  if (v == null || v === '') return null;
  const d = v instanceof Date ? v : new Date(String(v));
  return Number.isNaN(d.getTime()) ? null : d;
}

const NONE: PlanStatus = { kind: 'none', tier: null, expiresAt: null, daysLeft: null, willRenew: false, managementUrl: null, billingDetectedAt: null };

export function planStatusFromCustomerInfo(info: unknown, now: Date = new Date()): PlanStatus {
  const ents = (info as InfoLike)?.entitlements;
  const active = ents?.active ?? {};
  const all = ents?.all ?? {};
  // 管理ページのURLは http(s) だけ受け取る（変な値をそのまま開かない）
  const mu = (info as InfoLike)?.managementURL;
  const managementUrl = typeof mu === 'string' && /^https?:\/\//.test(mu) ? mu : null;
  const days = (d: Date | null) => (d == null ? null : Math.ceil((d.getTime() - now.getTime()) / DAY));

  // いま有効なもの（Max を優先）
  const activeTier = 'max' in active ? 'max' : 'pro' in active ? 'pro' : null;
  if (activeTier != null) {
    const e = active[activeTier];
    const expiresAt = toDate(e.expirationDate);
    const willRenew = e.willRenew !== false;
    const base = { tier: activeTier as 'pro' | 'max', expiresAt, daysLeft: days(expiresAt), willRenew, managementUrl, billingDetectedAt: null as Date | null };
    // 空文字・日付として読めない値・未来の日付は「問題あり」とみなさない（誤って赤い帯を出さない）。
    // 支払いが直ると RevenueCat 側でこの日時は null に戻る。
    const billingAt = toDate(e.billingIssueDetectedAt);
    if (billingAt != null && billingAt.getTime() <= now.getTime() + DAY) return { ...base, billingDetectedAt: billingAt, kind: 'billing' };
    // react-native-purchases は 'INTRO'、purchases-js（Web）は 'intro'。大文字小文字をそろえて見る
    const pt = String(e.periodType ?? '').toUpperCase();
    if (pt === 'INTRO' || pt === 'TRIAL') return { ...base, kind: 'trial' };
    if (!willRenew && expiresAt != null) return { ...base, kind: 'ending' };
    return { ...base, kind: 'active' };
  }

  // 有効なものは無いが、前に契約していて期限が切れたもの（いちばん新しく切れた方）
  let best: { tier: 'pro' | 'max'; at: Date } | null = null;
  for (const t of ['pro', 'max'] as const) {
    const at = toDate(all[t]?.expirationDate);
    if (at != null && (best == null || at > best.at)) best = { tier: t, at };
  }
  if (best != null) {
    // Apple の「支払いの猶予期間」を使わない設定だと、更新に失敗した時点で権利は有効でなくなる。
    // そのとき「終了しました」だけ出すと、お支払い方法を直せば続けられることが伝わらない。
    // 失敗の記録（billingIssueDetectedAt）が残っていて、期限から60日以内なら、支払いの問題として出す。
    const billingAt = toDate(all[best.tier]?.billingIssueDetectedAt);
    if (billingAt != null && billingAt.getTime() <= now.getTime() + DAY && now.getTime() - best.at.getTime() <= 60 * DAY) {
      return { kind: 'billing', tier: best.tier, expiresAt: best.at, daysLeft: days(best.at), willRenew: false, managementUrl, billingDetectedAt: billingAt };
    }
    return { kind: 'expired', tier: best.tier, expiresAt: best.at, daysLeft: days(best.at), willRenew: false, managementUrl, billingDetectedAt: null };
  }
  return NONE;
}

const TIER_NAME = { pro: 'PRO', max: 'MAX' } as const;
export const tierLabel = (t: 'pro' | 'max' | null) => (t == null ? '' : TIER_NAME[t]);

export function formatMonthDay(d: Date | null): string {
  return d == null ? '' : `${d.getMonth() + 1}月${d.getDate()}日`;
}

export type PlanNotice = { icon: string; title: string; body: string; urgent: boolean; action: string | null };

/** 画面に出す案内。出さなくてよいとき（ふつうに契約中・未契約）は null */
export function planNotice(s: PlanStatus, manageHint = 'ストアの設定（Apple ID → サブスクリプション）'): PlanNotice | null {
  const name = tierLabel(s.tier);
  const when = formatMonthDay(s.expiresAt);
  const left = s.daysLeft;
  const leftText = left == null ? '' : left <= 0 ? '（きょうまで）' : left === 1 ? '（あと1日）' : `（あと${left}日）`;
  switch (s.kind) {
    case 'trial':
      return s.willRenew
        ? {
            icon: '⏳',
            title: `${name}のお試し中：${when}までです${leftText}`,
            body: `${when}を過ぎると、自動で通常料金の月額プランに切りかわります。続けない場合は、${when}より前に、${manageHint}から解約してください。`,
            urgent: left != null && left <= 2,
            action: null,
          }
        : {
            icon: '⏳',
            title: `${name}のお試し中：${when}で終わります${leftText}`,
            body: '自動更新はオフになっています。このまま続けたいときは、プランを選びなおしてください。',
            urgent: left != null && left <= 2,
            action: '続ける',
          };
    case 'ending':
      return {
        icon: '⌛',
        title: `${name}は${when}まで使えます${leftText}`,
        body: '解約ずみで、自動更新はオフです。期限を過ぎると無料の範囲に戻ります。',
        urgent: left != null && left <= 3,
        action: '続ける',
      };
    case 'billing': {
      // 原因（カードの期限切れか、残高不足か、など）は、ストアからアプリには知らされない。
      // 分かるのは「いつ問題が確認されたか」だけなので、原因は言い切らず、よくある原因を挙げて確認してもらう。
      const since = s.billingDetectedAt != null ? `${formatMonthDay(s.billingDetectedAt)}に、` : '';
      return {
        icon: '⚠️',
        title: `${name}のお支払いが完了していません`,
        body:
          `${since}ストアがお支払いを受け付けられませんでした。原因はアプリには届かないため、次のどれかに当てはまらないか確認してください。\n` +
          '・カードの有効期限が切れている／カードを変更した\n' +
          '・利用限度額や残高が足りない（プリペイド・デビットカードを含む）\n' +
          '・カード会社が、支払いを承認しなかった\n' +
          '・ストアに、お支払い方法が登録されていない\n' +
          `直し方は${manageHint}で確認できます。直るまでのあいだ、ストアが自動で何度か再試行しますが、それでも払えないとプランが止まります。`,
        urgent: true,
        action: 'お支払い方法を確認',
      };
    }
    case 'expired':
      return {
        icon: '🔒',
        title: `${name}は${when}に終了しました`,
        body: '今は無料の範囲でお使いです。PRO・MAXの内容をまた使うには、プランを選びなおしてください。',
        urgent: false,
        action: '再開する',
      };
    default:
      return null;
  }
}
