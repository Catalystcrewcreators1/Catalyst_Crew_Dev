"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { AlertOctagon } from "lucide-react";

export default function GlobalError({
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
    <div className="flex h-[80vh] w-full flex-col items-center justify-center bg-brand-cream px-6 text-center">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-brutal border-4 border-brand-ink bg-brand-red shadow-[8px_8px_0px_0px_rgba(20,20,20,1)]">
        <AlertOctagon className="h-12 w-12 text-white" />
      </div>
      
      <h1 className="mb-4 font-display text-4xl font-bold uppercase tracking-tight text-brand-ink sm:text-5xl">
        System Malfunction
      </h1>
      
      <p className="mb-8 max-w-lg text-lg text-brand-neutral font-medium">
        We encountered a critical error while trying to process your request. The engine has been temporarily halted.
      </p>

      <div className="flex gap-4">
        <Button onClick={() => reset()} variant="secondary" size="lg">
          Reboot System
        </Button>
      </div>
    </div>
  );
}
