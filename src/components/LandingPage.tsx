'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, Calendar } from 'lucide-react';

interface LandingPageProps {
  onEnter: () => void;
}

const LandingPage = ({ onEnter }: LandingPageProps) => {
  const handleEnterWithMusic = () => {
    // Delay the page transition for dramatic effect
    setTimeout(() => {
      onEnter();
    }, 800);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-gradient-to-br from-blue-800 to-blue-600">





      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/UW20250811320_cce0511807b44a0bd756661093c6abc4-scaled.webp"
          alt="Wedding Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        {/* main gradient is on wrapper now; remove extra overlay */}
        {/* Soft blue overlay to improve readability */}
        {/* Subtle soft-blue overlay to darken image for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-blue-800/40 to-blue-950/60"></div>
        {/* Cinematic Vignette (match Landing) */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40"></div>
      </div>

      {/* CSS-based Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-white/30 rounded-full animate-float"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-blue-300/40 rounded-full animate-float animation-delay-200"></div>
        <div className="absolute top-40 left-1/4 w-1.5 h-1.5 bg-pink-300/30 rounded-full animate-float animation-delay-400"></div>
        <div className="absolute top-60 right-1/3 w-2 h-2 bg-purple-300/30 rounded-full animate-float animation-delay-600"></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-white/40 rounded-full animate-float"></div>
        <div className="absolute bottom-60 right-10 w-1.5 h-1.5 bg-blue-300/30 rounded-full animate-float animation-delay-200"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white max-w-4xl mx-auto w-full">
          {/* Islamic Ornament */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto mb-6 relative">
              <div className="absolute inset-0 border-4 border-white/30 rounded-full"></div>
              <div className="absolute inset-2 border-2 border-white/50 rounded-full"></div>
              <Heart className="absolute inset-0 m-auto h-8 w-8 text-white" />
            </div>
          </motion.div>

          {/* Bismillah */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl text-white/90 font-serif italic mb-4">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
            </p>
            <p className="text-lg text-white/80">
              Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang
            </p>
          </motion.div>

          {/* Surah Ar-Rum 21 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-8 sm:mb-12 bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20 mx-auto max-w-3xl"
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 leading-relaxed mb-4 sm:mb-6 font-serif italic text-center">
              "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
            </p>
            <p className="text-white/70 text-xs sm:text-sm text-center">
              - QS. Ar-Rum: 21
            </p>
          </motion.div>

          {/* Couple Names */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mb-8"
          >
            <h1 className="text-3xl italic sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 font-serif leading-tight">
              Lufi & Chandra
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-200 mb-6">
              We're getting married, Please post us only after our Akad!
            </p>
          </motion.div>

          {/* Wedding Date */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Calendar className="h-6 w-6 text-blue-200" />
              <p className="text-lg md:text-xl text-white">
                21 September 2025
              </p>
            </div>
            <p className="text-blue-200">
              Save the date for our special day
            </p>
          </motion.div>

          {/* Enter Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <motion.button
              onClick={handleEnterWithMusic}
              whileHover={{
                scale: 1.15,
                boxShadow: "0 0 60px rgba(255, 255, 255, 0.8), 0 0 100px rgba(236, 72, 153, 0.3)",
                textShadow: "0 0 30px rgba(255, 255, 255, 1)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(255, 255, 255, 0.3)",
                  "0 0 40px rgba(255, 255, 255, 0.5)",
                  "0 0 20px rgba(255, 255, 255, 0.3)"
                ]
              }}
              transition={{
                boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative flex items-center justify-center bg-gradient-to-r from-white via-pink-50 to-white text-blue-900 px-8 sm:px-12 md:px-16 lg:px-20 py-4 sm:py-5 md:py-6 rounded-full font-bold text-lg sm:text-xl md:text-2xl shadow-2xl transition-all duration-500 border-2 border-white/40 overflow-hidden group w-full max-w-sm sm:max-w-md mx-auto text-center"
            >
              {/* Button Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-200/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Sparkle Effect */}
              <div className="absolute inset-0">
                {/* {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-pink-400 rounded-full"
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      x: (i * 33) % 200,
                      y: (i * 15) % 60,
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.3,
                      repeat: Infinity,
                    }}
                  />
                ))} */}
              </div>

              <span className="relative z-10 flex items-center space-x-4">
                {/* <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Heart className="h-7 w-7 text-pink-500" />
                </motion.div> */}
                <span className="text-shadow-glow">Buka Undangan</span>
                {/* <motion.div
                  animate={{ rotate: [360, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Heart className="h-7 w-7 text-pink-500" />
                </motion.div> */}
              </span>
            </motion.button>
          </motion.div>

          {/* Bottom Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="mt-12 space-y-4"
          >
            <p className="text-white/60 text-sm">
              Klik tombol di atas untuk membuka undangan lengkap
            </p>


          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full opacity-30"></div>
      <div className="absolute top-20 right-20 w-16 h-16 border border-white/20 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 border border-white/20 rounded-full opacity-25"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-full opacity-15"></div>
    </div>
  );
};

export default LandingPage;
