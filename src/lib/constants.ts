/** Site-wide configuration, navigation, and social links */

export const SITE_CONFIG = {
  name: "Prathmesh Kanekar",
  title: "Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer focused on building secure, scalable enterprise applications using Angular, ASP.NET Core, C#, SQL Server, PostgreSQL, Docker, and Azure.",
  url: "https://prathmeshkanekar.in",
  email: "prathmeshkanekar2002@gmail.com",
  location: "Kolhapur, Maharashtra",
  availabilityStatus: "Open to opportunities" as const,
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/about#experience-heading" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/#skills" },
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
