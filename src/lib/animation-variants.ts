/** Centralized Framer Motion variant objects (Section 10-11) */

/** Standard expo-out easing for all reveal/entrance motion */
const EASE_REVEAL: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Expo-in easing for exits */
const EASE_EXIT: [number, number, number, number] = [0.7, 0, 0.84, 0];

/** Fade up reveal — the default for all section content */
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: EASE_REVEAL,
    },
  },
};

/** Container with stagger — wraps groups of child elements */
export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

/** Page transition enter/exit */
export const pageTransitionVariants = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: EASE_REVEAL },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.2, ease: EASE_EXIT },
  },
};

/** Scale up for cards on hover (max 1.02) */
export const cardHoverVariants = {
  rest: {
    y: 0,
    boxShadow: "var(--shadow-sm)",
    transition: { duration: 0.2, ease: EASE_REVEAL },
  },
  hover: {
    y: -4,
    boxShadow: "var(--shadow-lg)",
    transition: { duration: 0.2, ease: EASE_REVEAL },
  },
};

/** Nav underline shared element transition */
export const navUnderlineVariants = {
  initial: { scaleX: 0 },
  animate: {
    scaleX: 1,
    transition: { duration: 0.3, ease: EASE_REVEAL },
  },
};

/** Reduced motion — opacity-only at 150ms */
export const reducedMotionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.15 },
  },
};
