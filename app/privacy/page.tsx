import type { Metadata } from "next";
import Link from "next/link";
import LegalPageShell from "@/components/LegalPageShell";
import { LegalContactLine, LEGAL_EFFECTIVE_DATE } from "@/lib/legal-contact";
import {
  APP_URL,
  LEGAL_CONTACT_EMAIL,
  LEGAL_OPERATOR_NAME,
  SITE_NAME,
  SITE_URL,
  legalAppHost,
  legalContactHref,
  legalSiteHost,
} from "@/lib/legal";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description: `How ${SITE_NAME} collects, uses, and protects your personal information.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell title="Privacy Policy" lastUpdated={LEGAL_EFFECTIVE_DATE}>
      <h2>1. Data Controller and Scope</h2>
      <p>
        This Privacy Policy (&quot;Policy&quot;) describes how {LEGAL_OPERATOR_NAME}{" "}
        (&quot;Provider,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses,
        processes, and discloses personal data when you use the {SITE_NAME} Service — including our
        website at{" "}
        <a
          href={SITE_URL}
          className="text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
        >
          {legalSiteHost()}
        </a>{" "}
        and application at{" "}
        <a
          href={APP_URL}
          className="text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
        >
          {legalAppHost()}
        </a>
        .
      </p>
      <h3>1.1 Data Controller</h3>
      <p>
        {LEGAL_OPERATOR_NAME} is the data controller responsible for the processing of your
        personal data described in this Policy. We operate the Service from the{" "}
        <strong>United States</strong>.
      </p>
      <h3>1.2 Contact Information</h3>
      <p>
        Designated contact:{" "}
        <a
          href={legalContactHref()}
          className="text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
        >
          {LEGAL_CONTACT_EMAIL}
        </a>
      </p>
      <p>
        Our{" "}
        <Link
          href="/terms"
          className="text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
        >
          Terms of Service
        </Link>{" "}
        govern your use of the Service.
      </p>

      <h2>2. Personal Data We Collect and Use</h2>
      <p>
        We collect and process data necessary to provide the Service. Depending on your location,
        we rely on contractual necessity, legitimate interests, consent where required, and legal
        obligation as applicable.
      </p>

      <h3>2.1 Account and Registration Data</h3>
      <p>
        We collect your email address, authentication identifiers, and profile fields you provide
        (or integration details when you sign in with a third party such as Google).
      </p>
      <p>
        <strong>Purpose:</strong> Create your account, authenticate access, and provide the
        Service. <strong>Legal basis:</strong> Contractual necessity.
      </p>

      <h3>2.2 Financial and Transaction Data</h3>
      <p>
        We collect credit balance, usage ledger entries, pack purchased, and checkout email. Full
        payment card information is processed by third-party payment processors and is not stored
        by us.
      </p>
      <p>
        <strong>Purpose:</strong> Process payments, deliver credits, and comply with accounting and
        tax obligations. <strong>Legal basis:</strong> Contractual necessity and legal obligation.
      </p>

      <h3>2.3 Operational Content Data</h3>
      <p>
        This includes YouTube URLs you submit, uploaded videos, scripts, text prompts, template
        choices, and User-Uploaded Images (including photos of your face or likeness) used for
        thumbnail generation.
      </p>
      <p>
        <strong>Purpose:</strong> Execute the core function of the Service — generating the
        specific thumbnails you request. <strong>Legal basis:</strong> Contractual necessity.
      </p>

      <h3>2.4 Usage and Technical Data</h3>
      <p>
        This includes IP address, device type, browser information, pages visited, referring URLs,
        approximate location derived from IP, and features utilized (including analytics events such
        as sign-up or purchase steps).
      </p>
      <p>
        <strong>Purpose:</strong> Operate, secure, and improve the Service, monitor performance,
        and understand how the product is used. <strong>Legal basis:</strong> Legitimate interest
        (balanced against your rights) and, where required, consent for non-essential cookies or
        advertising tags.
      </p>

      <h3>2.5 Support Communications</h3>
      <p>
        When you contact us, we collect your email, name, message content, and related metadata.
      </p>
      <p>
        <strong>Purpose:</strong> Respond to your requests and provide customer support.{" "}
        <strong>Legal basis:</strong> Contractual necessity and legitimate interest.
      </p>

      <h3>2.6 Automatic Information Collection</h3>
      <p>
        We and our providers may collect information automatically through cookies, local storage,
        and similar technologies for session management, preferences, and analytics (including
        Google Tag Manager, Google Analytics, Google Ads, and hosting analytics where enabled).
        You can control many cookies through your browser settings.
      </p>
      <p>
        Where required, we show a cookie banner before non-essential analytics or advertising
        storage is enabled. Our Google tags use Consent Mode v2: before you choose, advertising and
        analytics consent defaults to denied; if you select Accept all or Reject non-essential, we
        update those consent signals and store your choice so you can manage cookies later.
      </p>

      <h2>3. Processing of Operational Content Data (Strict Limitations)</h2>
      <p>To be clear about the handling of your uploads:</p>
      <h3>3.1 Strict Use Limitation</h3>
      <p>
        Operational Content Data, including face images, is{" "}
        <strong>
          not used for external model training, marketing, promotional activities, or any purpose
          unrelated
        </strong>{" "}
        to delivering the specific {SITE_NAME} Service you requested.
      </p>
      <h3>3.2 AI Processing</h3>
      <p>
        To generate thumbnails, we send relevant portions of your inputs (prompts, reference images,
        video frames, transcripts, metadata) to third-party AI and infrastructure providers that
        process data on our instructions solely to provide the Service.
      </p>
      <h3>3.3 Retention</h3>
      <p>
        We retain Operational Content Data for as long as needed to maintain your projects and
        Generated Content within your active account (so you can access, refine, and export them),
        or as required by law. You may delete projects or face references in the app where those
        features are available.
      </p>

      <h2>4. Data Sharing and Disclosure</h2>
      <p>We may share your personal data with:</p>
      <ul>
        <li>
          <strong>Third-party service providers</strong> — cloud hosting (for example Vercel),
          authentication and database (for example Supabase), payments (for example Stripe), AI
          routing (for example OpenRouter and underlying model providers), analytics, email, and
          support tooling. These providers process data on our behalf under contractual
          confidentiality and security obligations;
        </li>
        <li>
          <strong>Platform APIs</strong> — such as YouTube-related services when you submit a link
          or we fetch public metadata or transcripts needed for generation;
        </li>
        <li>
          <strong>Professional advisers</strong> — lawyers, accountants, and auditors under
          confidentiality obligations;
        </li>
        <li>
          <strong>Legal and regulatory compliance</strong> — when required by law, subpoena, court
          order, or to protect the rights, property, or safety of the Provider, our users, or the
          public;
        </li>
        <li>
          <strong>Business transfers</strong> — in connection with a merger, acquisition, or sale
          of assets, subject to appropriate protections.
        </li>
      </ul>
      <p>
        <strong>We do not sell your personal information</strong> and we do not share it for
        cross-context behavioral advertising as those terms are defined under applicable U.S. state
        privacy laws.
      </p>

      <h2>5. Data Security and International Transfers</h2>
      <h3>5.1 Security Measures</h3>
      <p>
        We implement technical and organizational measures designed to protect personal data against
        unauthorized access, loss, destruction, or disclosure. No method of transmission or
        storage is completely secure.
      </p>
      <h3>5.2 International Data Transfers</h3>
      <p>
        Your data may be transferred to and processed in the <strong>United States</strong> and
        other countries where our providers operate. If you access the Service from outside the
        U.S., including the UK or EEA, we use appropriate safeguards where required by applicable
        law (such as standard contractual clauses).
      </p>

      <h2>6. Data Retention</h2>
      <p>We retain personal data only as long as necessary for the purposes described above:</p>
      <ul>
        <li>
          <strong>Account and studio data</strong> — while your account is active and for up to
          twenty-four (24) months after closure, unless a longer period is required by law or
          needed for disputes;
        </li>
        <li>
          <strong>Billing and accounting records</strong> — as required for tax and payment
          compliance (often up to seven (7) years where applicable);
        </li>
        <li>
          <strong>Support communications</strong> — as long as needed to resolve your request.
        </li>
      </ul>
      <p>
        When we have no ongoing legitimate need to process personal data, we delete or anonymize it
        where possible. Data in backup archives may be retained until deletion is feasible.
      </p>

      <h2>7. Your Data Protection Rights</h2>
      <h3>7.1 United States</h3>
      <p>
        Depending on your state of residence (including California, Virginia, Colorado, Connecticut,
        Utah, and others), you may have rights to know, access, correct, delete, or obtain a copy
        of personal information, to opt out of certain processing, and to non-discrimination for
        exercising privacy rights. To exercise these rights, contact{" "}
        <a
          href={legalContactHref()}
          className="text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
        >
          {LEGAL_CONTACT_EMAIL}
        </a>
        . We will verify your request as required by law.
      </p>
      <h3>7.2 EEA and UK</h3>
      <p>
        If you are in the European Economic Area or United Kingdom, you may have rights of access,
        rectification, erasure, restriction, portability, and objection, and the right to lodge a
        complaint with a supervisory authority. Submit requests to{" "}
        <a
          href={legalContactHref()}
          className="text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
        >
          {LEGAL_CONTACT_EMAIL}
        </a>
        .
      </p>
      <h3>7.3 Marketing</h3>
      <p>
        You may opt out of marketing emails at any time using the unsubscribe link in those messages
        or by contacting us.
      </p>

      <h2>8. Children</h2>
      <p>
        The Service is not directed to children under 13, and we do not knowingly collect personal
        information from children under 13. Users must be 18+ under our Terms. If you believe a
        child under 13 provided us personal information, contact us and we will take appropriate
        steps to delete it.
      </p>

      <h2>9. Biometric and Likeness Notice</h2>
      <p>
        Face reference images may be considered sensitive under laws such as Illinois BIPA. By
        uploading a face reference, you confirm you have the right to do so and consent to our
        processing solely to provide the Service. Do not upload another person&apos;s likeness
        without their permission.
      </p>

      <h2>10. Policy Updates</h2>
      <p>
        We may update this Policy periodically. We will post the revised Policy on this page and
        revise the effective date above. Material changes may be communicated in the Service or by
        email where required by law.
      </p>

      <h2>11. Contact</h2>
      <p>
        <LegalContactLine purpose="privacy requests and questions about this Policy" />
      </p>
    </LegalPageShell>
  );
}
