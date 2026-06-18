import type { Metadata } from "next";
import Link from "next/link";
import LegalPageShell from "@/components/LegalPageShell";
import { LegalContactLine, LEGAL_EFFECTIVE_DATE } from "@/lib/legal-contact";
import {
  APP_URL,
  LEGAL_GOVERNING_STATE,
  LEGAL_OPERATOR_NAME,
  SITE_NAME,
  SITE_URL,
  legalAppHost,
  legalSiteHost,
} from "@/lib/legal";

export const metadata: Metadata = {
  title: `Terms of Service | ${SITE_NAME}`,
  description: `Terms of service for ${SITE_NAME} — AI YouTube thumbnail studio and credit packs.`,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPageShell title="Terms of Service" lastUpdated={LEGAL_EFFECTIVE_DATE}>
      <p>
        <strong>Provider:</strong> {LEGAL_OPERATOR_NAME}, operating from the United States.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        These Terms of Service (&quot;Terms&quot;) are a legally binding agreement between you
        (&quot;User&quot; or &quot;you&quot;) and {LEGAL_OPERATOR_NAME} (&quot;Provider,&quot;
        &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) governing your use of the{" "}
        {SITE_NAME} website at{" "}
        <a
          href={SITE_URL}
          className="text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
        >
          {legalSiteHost()}
        </a>
        , the web application at{" "}
        <a
          href={APP_URL}
          className="text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
        >
          {legalAppHost()}
        </a>
        , and related services (collectively, the &quot;Service&quot;).
      </p>
      <p>
        Our{" "}
        <Link
          href="/privacy"
          className="text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
        >
          Privacy Policy
        </Link>{" "}
        describes how we handle personal data. Together, these Terms and the Privacy Policy are
        the &quot;Agreements.&quot; By accessing or using the Service, creating an account, or
        purchasing credits, you confirm that you have read, understood, and agree to the
        Agreements. If you do not agree, you must stop using the Service immediately.
      </p>

      <h2>2. Service Scope</h2>
      <p>
        The Service is an AI-assisted studio that allows Users to generate custom YouTube
        thumbnails (&quot;Generated Content&quot;) by submitting YouTube URLs, uploaded videos,
        scripts, or text prompts, and by uploading private images, including personal likeness or
        face images (&quot;User Uploads&quot;). Users may apply templates, save face references,
        generate multiple variants, refine results, and export thumbnails.
      </p>

      <h2>3. Account and Free Starter Credits</h2>
      <h3>3.1 Eligibility</h3>
      <p>
        You must be at least <strong>18 years of age</strong> and able to enter a binding contract
        to use the Service. By using the Service, you represent that you meet this requirement.
      </p>
      <h3>3.2 Registration</h3>
      <p>
        Account registration requires a valid email address and password, or a supported third-party
        sign-in (such as Google). You must provide accurate information and keep it current. You are
        responsible for your credentials and all activity under your account. Accounts are personal
        — do not share login access with others.
      </p>
      <h3>3.3 Free Starter Credits</h3>
      <p>
        We may offer starter credits to new accounts at no charge. Starter credits do not require
        payment information. Starter credits, features, and amounts may change at our discretion.
      </p>

      <h2>4. Financial Terms, Credit Packs, and Refunds</h2>
      <h3>4.1 Credit Packs</h3>
      <p>
        Paid access is provided through <strong>one-time credit packs</strong>, not recurring
        subscriptions, unless we clearly label an offering as a subscription. Prices and pack sizes
        are displayed before checkout. Studio actions consume credits from your balance according
        to the costs shown in the Service. Credits are not cash, are not transferable between
        users, and have no monetary value outside the Service.
      </p>
      <p>
        Payment is processed by third-party payment providers (such as Stripe). We do not store full
        payment card numbers. Credits are applied to the account associated with the email used at
        checkout. If no account exists yet, credits are held until you register or sign in with that
        same email. Unless stated otherwise, purchased credits remain on your balance until used or
        your account is closed under these Terms.
      </p>
      <h3>4.2 Refund Policy</h3>
      <p>
        Except where required by applicable law, all sales of digital credit packs are{" "}
        <strong>non-refundable</strong> once credits are delivered to your account or used. We do
        not provide refunds or credits for partial use, unused time, dissatisfaction with
        AI-generated results, or lack of usage.
      </p>
      <p>
        If you believe a charge was made in error, contact us promptly. We may issue refunds or
        adjustments at our sole discretion.
      </p>
      <h3>4.3 Credits and Abuse Protection</h3>
      <p>
        Credit packs include usage that generates non-recoverable third-party costs for the
        Provider. To prevent abuse:
      </p>
      <ul>
        <li>
          If all or a substantial portion of purchased credits are consumed, the purchase is
          considered fully delivered and <strong>no refund will be issued</strong>, even if a
          refund request is made shortly after purchase.
        </li>
        <li>
          We reserve the right to deny refunds where we reasonably determine that credits were used
          primarily to extract value before requesting a refund.
        </li>
        <li>
          We may suspend or terminate accounts involved in fraudulent payments, chargebacks, or
          abuse of starter or purchased credits.
        </li>
      </ul>
      <h3>4.4 Account Cancellation</h3>
      <p>
        You may stop using the Service at any time. To request account closure, contact us. Closing
        an account does not entitle you to a refund of unused credits unless required by law.
      </p>

      <h2>5. User Content, Warranties, and Indemnity</h2>
      <h3>5.1 User Content Responsibility</h3>
      <p>
        You bear sole responsibility for all content you input into the Service (&quot;User
        Content&quot;), including the copyright and intellectual property status of YouTube content
        referenced by URL, User Uploads, prompts, and the resulting Generated Content.
      </p>
      <h3>5.2 Warranties of Right</h3>
      <p>You warrant that:</p>
      <ul>
        <li>You possess all necessary rights, licenses, and permissions to use all User Content;</li>
        <li>
          You have explicit permission from any person whose likeness appears in User Uploads,
          including face references;
        </li>
        <li>
          User Content and Generated Content do not infringe or violate any third-party rights,
          including intellectual property, publicity, or privacy rights;
        </li>
        <li>Your use complies with YouTube and other platform rules.</li>
      </ul>
      <h3>5.3 License Grant to Provider</h3>
      <p>
        You grant the Provider a non-exclusive, worldwide, royalty-free license to host, reproduce,
        process, transmit, display, and use User Content solely to operate, maintain, secure, and
        improve the Service — including sending relevant portions to AI and infrastructure
        providers that power generation.
      </p>
      <h3>5.4 Generated Content Ownership</h3>
      <p>
        Subject to compliance with these Terms and applicable third-party rights, you retain
        ownership of Generated Content you create. We do not guarantee click-through rate,
        revenue, or platform compliance. You are responsible for reviewing outputs before
        publishing.
      </p>
      <h3>5.5 Indemnification</h3>
      <p>
        You agree to indemnify, defend, and hold harmless the Provider and its affiliates,
        officers, employees, and agents from any claims, damages, liabilities, costs, or expenses
        (including reasonable attorneys&apos; fees) arising from your User Content, your use of
        the Service, or your breach of Section 5.2.
      </p>

      <h2>6. Prohibited Conduct</h2>
      <p>You agree not to use the Service in a manner that:</p>
      <ul>
        <li>Violates any applicable law or regulation;</li>
        <li>Infringes third-party intellectual property, privacy, or publicity rights;</li>
        <li>Is abusive, defamatory, obscene, fraudulent, or harmful;</li>
        <li>Exploits or harms minors;</li>
        <li>Attempts to disrupt, compromise, or overload Service security or infrastructure;</li>
        <li>Involves unauthorized advertising, spam, or solicitation;</li>
        <li>Resells or sublicenses the Service without our written consent.</li>
      </ul>

      <h2>7. Intellectual Property</h2>
      <p>
        All intellectual property rights in the Service itself — including software, branding,
        systems, and documentation (excluding User Content and Generated Content owned by you) — are
        owned exclusively by the Provider or its licensors.
      </p>

      <h2>8. Copyright Complaints (DMCA)</h2>
      <p>
        If you believe content on the Service infringes your copyright, send a notice containing
        the information required by 17 U.S.C. § 512 to the contact details in Section 14. We may
        remove or disable access to material alleged to be infringing and may terminate repeat
        infringers.
      </p>

      <h2>9. Third-Party Services</h2>
      <p>
        The Service relies on third parties (hosting, authentication, analytics, payments,
        YouTube-related APIs, and AI providers). Your use of those services may be subject to
        their separate terms and policies.
      </p>

      <h2>10. Term and Termination</h2>
      <p>
        These Terms remain in effect while you use the Service. We may suspend or terminate access
        immediately, with or without notice, for any breach of these Terms, fraud, abuse, or as
        required by law. Provisions that by nature should survive (including payment obligations
        incurred, disclaimers, limitations of liability, and indemnity) survive termination.
      </p>

      <h2>11. Disclaimers and Limitation of Liability</h2>
      <h3>11.1 No Warranties</h3>
      <p>
        THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE,&quot; WITHOUT WARRANTIES
        OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A
        PARTICULAR PURPOSE, AND NON-INFRINGEMENT, TO THE FULLEST EXTENT PERMITTED BY APPLICABLE
        LAW.
      </p>
      <h3>11.2 Limitation of Liability</h3>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE PROVIDER SHALL NOT BE LIABLE FOR INDIRECT,
        INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR
        GOODWILL, ARISING FROM OR RELATED TO THE SERVICE. OUR TOTAL AGGREGATE LIABILITY SHALL NOT
        EXCEED THE GREATER OF ONE HUNDRED U.S. DOLLARS (USD $100) OR THE AMOUNT PAID BY YOU FOR
        THE SERVICE IN THE SIX (6) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
      </p>
      <p>
        Some U.S. states do not allow certain limitations, so some of the above may not apply to
        you.
      </p>

      <h2>12. Governing Law and Jurisdiction</h2>
      <p>
        These Terms are governed by the laws of the State of {LEGAL_GOVERNING_STATE} and the United
        States, without regard to conflict-of-law principles, except where mandatory consumer law
        in your state requires otherwise. You agree that disputes arising from these Terms shall
        be brought in the state or federal courts located in {LEGAL_GOVERNING_STATE}, and you
        consent to personal jurisdiction there, unless applicable law requires a different forum.
      </p>

      <h2>13. Changes to These Terms</h2>
      <p>
        We may modify these Terms periodically. We will post the updated Terms on this page and
        revise the effective date above. Material changes may also be communicated in the Service
        or by email where appropriate. Continued use after changes take effect constitutes
        acceptance.
      </p>

      <h2>14. Contact</h2>
      <p>
        <LegalContactLine purpose="questions about these Terms, billing, account closure, or DMCA notices" />
      </p>
    </LegalPageShell>
  );
}
