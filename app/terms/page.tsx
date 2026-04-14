import type { Metadata } from "next";
import LegalPageShell from "@/components/LegalPageShell";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${SITE_NAME}`,
  description: `Terms and conditions for using ${SITE_NAME}'s website and related services.`,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "April 4, 2026";

export default function TermsPage() {
  return (
    <LegalPageShell title="Terms & Conditions" lastUpdated={LAST_UPDATED}>
      <p>
        These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and use
        of the marketing website and related materials for {SITE_NAME} at{" "}
        <a
          href={SITE_URL}
          className="text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
        >
          {SITE_URL.replace(/^https:\/\//, "")}
        </a>
        . Separate terms may apply when you use our software, accounts, or paid plans on
        our application or other properties.
      </p>

      <h2>Acceptance</h2>
      <p>
        By accessing or using the site, you agree to these Terms. If you do not agree, do
        not use the site. We may change these Terms at any time; the &quot;Last
        updated&quot; date reflects the current version. Continued use after changes
        means you accept the revised Terms.
      </p>

      <h2>Use of the site</h2>
      <p>
        You may use the site only in compliance with applicable laws and these Terms. You
        agree not to misuse the site (including attempting to probe, scan, or test
        vulnerabilities; overload systems; scrape in violation of our robots rules or
        applicable law; or interfere with other users).
      </p>

      <h2>Intellectual property</h2>
      <p>
        The site, branding, text, graphics, and other content are owned by {SITE_NAME} or
        our licensors and are protected by intellectual property laws. Except as
        expressly allowed (e.g., temporary copies in your browser), you may not copy,
        modify, distribute, sell, or lease any part of the site without our prior written
        permission.
      </p>

      <h2>Third-party links</h2>
      <p>
        The site may link to third-party sites or services. We are not responsible for
        third-party content or practices; your use of third-party services is at your own
        risk and subject to their terms.
      </p>

      <h2>Disclaimer</h2>
      <p>
        The site is provided &quot;as is&quot; and &quot;as available&quot; without
        warranties of any kind, whether express or implied, including merchantability,
        fitness for a particular purpose, and non-infringement, to the fullest extent
        permitted by law.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {SITE_NAME} and its affiliates, officers,
        directors, employees, and agents will not be liable for any indirect, incidental,
        special, consequential, or punitive damages, or any loss of profits, data, or
        goodwill, arising from or related to your use of the site. Our total liability for
        claims arising from the site is limited to the greater of one hundred U.S.
        dollars (USD $100) or the amount you paid us specifically for access to the
        marketing site in the twelve months before the claim (if any).
      </p>

      <h2>Indemnity</h2>
      <p>
        You will defend and indemnify {SITE_NAME} and its affiliates against any claims,
        damages, losses, liabilities, and expenses (including reasonable legal fees)
        arising from your use of the site or violation of these Terms, to the extent
        permitted by law.
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws applicable in the jurisdiction we designate
        for {SITE_NAME}, without regard to conflict-of-law principles, unless mandatory
        consumer protections in your country require otherwise. Courts in that
        jurisdiction have exclusive jurisdiction, subject to mandatory arbitration or
        venue rules where applicable.
      </p>
      <p className="text-text-dim">
        Replace this section with your chosen governing law and venue after legal review.
      </p>

      <h2>Severability</h2>
      <p>
        If any provision of these Terms is held invalid or unenforceable, the remaining
        provisions remain in effect.
      </p>

      <h2>Contact</h2>
      <p>
        For questions about these Terms, contact us through the options published on{" "}
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
