'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CinematicTransitionProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';
  duration?: number;
  viewportAmount?: number;
  viewportMargin?: string;
}

const CinematicTransition = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 1.2,
  viewportAmount = 0.05,
  viewportMargin,
}: CinematicTransitionProps) => {
  
  const getInitialState = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 120, scale: 0.85, rotateX: 15 };
      case 'down':
        return { opacity: 0, y: -120, scale: 0.85, rotateX: -15 };
      case 'left':
        return { opacity: 0, x: -120, scale: 0.85, rotateY: 15 };
      case 'right':
        return { opacity: 0, x: 120, scale: 0.85, rotateY: -15 };
      case 'scale':
        return { opacity: 0, scale: 0.3, rotateZ: -10 };
      case 'fade':
      default:
        return { opacity: 0, scale: 0.95 };
    }
  };

  const getAnimateState = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0, scale: 1, rotateX: 0 };
      case 'left':
      case 'right':
        return { opacity: 1, x: 0, scale: 1, rotateY: 0 };
      case 'scale':
        return { opacity: 1, scale: 1, rotateZ: 0 };
      case 'fade':
      default:
        return { opacity: 1, scale: 1 };
    }
  };

  return (
    <motion.div
      initial={getInitialState()}
      whileInView={getAnimateState()}
      viewport={{ once: true, amount: viewportAmount, ...(viewportMargin ? { margin: viewportMargin } : {}) }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // More dramatic easing
        type: "spring",
        stiffness: 50,
        damping: 20
      }}
    >
      {children}
    </motion.div>
  );
};

export default CinematicTransition;
