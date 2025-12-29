import { Variants } from 'framer-motion';

// Fade in from bottom
export const fadeInUp: Variants = {
    initial: {
        opacity: 0,
        y: 60,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
};

// Fade in from top
export const fadeInDown: Variants = {
    initial: {
        opacity: 0,
        y: -60,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
};

// Fade in from left
export const fadeInLeft: Variants = {
    initial: {
        opacity: 0,
        x: -60,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
};

// Fade in from right
export const fadeInRight: Variants = {
    initial: {
        opacity: 0,
        x: 60,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
};

// Scale in
export const scaleIn: Variants = {
    initial: {
        opacity: 0,
        scale: 0.8,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
};

// Stagger container
export const staggerContainer: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

// Stagger item
export const staggerItem: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
        },
    },
};

// Slide in from bottom
export const slideInUp: Variants = {
    initial: {
        y: 100,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
};

// Rotate in
export const rotateIn: Variants = {
    initial: {
        opacity: 0,
        rotate: -10,
        scale: 0.9,
    },
    animate: {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
};

// Hover scale
export const hoverScale = {
    rest: { scale: 1 },
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.3,
            ease: 'easeInOut',
        },
    },
};

// Hover lift (card effect)
export const hoverLift = {
    rest: {
        y: 0,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
    hover: {
        y: -8,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        transition: {
            duration: 0.3,
            ease: 'easeOut',
        },
    },
};

// Gradient shift animation
export const gradientShift = {
    animate: {
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        transition: {
            duration: 15,
            ease: 'linear',
            repeat: Infinity,
        },
    },
};

// Typing cursor blink
export const cursorBlink = {
    animate: {
        opacity: [1, 0, 1],
        transition: {
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
        },
    },
};

// Page transition
export const pageTransition = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: 'easeOut',
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3,
            ease: 'easeIn',
        },
    },
};

// Smooth ease curve
export const smoothEase = [0.6, -0.05, 0.01, 0.99];

// Spring config
export const springConfig = {
    type: 'spring',
    stiffness: 100,
    damping: 15,
};
