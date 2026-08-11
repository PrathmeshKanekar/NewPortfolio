export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[color:var(--color-accent-subtle)] border-t-[color:var(--color-accent-default)]" />
        <p className="text-sm font-medium text-[color:var(--color-text-secondary)] animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
