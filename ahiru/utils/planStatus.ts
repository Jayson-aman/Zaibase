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
};

type EntLike = {
  isActive?: boolean;
  willRenew?: boolean;
  periodType?: string; // 'NORMAL' | 'INTRO' | 'TRIAL' | 'PREPAID'
  expirationDate?: string | Date | null;
  billingIssueDetectedAt?: string | Date | null;
};
type InfoLike = { entitlements?: { active?: Record<string, EntLike>; all?: Record<string, EntLike> } };

const DAY = 24 * 60 * 60 * 1000;

function toDate(v: unknown): Date | null {
  if (v == null) return null;
  const d = v instanceof Date ? v : new Date(String(v));
  return Number.isNaN(d.getTime()) ? null : d;
}

const NONE: PlanStatus = { kind: 'none', tier: null, expiresAt: null, daysLeft: null, willRenew: false };

export function planStatusFromCustomerInfo(info: unknown, now: Date = new Date()): PlanStatus {
  const ents = (info as InfoLike)?.entitlements;
  const active = ents?.active ?? {};
  const all = ents?.all ?? {};
  const days = (d: Date | null) => (d == null ? null : Math.ceil((d.getTime() - now.getTime()) / DAY));

  // いま有効なもの（Max を優先）
  const activeTier = 'max' in active ? 'max' : 'pro' in active ? 'pro' : null;
  if (activeTier != null) {
    const e = active[activeTier];
    const expiresAt = toDate(e.expirationDate);
    const willRenew = e.willRenew !== false;
    const base = { tier: activeTier, expiresAt, daysLeft: days(expiresAt), willRenew } as const;
    if (e.billingIssueDetectedAt != null) return { ...base, kind: 'billing' };
    if (e.periodType === 'INTRO' || e.periodType === 'TRIAL') return { ...base, kind: 'trial' };
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
    return { kind: 'expired', tier: best.tier, expiresAt: best.at, daysLeft: days(best.at), willRenew: false };
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
    case 'billing':
      return {
        icon: '⚠️',
        title: `${name}のお支払いが完了していません`,
        body: 'カードの有効期限や残高を確認してください。このままだと、プランが止まることがあります。',
        urgent: true,
        action: null,
      };
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
