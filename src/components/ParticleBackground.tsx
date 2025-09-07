'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';



const ParticleBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;



  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Simple CSS-based particles */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-pink-300/30 rounded-full animate-float"></div>
      <div className="absolute top-20 right-20 w-1 h-1 bg-blue-300/40 rounded-full animate-float animation-delay-200"></div>
      <div className="absolute top-40 left-1/4 w-1.5 h-1.5 bg-purple-300/30 rounded-full animate-float animation-delay-400"></div>
      <div className="absolute top-60 right-1/3 w-2 h-2 bg-white/30 rounded-full animate-float animation-delay-600"></div>
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-pink-300/40 rounded-full animate-float"></div>
      <div className="absolute bottom-60 right-10 w-1.5 h-1.5 bg-blue-300/30 rounded-full animate-float animation-delay-200"></div>
      <div className="absolute top-1/2 left-10 w-1 h-1 bg-purple-300/40 rounded-full animate-float animation-delay-400"></div>
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-white/20 rounded-full animate-float animation-delay-600"></div>
      
      {/* Simple floating hearts with CSS */}
      <div className="absolute top-1/4 left-1/4 text-red-300/30 text-xl animate-float animation-delay-200">💕</div>
      <div className="absolute top-3/4 right-1/4 text-pink-300/30 text-lg animate-float animation-delay-400">💕</div>
      <div className="absolute top-1/2 left-1/3 text-red-300/20 text-sm animate-float animation-delay-600">💕</div>
    </div>
  );
};

export default ParticleBackground;
