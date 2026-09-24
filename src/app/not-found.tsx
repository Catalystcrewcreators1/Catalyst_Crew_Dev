import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Terminal, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center py-24 bg-brand-cream text-center">
      <Container size="narrow">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-ink text-white mb-6 shadow-dark">
          <Terminal className="h-8 w-8 text-brand-red" />
        </div>

        <div className="font-mono text-xs uppercase tracking-widest text-brand-red font-bold">
          ERROR 404 • ROUTE UNRESOLVED
        </div>

        <h1 className="mt-2 font-display text-4xl sm:text-6xl font-extrabold text-brand-ink tracking-tight">
          SECTOR NOT FOUND.
        </h1>

        <p className="mt-4 text-base text-brand-neutral max-w-md mx-auto leading-relaxed">
          The coordinate or quest you are trying to access has been moved, archived, or does not exist in our index.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" variant="primary" size="md" className="gap-2">
            <Home className="h-4 w-4" />
            RETURN TO HOMEBASE
          </Button>
          <Button href="/events" variant="secondary" size="md">
            BROWSE QUESTS
          </Button>
        </div>
      </Container>
    </div>
  );
}
