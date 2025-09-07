'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  delay?: number;
  speed?: number;
  pauseBetween?: number;
  loop?: boolean; // Add loop option
}

const TypewriterText = ({
  texts,
  className = '',
  delay = 0,
  speed = 100,
  pauseBetween = 2000,
  loop = true
}: TypewriterTextProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const startTyping = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTyping);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    const fullText = texts[currentTextIndex];
    
    if (currentText.length < fullText.length) {
      // Typing effect
      const timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      }, speed);
      
      return () => clearTimeout(timeout);
    } else {
      // Pause before next text or restart
      const timeout = setTimeout(() => {
        if (currentTextIndex < texts.length - 1) {
          setCurrentTextIndex(currentTextIndex + 1);
          setCurrentText('');
        } else if (loop) {
          // Restart from beginning only if loop is true
          setCurrentTextIndex(0);
          setCurrentText('');
        }
        // If loop is false, stop here
      }, pauseBetween);
      
      return () => clearTimeout(timeout);
    }
  }, [currentText, currentTextIndex, texts, speed, pauseBetween, isTyping]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className={className}>
      <span>{currentText}</span>
      <motion.span
        animate={{ opacity: showCursor ? 1 : 0 }}
        transition={{ duration: 0.1 }}
        className="inline-block w-1 h-full bg-current ml-1"
      >
        |
      </motion.span>
    </div>
  );
};

export default TypewriterText;
