/** Site-wide configuration, navigation, and social links */

export const SITE_CONFIG = {
  name: "Prathmesh Kanekar",
  title: "Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer with professional experience developing enterprise banking software and scalable web applications.",
  url: "https://prathmeshkanekar.in",
  email: "prathmeshkanekar2002@gmail.com",
  location: "Kolhapur, Maharashtra",
  availabilityStatus: "OWNER INPUT REQUIRED" as const,
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/prathmeshkanekar",
    icon: "Github" as const,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/prathmesh-kanekar",
    icon: "Linkedin" as const,
  },
] as const;

export const MAX_FEATURED_PROJECTS = 3;
export const LATEST_BLOG_POSTS_COUNT = 2;
export const ISR_REVALIDATE_SECONDS = 3600;

/** Pinned GitHub repos (owner-curated, not algorithmic) */
export const PINNED_REPOS = [
  "banking-ledger-api",
  "pathology-lis",
  "creator-commerce-platform",
] as const;

export const GITHUB_USERNAME = "prathmeshkanekar";

export const RESUME_FILENAME = "prathmesh-kanekar-resume.pdf";
