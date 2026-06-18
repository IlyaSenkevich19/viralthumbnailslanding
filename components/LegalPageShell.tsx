import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = {
  title: string;
  lastUpdated: string;
  children: ReactNode;
};

export default function LegalPageShell({ title, lastUpdated, children }: Props) {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] border-b border-border bg-bg pb-20 pt-24 md:pt-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-sm text-text-dim">Effective date: {lastUpdated}</p>
          <div className="prose-legal mt-10 space-y-4 text-sm leading-relaxed text-text-muted md:text-base [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:scroll-mt-28 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-text-primary [&_h2]:first:mt-0 [&_li]:mt-2 [&_ol]:ml-5 [&_ol]:list-decimal [&_p+p]:mt-4 [&_strong]:font-medium [&_strong]:text-text-primary [&_ul]:ml-5 [&_ul]:list-disc">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
