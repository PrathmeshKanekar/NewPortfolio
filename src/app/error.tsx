"use client";

import { useEffect } from "react";
import { Container } from "@/components/common/Container";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service in production
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] items-center justify-center py-24">
      <Container>
        <div className="mx-auto flex max-w-md flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-status-error-subtle)]">
            <svg
              className="h-6 w-6 text-[color:var(--color-status-error)]"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h2 className="mt-6 text-heading-3 font-bold text-[color:var(--color-text-primary)]">
            Something went wrong
          </h2>
          <p className="mt-2 text-[color:var(--color-text-secondary)]">
            An unexpected error occurred while rendering this page.
          </p>
          <button
            onClick={reset}
            className="mt-6 inline-flex h-10 items-center justify-center rounded-[var(--radius-2)] bg-[color:var(--color-text-primary)] px-4 text-sm font-medium text-[color:var(--color-surface-base)] transition-colors hover:bg-[color:var(--color-text-secondary)]"
          >
            Try again
          </button>
        </div>
      </Container>
    </div>
  );
}
