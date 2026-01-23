/**
 * Motion System - Honey-Inspired Animations
 * Centralized motion configuration for consistent, organic animations
 */

// Custom Easing Curves
export const easing = {
    // Honey-like slow, viscous motion
    honeyEase: [0.34, 1.56, 0.64, 1],
    // Gentle floating motion
    gentleFloat: [0.25, 0.46, 0.45, 0.94],
    // Smooth entrance
    smoothIn: [0.16, 1, 0.3, 1],
    // Smooth exit
    smoothOut: [0.7, 0, 0.84, 0],
    // Elastic bounce (for micro-interactions)
    elasticOut: [0.68, -0.55, 0.265, 1.55],
} as const;

// Animation Durations (in seconds)
export const duration = {
    instant: 0.15,
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
    verySlow: 1.2,
} as const;

// Stagger Configurations
export const stagger = {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
    verySlow: 0.2,
} as const;

// Reusable Animation Variants
export const variants = {
    // Fade + Slide Up (for section entrances)
    fadeInUp: {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: duration.slow, ease: easing.smoothIn },
    },

    // Fade + Slide Down
    fadeInDown: {
        initial: { opacity: 0, y: -40 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
        transition: { duration: duration.slow, ease: easing.smoothIn },
    },

    // Scale + Fade (for cards)
    scaleIn: {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
        transition: { duration: duration.normal, ease: easing.smoothIn },
    },

    // Slide from Right (for drawers)
    slideInRight: {
        initial: { x: "100%" },
        animate: { x: 0 },
        exit: { x: "100%" },
        transition: { type: "spring", damping: 25, stiffness: 200 },
    },

    // Slide from Left
    slideInLeft: {
        initial: { x: "-100%" },
        animate: { x: 0 },
        exit: { x: "-100%" },
        transition: { type: "spring", damping: 25, stiffness: 200 },
    },

    // Backdrop Fade
    backdropFade: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: duration.fast },
    },

    // Stagger Container (for lists)
    staggerContainer: {
        animate: {
            transition: {
                staggerChildren: stagger.normal,
                delayChildren: 0.1,
            },
        },
    },

    // Stagger Item
    staggerItem: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: duration.normal, ease: easing.smoothIn },
    },
} as const;

// Hover Variants
export const hoverVariants = {
    // Card Hover (scale + shadow)
    cardHover: {
        rest: { scale: 1, y: 0 },
        hover: {
            scale: 1.03,
            y: -4,
            transition: { duration: duration.fast, ease: easing.gentleFloat }
        },
    },

    // Button Hover (scale + glow)
    buttonHover: {
        rest: { scale: 1 },
        hover: {
            scale: 1.05,
            transition: { duration: duration.fast, ease: easing.elasticOut }
        },
        tap: { scale: 0.97 },
    },

    // Icon Hover (rotate + scale)
    iconHover: {
        rest: { scale: 1, rotate: 0 },
        hover: {
            scale: 1.1,
            rotate: 5,
            transition: { duration: duration.fast }
        },
    },
} as const;

// Scroll Animation Utilities
export const scrollReveal = {
    // Default scroll reveal config
    default: {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: duration.slow, ease: easing.smoothIn },
    },

    // Fast scroll reveal
    fast: {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: duration.normal, ease: easing.smoothIn },
    },

    // With stagger
    stagger: (index: number) => ({
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: {
            duration: duration.slow,
            ease: easing.smoothIn,
            delay: index * stagger.normal
        },
    }),
} as const;

// Number Animation Utility
export const animateNumber = (from: number, to: number, duration: number = 0.5) => ({
    initial: { value: from },
    animate: { value: to },
    transition: { duration, ease: easing.smoothIn },
});

// Ripple Effect Configuration
export const rippleConfig = {
    initial: { scale: 0, opacity: 0.5 },
    animate: { scale: 2, opacity: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
};

// Loading Spinner Variants
export const spinnerVariants = {
    animate: {
        rotate: 360,
        transition: {
            duration: 1,
            repeat: Infinity,
            ease: "linear",
        },
    },
};

// Toast Notification Variants
export const toastVariants = {
    initial: { opacity: 0, y: -20, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.95 },
    transition: { duration: duration.fast, ease: easing.smoothIn },
};

// Particle Animation
export const particleFloat = (delay: number = 0) => ({
    animate: {
        y: [0, -100, 0],
        opacity: [0, 0.8, 0],
        scale: [1, 1.2, 1],
    },
    transition: {
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        ease: "linear",
        delay,
    },
});

// Honey Drip Animation
export const honeyDrip = {
    initial: { height: 0, opacity: 0 },
    animate: { height: "100%", opacity: 1 },
    transition: {
        duration: duration.verySlow,
        ease: easing.honeyEase,
        delay: 0.5
    },
};

// Bee Flight Path Animation
export const beeFlight = (duration: number, delay: number = 0) => ({
    animate: {
        offsetDistance: ["0%", "100%"],
    },
    transition: {
        duration,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: easing.gentleFloat,
        delay,
    },
});

// Accessibility: Respect reduced motion preference
export const respectReducedMotion = (animation: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return {
            ...animation,
            transition: { duration: 0.01 },
        };
    }
    return animation;
};
