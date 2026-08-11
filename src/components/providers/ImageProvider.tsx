"use client";

import { createContext, useContext, ReactNode } from "react";
import { generateBlurDataURL } from "@/lib/utils";

interface ImageContextType {
  defaultBlurDataURL: string;
  defaultQuality: number;
}

const ImageContext = createContext<ImageContextType>({
  defaultBlurDataURL: generateBlurDataURL(),
  defaultQuality: 85,
});

export function ImageProvider({ children }: { children: ReactNode }) {
  return (
    <ImageContext.Provider
      value={{
        defaultBlurDataURL: generateBlurDataURL(),
        defaultQuality: 85,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
}

export function useImageContext() {
  return useContext(ImageContext);
}
