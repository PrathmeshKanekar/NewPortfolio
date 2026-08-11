import Link from "next/link";
import { Container } from "@/components/common/Container";
import { ArrowLeft } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Not Found",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center py-24">
      <Container>
        <div className="mx-auto flex max-w-md flex-col items-center text-center">
          <p className="text-sm font-semibold text-[color:var(--color-accent-default)]">
            404
          </p>
          <h1 className="mt-4 text-heading-1 font-bold text-[color:var(--color-text-primary)] tracking-tight">
            Page not found
          </h1>
          <p className="mt-4 text-[color:var(--color-text-secondary)]">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex h-10 items-center gap-2 rounded-[var(--radius-2)] bg-[color:var(--color-text-primary)] px-5 text-sm font-medium text-[color:var(--color-surface-base)] transition-colors hover:bg-[color:var(--color-text-secondary)]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex h-10 items-center justify-center rounded-[var(--radius-2)] px-4 text-sm font-medium text-[color:var(--color-text-secondary)] transition-colors hover:text-[color:var(--color-text-primary)] hover:bg-[color:var(--color-surface-hover)]"
            >
              Contact Support
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
