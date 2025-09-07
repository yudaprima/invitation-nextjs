'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const SmoothScrollButton = () => {
  const scrollToNext = () => {
    const currentSection = document.querySelector('[data-section]');
    if (currentSection) {
      const nextSection = currentSection.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.button
      onClick={scrollToNext}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg z-50 transition-colors duration-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2 }}
    >
      <ChevronDown className="h-6 w-6" />
    </motion.button>
  );
};

export default SmoothScrollButton;
