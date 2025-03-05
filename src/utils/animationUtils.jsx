// Animation utilities for the Travel N Explore website
// These can be imported and used across components for consistent animations

import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Custom hook to trigger animations when elements come into view
export const useScrollAnimation = (threshold = 0.1, triggerOnce = true) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return { ref, controls, inView };
};

// Common animation variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6 }
  }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6 }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    }
  }
};

export const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
};

// Common hover animations for buttons and cards
export const buttonHover = {
  whileHover: { 
    scale: 1.05, 
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)" 
  },
  whileTap: { 
    scale: 0.95 
  }
};

export const cardHover = {
  whileHover: { 
    y: -10,
    transition: { duration: 0.2 } 
  }
};

// Page transition variants
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.5 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

// Generate staggered children animations
export const generateStaggeredChildren = (delay = 0.1) => {
  return (i) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: i * delay,
        duration: 0.5,
      },
    }
  });
};

export default {
  useScrollAnimation,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  zoomIn,
  buttonHover,
  cardHover,
  pageTransition,
  generateStaggeredChildren
};