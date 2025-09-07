'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface FloatingFlowersProps {
  density?: 'light' | 'medium' | 'heavy';
  colors?: string[];
  distribution?: 'full' | 'center';
  edgeElements?: boolean;
  repeatDelayScale?: number;
}

const FloatingFlowers = ({
  density = 'medium',
  colors = ['text-pink-300/20', 'text-purple-300/20', 'text-blue-300/20', 'text-white/10'],
  distribution = 'full',
  edgeElements = true,
  repeatDelayScale = 1,
}: FloatingFlowersProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const flowerCount = density === 'light' ? 8 : density === 'medium' ? 12 : 16;
  const flowers = ['🌸', '🌺', '🌻', '🌷', '🌹', '💐', '🌼', '🏵️'];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* CSS-based floating flowers */}
      {[...Array(flowerCount)].map((_, i) => {
        const flower = flowers[i % flowers.length];
        const color = colors[i % colors.length];
        const delay = i * 0.8 + (Math.sin(i * 2.1) * 2); // Add randomness to delay
        const duration = 10 + (i % 6) + (Math.cos(i * 1.7) * 3); // Vary duration

        // Grid distribution
        const cols = Math.ceil(Math.sqrt(flowerCount));
        const rows = Math.ceil(flowerCount / cols);
        const col = i % cols;
        const row = Math.floor(i / cols);

        // Positions based on distribution mode
        const xPositionFull = (col * (100 / cols)) + (Math.sin(i * 2.5) * 15) + 10;
        const yStartFull = 100 + (row * 20) + (Math.cos(i * 1.8) * 25);

        // Centered cluster positions
        const xCentered = Math.max(
          20,
          Math.min(
            80,
            50 + ((col - (cols - 1) / 2) * (60 / cols)) + Math.sin(i * 2.5) * 10
          )
        );
        const yCenter = Math.max(
          30,
          Math.min(
            70,
            50 + ((row - (rows - 1) / 2) * (30 / rows)) + Math.cos(i * 1.8) * 8
          )
        );

        const isCenter = distribution === 'center';
        const xInitial = isCenter ? xCentered : xPositionFull;
        const yInitial = isCenter ? yCenter : yStartFull;

        const animateY = isCenter
          ? [`${yCenter + 12}%`, `${yCenter - 12}%`, `${yCenter + 12}%`]
          : [`${yStartFull}%`, '-15%'];
        const animateX = isCenter
          ? [`${xCentered}%`, `${Math.max(20, Math.min(80, xCentered + Math.sin(i * 3.2) * 12))}%`, `${xCentered}%`]
          : [`${xPositionFull}%`, `${Math.max(0, Math.min(100, xPositionFull + (Math.sin(i * 3.2) * 40)))}%`];
        const animateOpacity = isCenter ? [0.6, 1, 0.6] : [0, 0.8, 1, 0.8, 0];
        const animateScale = isCenter ? [0.8, 1.1, 0.9, 1.05, 0.8] : [0.3, 1.2, 0.9, 1.1, 0.3];

        return (
          <motion.div
            key={i}
            className={`absolute ${color} text-xl sm:text-2xl md:text-3xl`}
            initial={{
              x: `${xInitial}%`,
              y: `${yInitial}%`,
              opacity: 0,
              rotate: 0,
              scale: isCenter ? 0.6 : 0.3,
            }}
            animate={{
              y: animateY,
              opacity: animateOpacity,
              rotate: [0, 180, 360, 540],
              scale: animateScale,
              x: animateX,
            }}
            transition={{
              duration: duration,
              delay: delay,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 3 * repeatDelayScale,
            }}
          >
            {flower}
          </motion.div>
        );
      })}

      {/* Additional sparkle effects - More visible */}
      {[...Array(10)].map((_, i) => {
        // Distribute sparkles in a more random pattern
        const sparkleX = (i * 23.7 + Math.sin(i * 4.1) * 30) % 100;
        const sparkleY = 100 + (i * 18 + Math.cos(i * 2.9) * 35) % 60;

        return (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-2 h-2 bg-white/50 rounded-full"
            initial={{
              x: `${sparkleX}%`,
              y: `${sparkleY}%`,
              scale: 0,
              opacity: 0,
            }}
          animate={{
            y: [null, '-10%'],
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5,
            delay: i * 0.6,
            repeat: Infinity,
            repeatDelay: 2 * repeatDelayScale,
          }}
        />
        );
      })}

      {/* Floating petals - More visible and spread out */}
      {[...Array(8)].map((_, i) => {
        // Create zigzag pattern for petals
        const petalX = (i * 11.5 + Math.sin(i * 5.2) * 25 + Math.cos(i * 3.1) * 15) % 100;

        return (
          <motion.div
            key={`petal-${i}`}
            className="absolute text-pink-200/40 text-lg sm:text-xl"
            initial={{
              x: `${petalX}%`,
              y: '110%',
              rotate: 0,
            }}
          animate={{
            y: '-15%',
            rotate: 1080,
            x: [`${petalX}%`, `${Math.max(0, Math.min(100, petalX + (Math.sin(i * 4.7) * 50)))}%`],
          }}
          transition={{
            duration: 15,
            delay: i * 1.5,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 4,
          }}
        >
          🌸
        </motion.div>
        );
      })}

      {/* Additional smoke/mist effects */}
      {[...Array(6)].map((_, i) => {
        // Create wave-like distribution for smoke
        const smokeX = (i * 14.3 + Math.sin(i * 6.8) * 35 + Math.cos(i * 2.4) * 20) % 100;

        return (
          <motion.div
            key={`smoke-${i}`}
            className="absolute text-white/20 text-2xl sm:text-3xl"
            initial={{
              x: `${smokeX}%`,
              y: '105%',
              opacity: 0,
              scale: 0.5,
            }}
          animate={{
            y: '-10%',
            opacity: [0, 0.3, 0.5, 0.3, 0],
            scale: [0.5, 1.5, 1, 1.2, 0.5],
            x: [`${smokeX}%`, `${Math.max(0, Math.min(100, smokeX + (Math.sin(i * 3.9) * 35)))}%`],
          }}
          transition={{
            duration: 20,
            delay: i * 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 6,
          }}
        >
          💨
        </motion.div>
        );
      })}

      {/* Corner elements to fill empty spaces */}
      {edgeElements && ([
        { x: 5, y: 20, emoji: '✨', delay: 1 },
        { x: 95, y: 15, emoji: '🌟', delay: 3 },
        { x: 10, y: 80, emoji: '💫', delay: 5 },
        { x: 90, y: 85, emoji: '⭐', delay: 7 },
        { x: 50, y: 10, emoji: '🌙', delay: 2 },
        { x: 25, y: 90, emoji: '☄️', delay: 4 },
        { x: 75, y: 95, emoji: '🌠', delay: 6 },
      ].map((corner, i) => (
        <motion.div
          key={`corner-${i}`}
          className="absolute text-white/30 text-lg sm:text-xl"
          initial={{
            x: `${corner.x}%`,
            y: `${corner.y}%`,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: [0, 0.6, 0.8, 0.6, 0],
            scale: [0, 1.2, 1, 1.1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            delay: corner.delay,
            repeat: Infinity,
            repeatDelay: 4 * repeatDelayScale,
          }}
        >
          {corner.emoji}
        </motion.div>
      )))}
    </div>
  );
};

export default FloatingFlowers;
