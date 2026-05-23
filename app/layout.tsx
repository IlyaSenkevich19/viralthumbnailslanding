import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import GoogleTagManagerLazy from "@/components/google-tag-manager-lazy";
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ViralThumblify",
  url: SITE_URL,
  description:
    "AI YouTube thumbnail studio. Generate from a YouTube link, video upload, or text prompt; use preset templates and saved face references; compare variants and export.",
  applicationCategory: "DesignApplication",
  operatingSystem: "Web",
  offers: [
    {
      "@type": "Offer",
      name: "Free starter",
      price: "0",
      priceCurrency: "USD",
      description: "3 starter credits on signup, no credit card required",
    },
    {
      "@type": "Offer",
      name: "Pack 100",
      price: "19",
      priceCurrency: "USD",
      description: "100 one-time generation credits",
    },
    {
      "@type": "Offer",
      name: "Pack 300",
      price: "49",
      priceCurrency: "USD",
      description: "300 one-time generation credits",
    },
    {
      "@type": "Offer",
      name: "Pack 700",
      price: "99",
      priceCurrency: "USD",
      description: "700 one-time generation credits",
    },
  ],
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
};

const gtmId = process.env.NEXT_PUBLIC_GTM_ID?.trim();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        {children}
        {gtmId ? <GoogleTagManagerLazy gtmId={gtmId} /> : null}
        <SupportWidgetLazy />
        <VercelObservabilityLazy />
      </body>
    </html>
  );
}
