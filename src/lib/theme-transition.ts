import React from "react";

/**
 * Executes a 100% GPU-accelerated circular ripple theme transition (View Transitions API).
 * Falls back gracefully to standard theme toggle on unsupported browsers.
 */
export function toggleThemeWithTransition(
  currentTheme: string | undefined,
  setTheme: (theme: string) => void,
  event?: React.MouseEvent
) {
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  // If View Transitions API is not supported, switch directly
  if (
    typeof document === "undefined" ||
    !("startViewTransition" in document) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    setTheme(newTheme);
    return;
  }

  const x = event?.clientX ?? window.innerWidth / 2;
  const y = event?.clientY ?? window.innerHeight / 2;
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  );

  // @ts-expect-error - startViewTransition is a modern browser feature
  const transition = document.startViewTransition(() => {
    setTheme(newTheme);
  });

  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ];

    document.documentElement.animate(
      {
        clipPath: newTheme === "dark" ? clipPath : [...clipPath].reverse(),
      },
      {
        duration: 400,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        pseudoElement:
          newTheme === "dark"
            ? "::view-transition-new(root)"
            : "::view-transition-old(root)",
      }
    );
  });
}
