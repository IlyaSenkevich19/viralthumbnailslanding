import type { ReactNode } from "react";
import {
  LEGAL_CONTACT_EMAIL,
  LEGAL_EFFECTIVE_DATE,
  LEGAL_LAST_UPDATED,
  legalContactHref,
} from "@/lib/legal";

export { LEGAL_EFFECTIVE_DATE, LEGAL_LAST_UPDATED };

type LegalContactProps = {
  purpose?: string;
};

export function LegalContactLine({ purpose = "questions" }: LegalContactProps): ReactNode {
  return (
    <>
      For {purpose}, contact us at{" "}
      <a
        href={legalContactHref()}
        className="text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
      >
        {LEGAL_CONTACT_EMAIL}
      </a>
      .
    </>
  );
}
