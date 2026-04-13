/** Live product (auth / app). Override with NEXT_PUBLIC_APP_URL on Vercel if needed. */
export const VIRAL_APP_URL =
  process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") ||
  "https://viralthumbnails-frontend.vercel.app";
