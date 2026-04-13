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

export const VIRAL_APP_LOGIN_URL = appPath("/login");
export const VIRAL_APP_SIGNUP_URL = appPath("/signup");
export const VIRAL_APP_PLANS_URL = appPath("/plans");
