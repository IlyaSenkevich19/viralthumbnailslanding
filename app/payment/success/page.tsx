import { redirect } from "next/navigation";
import { VIRAL_APP_PAYMENT_SUCCESS_URL } from "@/lib/app-url";

type PaymentSuccessRedirectProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

/** Thin redirect — canonical success page and `purchase_completed` live on the app. */
export default async function PaymentSuccessRedirectPage({
  searchParams,
}: PaymentSuccessRedirectProps) {
  const params = await searchParams;
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (typeof value === "string") {
      query.set(key, value);
      continue;
    }
    if (Array.isArray(value)) {
      value.forEach((entry) => query.append(key, entry));
    }
  }
  const suffix = query.toString();
  redirect(`${VIRAL_APP_PAYMENT_SUCCESS_URL}${suffix ? `?${suffix}` : ""}`);
}
