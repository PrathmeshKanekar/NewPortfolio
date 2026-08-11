"use client";

import { useReportWebVitals } from "next/web-vitals";
import { ReactNode } from "react";

export function PerformanceProvider({ children }: { children: ReactNode }) {
  useReportWebVitals((metric) => {
    // Only log in development or if a specific performance tracking endpoint is defined
    if (process.env.NODE_ENV === "development") {
      switch (metric.name) {
        case "FCP":
        case "LCP":
        case "CLS":
        case "FID":
        case "TTFB":
        case "INP":
          console.debug(`[Web Vitals] ${metric.name}: ${Math.round(metric.value * 10) / 10}`);
          break;
        default:
          break;
      }
    }

    // In production, you might want to send this to an analytics service
    // e.g., if (window.va) window.va("event", { name: "Web Vitals", data: metric });
  });

  return <>{children}</>;
}
