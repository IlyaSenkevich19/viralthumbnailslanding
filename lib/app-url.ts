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

/** Matches `src/app/(app)/auth/...` on the app (route group does not appear in URL). */
export const VIRAL_APP_LOGIN_URL = appPath("/auth/login");
export const VIRAL_APP_SIGNUP_URL = appPath("/auth/register");

/**
 * Nav “Pricing” + plan buttons → product credits/plans UI (`src/app/(app)/credits`).
 * The app must redirect guests to `/auth/login` or `/auth/register` (e.g. middleware on `(app)` routes).
 */
export const VIRAL_APP_PLANS_URL = appPath("/credits");
