import type { Metadata } from "next";
import LegalPageShell from "@/components/LegalPageShell";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description: `How ${SITE_NAME} collects, uses, and protects your information.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "April 4, 2026";

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell title="Privacy Policy" lastUpdated={LAST_UPDATED}>
      <p>
        This Privacy Policy explains how {SITE_NAME} (&quot;we&quot;, &quot;us&quot;,
        &quot;our&quot;) handles information when you visit our marketing website at{" "}
        <a
          href={SITE_URL}
          className="text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
        >
          {SITE_URL.replace(/^https:\/\//, "")}
        </a>
        . Our product may be offered on a separate subdomain or application; if you use
        that product, additional or different terms may apply there.
      </p>

      <h2>Information we collect</h2>
      <p>
        We may collect information you provide directly (for example, if you contact us
        or subscribe to updates), and technical data sent automatically by your browser
        or device (such as IP address, general location derived from IP, device and
        browser type, pages viewed, and referring URLs).
      </p>
      <p>
        We may use cookies and similar technologies for essential site operation,
        preferences, and analytics or advertising where enabled. You can control many
        cookies through your browser settings.
      </p>

      <h2>How we use information</h2>
      <p>We use information to:</p>
      <ul>
        <li>Operate, maintain, and improve our website and services;</li>
        <li>Understand usage and performance (including analytics);</li>
        <li>Communicate with you when you reach out or where you have opted in;</li>
        <li>Comply with law, enforce our terms, and protect rights and safety.</li>
      </ul>

      <h2>Analytics and advertising</h2>
      <p>
        We may use third-party tools (for example Google Analytics 4, Google Tag Manager,
        or Google Ads) to measure traffic and campaign effectiveness. Those providers may
        process data according to their own privacy policies. Where required, we rely on
        appropriate consent or legitimate interest mechanisms as applicable in your
        region.
      </p>

      <h2>Sharing of information</h2>
      <p>
        We may share information with service providers who assist us (hosting, analytics,
        email, security), with professional advisers, or when required by law or to
        protect {SITE_NAME} and our users. We do not sell your personal information as
        that term is commonly defined in applicable privacy laws.
      </p>

      <h2>Retention</h2>
      <p>
        We keep information only as long as needed for the purposes above, unless a
        longer period is required or permitted by law.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live, you may have rights to access, correct, delete, or
        restrict processing of your personal data, or to object to certain processing or
        to portability. You may also have the right to lodge a complaint with a
        supervisory authority. To exercise rights, contact us using the details below.
      </p>

      <h2>International transfers</h2>
      <p>
        If you access our site from outside the country where we operate servers, your
        information may be transferred across borders. We take steps designed to
        provide appropriate safeguards where required.
      </p>

      <h2>Children</h2>
      <p>
        Our marketing site is not directed to children under 16 (or the minimum age in
        your jurisdiction). We do not knowingly collect personal information from children.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this Privacy Policy from time to time. We will post the revised
        version on this page and update the &quot;Last updated&quot; date above.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy-related requests or questions about this policy, please contact us
        through the contact options published on {SITE_NAME}&apos;s website at{" "}
        <a
          href={SITE_URL}
          className="text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
        >
          {SITE_URL.replace(/^https:\/\//, "")}
        </a>
        .
      </p>
      <p className="text-xs text-text-dim">
        This page is a general template and does not constitute legal advice. Have your
        counsel review it before relying on it for compliance.
      </p>
    </LegalPageShell>
  );
}
