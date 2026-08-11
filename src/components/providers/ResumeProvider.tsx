"use client";

import { createContext, useContext, ReactNode } from "react";

interface ResumeContextType {
  downloadUrl: string;
  version: string;
  lastUpdated: string;
  trackDownload: () => void;
}

const ResumeContext = createContext<ResumeContextType | null>(null);

export function ResumeProvider({
  children,
  resumeConfig,
}: {
  children: ReactNode;
  resumeConfig: Omit<ResumeContextType, "trackDownload">;
}) {
  const trackDownload = () => {
    // Add analytics tracking logic here
    if (typeof window !== "undefined" && (window as any).va) {
      (window as any).va("event", { name: "Resume Downloaded", data: { version: resumeConfig.version } });
    }
  };

  return (
    <ResumeContext.Provider value={{ ...resumeConfig, trackDownload }}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error("useResume must be used within a ResumeProvider");
  }
  return context;
}
