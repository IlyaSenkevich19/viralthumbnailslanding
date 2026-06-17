export const ALL_PRICING_PLAN_IDS = ['trial', 'pack_100', 'pack_300', 'pack_700'] as const;

export type PricingPlanId = (typeof ALL_PRICING_PLAN_IDS)[number];

const PAID_PACK_IDS = ['pack_100', 'pack_300', 'pack_700'] as const;

export type PaidPackId = (typeof PAID_PACK_IDS)[number];

const DEFAULT_ENABLED_PRICING_PLAN_IDS: readonly PricingPlanId[] = ['trial', 'pack_100'];

function parseEnabledPricingPlanIds(): readonly PricingPlanId[] {
  const raw = process.env.NEXT_PUBLIC_ENABLED_PRICING_PLAN_IDS?.trim();
  if (!raw) {
    return DEFAULT_ENABLED_PRICING_PLAN_IDS;
  }
  const parsed = raw
    .split(',')
    .map((part) => part.trim())
    .filter((part) => part.length > 0);
  const valid = parsed.filter((id): id is PricingPlanId =>
    (ALL_PRICING_PLAN_IDS as readonly string[]).includes(id),
  );
  if (valid.length === 0) {
    return DEFAULT_ENABLED_PRICING_PLAN_IDS;
  }
  return valid;
}

const ENABLED_PRICING_PLAN_IDS = parseEnabledPricingPlanIds();
const ENABLED_PRICING_PLAN_ID_SET = new Set<string>(ENABLED_PRICING_PLAN_IDS);

export function isPricingPlanEnabled(planId: string): boolean {
  return ENABLED_PRICING_PLAN_ID_SET.has(planId);
}

export function filterEnabledPricingPlans<T extends { id: string }>(plans: readonly T[]): T[] {
  return plans.filter((plan) => isPricingPlanEnabled(plan.id));
}

function isPaidPackId(value: string): value is PaidPackId {
  return (PAID_PACK_IDS as readonly string[]).includes(value);
}

/** Maps deep links to an enabled paid pack; falls back to the first enabled paid pack. */
export function resolveEnabledPaidPackId(requested?: string | null): PaidPackId | null {
  const enabledPaid = ENABLED_PRICING_PLAN_IDS.filter((id): id is PaidPackId => isPaidPackId(id));
  if (enabledPaid.length === 0) {
    return null;
  }
  const trimmed = requested?.trim();
  if (trimmed && isPaidPackId(trimmed) && isPricingPlanEnabled(trimmed)) {
    return trimmed;
  }
  return enabledPaid[0] ?? null;
}
