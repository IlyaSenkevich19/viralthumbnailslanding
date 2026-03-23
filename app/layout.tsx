import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import SupportWidget from "@/components/SupportWidget";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://viralthumbnails.com";

export const metadata: Metadata = {
  title: "ViralThumbnails — AI YouTube Thumbnail Generator | Boost CTR Fast",
  description:
    "ViralThumbnails is an AI YouTube thumbnail generator that creates high-CTR thumbnails in under 2 minutes. Save 10+ hours/week, replace $200 freelancers, and grow your channel. Free trial — no card required.",
  keywords: [
    "YouTube thumbnail generator",
    "AI thumbnails",
    "YouTube CTR boost",
    "YouTube growth tool",
    "AI thumbnail maker",
    "YouTube thumbnail creator",
    "thumbnail A/B testing",
  ],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "ViralThumbnails — AI YouTube Thumbnail Generator",
    description:
      "Create high-CTR YouTube thumbnails in under 2 minutes with AI. Free trial, no card required.",
    url: siteUrl,
    siteName: "ViralThumbnails",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ViralThumbnails — AI YouTube Thumbnail Generator",
    description:
      "Create high-CTR YouTube thumbnails in under 2 minutes with AI. Free trial, no card required.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ViralThumbnails",
  url: siteUrl,
  description:
    "AI-powered YouTube thumbnail generator that creates high-CTR thumbnails in under 2 minutes. Includes template library, Canva import, avatar support, A/B testing, and one-click export.",
  applicationCategory: "DesignApplication",
  operatingSystem: "Web",
  offers: [
    {
      "@type": "Offer",
      name: "Free Trial",
      price: "0",
      priceCurrency: "USD",
      description: "10 free thumbnails, no credit card required",
    },
    {
      "@type": "Offer",
      name: "Starter",
      price: "19",
      priceCurrency: "USD",
      billingIncrement: "P1M",
      description: "50 thumbnails/month, all templates, Canva import",
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "49",
      priceCurrency: "USD",
      billingIncrement: "P1M",
      description:
        "200 thumbnails/month, A/B testing, custom branding, priority support",
    },
    {
      "@type": "Offer",
      name: "Agency",
      price: "99",
      priceCurrency: "USD",
      billingIncrement: "P1M",
      description:
        "Unlimited thumbnails, team access, API, white-label, dedicated support",
    },
  ],
  featureList: [
    "AI thumbnail generation from YouTube link, video upload, or text prompt",
    "100+ proven high-CTR templates",
    "Canva-compatible template import",
    "Face/avatar selection and upload",
    "A/B testing to find the best performer",
    "One-click export and project saving",
  ],
  audience: {
    "@type": "Audience",
    audienceType: "YouTube creators with 5,000–30,000 subscribers",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        {children}
        {/* <SupportWidget /> */}
      </body>
    </html>
  );
}
