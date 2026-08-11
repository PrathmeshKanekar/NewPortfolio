import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

type ConstructMetadataProps = {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
};

export function constructMetadata({
  title,
  description = SITE_CONFIG.description,
  image = "/og-image.jpg",
  icons = "/favicon.ico",
  noIndex = false,
}: ConstructMetadataProps = {}): Metadata {
  return {
    title: title ? `${title} | ${SITE_CONFIG.name}` : `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`,
    description,
    openGraph: {
      title: title ? `${title} | ${SITE_CONFIG.name}` : `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`,
      description,
      url: SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title || SITE_CONFIG.name,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${SITE_CONFIG.name}` : `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`,
      description,
      images: [image],
      creator: "@prathmeshkanekar", // replace with actual handle if available
    },
    icons,
    metadataBase: new URL(SITE_CONFIG.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
