'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, Calendar, MapPin } from 'lucide-react';
import FloatingFlowers from './FloatingFlowers';
import TypewriterText from './TypewriterText';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-800/70 to-blue-600/70">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/UW20250811320_01cb7f886f89e9d5028ccd4170e05c45-e1755759503178.webp"
          alt="Lufi & Chandra Wedding"
          fill
          className="object-cover opacity-30"
          priority
        />
        {/* Subtle soft-blue overlay to darken image for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-blue-800/40 to-blue-950/60"></div>
        {/* Cinematic Vignette (match Landing) */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40"></div>

      </div>

      {/* Floating Flowers */}
      {/* <FloatingFlowers
        density="heavy"
        colors={['text-pink-300/40', 'text-purple-300/35', 'text-blue-300/30', 'text-white/25']}
        distribution="center"
        edgeElements={false}
        repeatDelayScale={0.6}
      /> */}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mb-8"
        >
          {/* Animated Heart */}
          {/* <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 1, type: "spring", stiffness: 100 }}
          >
            <Heart className="h-16 w-16 mx-auto mb-8 text-pink-400" />
          </motion.div> */}

          {/* Typewriter Names - Only once */}
          <div className="text-4xl sm:text-5xl italic md:text-6xl lg:text-7xl font-bold mb-6 font-serif">
            <TypewriterText
              texts={['Lufi & Chandra']}
              className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
              delay={2000}
              speed={120}
              loop={false}
            />
          </div>

          {/* Typewriter Subtitle - Starts after name is complete */}
          <div className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8">
            <TypewriterText
              texts={["we’re excited to have you in our wedding!", "Join us in celebration!", "A love story begins..."]}
              className="text-blue-200"
              delay={4500}
              speed={80}
              pauseBetween={3000}
              loop={true}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 2, delay: 8, type: "spring", stiffness: 50 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/20"
        >
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Calendar className="h-6 w-6 text-blue-200" />
              <div>
                <p className="text-blue-100 text-sm">Wedding Date</p>
                <p className="text-white text-lg font-semibold">21 September 2025</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="h-6 w-6 text-blue-200" />
              <div>
                <p className="text-blue-100 text-sm">Location</p>
                <p className="text-white text-lg font-semibold">Baliantoro Villa, Yogyakarta</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quran Verse with delayed animation */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 2, delay: 12, type: "spring" }}
          className="space-y-4 bg-blue-900/15 backdrop-blur-[2px] rounded-xl p-6 border border-white/10"
        >
          <p className="text-blue-100 text-base sm:text-lg italic leading-relaxed">
            "And among His signs is that He created for you mates from among yourselves,
            that you may dwell in tranquility with them, and He has put love and mercy between your hearts."
          </p>
          <p className="text-blue-200 text-sm">- Quran 30:21</p>
        </motion.div>

        {/* Welcome message with even more delay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 2, delay: 15, type: "spring", stiffness: 80 }}
          className="mt-8"
        >
          <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-full px-6 py-3 backdrop-blur-sm border border-white/20">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {/* <Heart className="h-6 w-6 text-red-400" /> */}
            </motion.div>
            <span className="text-white text-lg font-semibold">Welcome to Our Wedding</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              {/* <Heart className="h-6 w-6 text-red-400" /> */}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
