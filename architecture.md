# Architecture Documentation

## Core Principles
1. **Performance First**: Zero FOUC, minimal JS, Edge-compatible caching.
2. **Strict Typings**: TypeScript must be strictly typed. `any` is forbidden.
3. **Accessibility**: All interactive elements must be keyboard-navigable and WCAG AA compliant.
4. **Resiliency**: Degrade gracefully using Error Boundaries and Suspense.

## Folder Responsibilities
- `/src/app`: Next.js App Router definitions. Contains only route layouts, pages, and route-specific error/loading states.
- `/src/components`: UI primitives and composite components.
  - `/cards`: Reusable card abstractions.
  - `/common`: Generic building blocks (Container, SectionHeading).
  - `/layout`: Site-wide scaffolding (Header, Footer, MobileNav).
  - `/motion`: Framer Motion wrappers.
  - `/providers`: React Context providers.
  - `/sections`: Page-level composition blocks.
- `/src/content`: Static and Markdown data stores.
- `/src/hooks`: Custom React hooks (DOM observers, window properties).
- `/src/lib`: Core utility functions, API clients, constants, and shared helpers.
- `/src/styles`: CSS modules and Tailwind token mappings.
- `/src/types`: Global TypeScript interface definitions.

## Provider Responsibilities
- **ThemeProvider**: Manages `next-themes` persistence and DOM class toggling.
- **LenisProvider**: Manages requestAnimationFrame smooth scrolling.
- **AnalyticsProvider**: Encapsulates Vercel Analytics and Speed Insights scripts.
- **PerformanceProvider**: Centralizes Next.js Web Vitals observation and reporting.
- **GitHubProvider**: Exposes cached, pre-fetched GitHub API state to client components.
- **ResumeProvider**: Exposes resume metadata (URL, version, analytics hooks) without hardcoding paths into components.
- **ImageProvider**: Serves base64 blur placeholders and default quality config.

## Security Strategy
- Strict CSP configured via Next.js headers in `next.config.ts`.
- Frame-ancestors restricted to prevent clickjacking.
- HSTS enabled and referrer policies set to strict-origin.
- External links are generated using the `safeExternalLink` utility ensuring `noopener noreferrer`.

## Performance Strategy
- `next/image` with AVIF/WebP formats and static blur generation.
- `next/font` variable fonts to eliminate CLS and network roundtrips.
- `@next/bundle-analyzer` integrated for build-time chunk verification.
- Route segmentation and ISR caching (revalidate: 3600) for fast TTFB.

## Testing Strategy
- **Vitest & RTL**: Unit testing hooks and pure utilities.
- **Playwright**: End-to-end smoke testing of critical paths (theme toggling, mobile nav).
- **Lighthouse CI**: Build-time verification of Core Web Vitals targets.
