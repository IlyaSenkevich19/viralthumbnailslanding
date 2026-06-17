/**
 * App (product) URLs — edit here if the subdomain or routes change.
 * No env vars required for the landing.
 */

import { resolveEnabledPaidPackId } from "@/lib/enabled-pricing-plans";

const APP_ORIGIN = "https://app.viralthumblify.com";

function appPath(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${APP_ORIGIN}${p}`;
}

export const VIRAL_APP_URL = APP_ORIGIN;

/** Sign-in lives at the app root (`/`). */
export const VIRAL_APP_LOGIN_URL = `${APP_ORIGIN}/`;

export const VIRAL_APP_SIGNUP_URL = appPath("/auth/register");

/**
 * Paid packs open in-app credits checkout (auth required).
 * Guests are redirected to sign-in with `next=/credits`.
 */
export const VIRAL_APP_PLANS_URL = appPath("/credits");

/** Credits page — optional pack hint for in-app checkout UI. */
export function resolveAppCreditsUrl(planId?: string): string {
  if (!planId || planId === "trial") return VIRAL_APP_PLANS_URL;
  const resolved = resolveEnabledPaidPackId(planId);
  if (!resolved) return VIRAL_APP_PLANS_URL;
  return `${VIRAL_APP_PLANS_URL}?pack=${encodeURIComponent(resolved)}`;
}

/** Partner Stripe success redirect (canonical page lives on the app). */
export const VIRAL_APP_PAYMENT_SUCCESS_URL = appPath("/payment/success");
