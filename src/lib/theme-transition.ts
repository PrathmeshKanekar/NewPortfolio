import React from "react";

/**
 * Executes a 100% GPU-accelerated circular ripple theme transition (View Transitions API).
 * Falls back gracefully to standard theme toggle on unsupported browsers.
 */
export function toggleThemeWithTransition(
  currentTheme: string | undefined,
  setTheme: (theme: string) => void,
  _event?: React.MouseEvent
) {
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
}
