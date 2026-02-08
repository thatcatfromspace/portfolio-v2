// Motion constants for consistent animation behavior

export const DURATION = {
  fast: 0.15,
  base: 0.2,
  slow: 0.3,
  enter: 0.4,
} as const;

export const EASE = {
  // Default ease for most transitions
  default: [0.25, 0.1, 0.25, 1],
  // Ease out for entrances
  out: [0, 0, 0.2, 1],
  // Ease in for exits
  in: [0.4, 0, 1, 1],
  // Spring-like bounce
  bounce: [0.175, 0.885, 0.32, 1.275],
} as const;

// Spring configurations
export const SPRING = {
  soft: { type: "spring" as const, stiffness: 400, damping: 30 },
  snappy: { type: "spring" as const, stiffness: 500, damping: 28 },
  gentle: { type: "spring" as const, stiffness: 200, damping: 20 },
} as const;

// Variants for page/section transitions
export const fadeInUp = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.enter, ease: EASE.out },
  },
} as const;

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.slow },
  },
} as const;

// Stagger container for children
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
} as const;

// For individual staggered items
export const staggerItem = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE.out },
  },
} as const;

// Interactive feedback
export const tapScale = {
  scale: 0.98,
  transition: { duration: DURATION.fast },
} as const;

export const hoverLift = {
  y: -2,
  transition: SPRING.soft,
} as const;
