"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[400px] rounded-full bg-accent-amber/[0.06] blur-[120px]" />
      </div>

      <div className="relative">
        <div className="flex items-center justify-center">
          <AlertTriangle className="h-12 w-12 text-accent-amber" />
        </div>

        <h1 className="mt-6 text-3xl font-bold text-text-primary sm:text-4xl">
          Something went wrong
        </h1>
        <p className="mx-auto mt-3 max-w-md text-text-muted">
          An unexpected error occurred. Please try again or go back to the
          home page.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 font-medium text-white transition-all hover:bg-accent-hover active:scale-[0.98]"
          >
            Try Again
          </button>
          <Button variant="outline" size="md" href="/">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
