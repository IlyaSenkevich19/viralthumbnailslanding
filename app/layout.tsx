import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { visibleLandingPricingPlans } from "@/lib/pricing-plans";
import { LEGAL_CONTACT_EMAIL, LEGAL_OPERATOR_NAME } from "@/lib/legal";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { GtmDataLayerBootstrap } from "@/components/gtm-data-layer-bootstrap";
import { NetworkStatusBanner } from "@/components/network-status-banner";
import { ServiceWorkerProvider } from "@/components/service-worker-provider";
import SupportWidgetLazy from "@/components/support-widget-lazy";
import VercelObservabilityLazy from "@/components/vercel-observability-lazy";
import "./globals.css";

export const metadata: Metadata = {
  title: "ViralThumblify — AI YouTube Thumbnail Generator | Boost CTR Fast",
  description:
    "ViralThumblify is an AI YouTube thumbnail studio. Start with 3 free credits, generate from a link or video, compare variants, and top up with one-time credit packs — no subscription.",
  keywords: [
    "YouTube thumbnail generator",
    "AI thumbnails",
    "YouTube CTR boost",
    "YouTube growth tool",
    "AI thumbnail maker",
    "YouTube thumbnail creator",
    "thumbnail generator credits",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "ViralThumblify — AI YouTube Thumbnail Generator",
    description:
      "Start with 3 free starter credits. Generate thumbnails from YouTube links, video uploads, or prompts.",
    url: SITE_URL,
    siteName: "ViralThumblify",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ViralThumblify — AI YouTube Thumbnail Generator",
    description:
      "Start with 3 free starter credits. Generate thumbnails from YouTube links, video uploads, or prompts.",
  },
  icons: {
    icon: [
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const organizationId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;
const softwareId = `${SITE_URL}/#software`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: LEGAL_OPERATOR_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/icon-192.png`,
      email: LEGAL_CONTACT_EMAIL,
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": organizationId },
    },
    {
      "@type": "SoftwareApplication",
      "@id": softwareId,
      name: SITE_NAME,
      url: SITE_URL,
      description:
        "AI YouTube thumbnail studio. Generate from a YouTube link, video upload, or text prompt; use preset templates and saved face references; compare variants and export.",
      applicationCategory: "DesignApplication",
      operatingSystem: "Web",
      provider: { "@id": organizationId },
      isPartOf: { "@id": websiteId },
      offers: visibleLandingPricingPlans.map((plan) => ({
        "@type": "Offer",
        name: plan.name,
        price: plan.price.replace("$", ""),
        priceCurrency: "USD",
        description: `${plan.credits} one-time generation credits`,
      })),
      featureList: [
        "AI thumbnail generation from YouTube link, video upload, or text prompt",
        "Preset template library with niche filters",
        "Saved face references for consistent channel branding",
        "Multiple variants per project with refine and export",
        "One-time credit packs with no subscription",
      ],
      audience: {
        "@type": "Audience",
        audienceType: "YouTube creators with 5,000–30,000 subscribers",
      },
    },
  ],
};

const gtmId = process.env.NEXT_PUBLIC_GTM_ID?.trim();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
      <head>
        {gtmId ? <GtmDataLayerBootstrap /> : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-dvh flex-col font-sans">
        {gtmId ? (
          <noscript>
            <iframe
              title="Google Tag Manager"
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height={0}
              width={0}
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}
        <ServiceWorkerProvider />
        <NetworkStatusBanner />
        <div className="flex min-h-dvh flex-1 flex-col">{children}</div>
        <SupportWidgetLazy />
        <VercelObservabilityLazy />
      </body>
    </html>
  );
}
