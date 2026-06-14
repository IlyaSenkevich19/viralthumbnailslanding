/**
 * App (product) URLs — edit here if the subdomain or routes change.
 * No env vars required for the landing.
 */

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
 * Nav “Pricing” + plan buttons → `/credits`. Guests should be redirected to `/` (login) or `/auth/register`.
 */
export const VIRAL_APP_PLANS_URL = appPath("/credits");

/** Partner Stripe success redirect (canonical page lives on the app). */
export const VIRAL_APP_PAYMENT_SUCCESS_URL = appPath("/payment/success");
