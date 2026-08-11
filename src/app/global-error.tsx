"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
          <div style={{ textAlign: "center", maxWidth: "28rem" }}>
            <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#111827", marginBottom: "1rem" }}>
              A critical error occurred
            </h1>
            <p style={{ color: "#4B5563", marginBottom: "1.5rem" }}>
              Something went horribly wrong and the application could not recover.
            </p>
            <button
              onClick={() => reset()}
              style={{ padding: "0.5rem 1rem", backgroundColor: "#111827", color: "white", borderRadius: "0.375rem", fontWeight: "500" }}
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
