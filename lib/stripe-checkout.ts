export type StripePackId = 'pack_100' | 'pack_300' | 'pack_700';

export const STRIPE_PACK_IDS: readonly StripePackId[] = ['pack_100', 'pack_300', 'pack_700'];

export const STRIPE_CHECKOUT_ENV_KEYS: Record<StripePackId, string> = {
  pack_100: 'NEXT_PUBLIC_STRIPE_CHECKOUT_URL_PACK_100',
  pack_300: 'NEXT_PUBLIC_STRIPE_CHECKOUT_URL_PACK_300',
  pack_700: 'NEXT_PUBLIC_STRIPE_CHECKOUT_URL_PACK_700',
};

export function isStripePackId(planId: string): planId is StripePackId {
  return STRIPE_PACK_IDS.includes(planId as StripePackId);
}

function readCheckoutUrl(envKey: string): string | null {
  const raw = process.env[envKey]?.trim();
  if (!raw) return null;
  return raw;
}

export function getStripeCheckoutUrl(planId: StripePackId): string | null {
  return readCheckoutUrl(STRIPE_CHECKOUT_ENV_KEYS[planId]);
}

export function isAnyStripeCheckoutConfigured(): boolean {
  return STRIPE_PACK_IDS.some((planId) => getStripeCheckoutUrl(planId) !== null);
}
