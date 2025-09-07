'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Heart } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import BrideGroom from '@/components/BrideGroom';
import OurStory from '@/components/OurStory';
import WeddingDetails from '@/components/WeddingDetails';
import PhotoGallery from '@/components/PhotoGallery';
import CountdownTimer from '@/components/CountdownTimer';
import RSVPForm from '@/components/RSVPForm';
import SmoothScrollButton from '@/components/SmoothScrollButton';
import ParticleBackground from '@/components/ParticleBackground';
import JourneyTimeline from '@/components/JourneyTimeline';
import CinematicTransition from '@/components/CinematicTransition';

export default function InvitationPage() {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Start music on this page with user interaction
    const startMusic = () => {
      const audio = audioRef.current;
      if (audio) {
        audio.volume = 0.4;
        audio.play().catch(() => {
          console.log('Music autoplay blocked');
        });
      }
    };

    // Try to start music after name typing is complete
    const timer = setTimeout(startMusic, 5000); // Start music after 5 seconds when subtitle starts

    // Also try to start music on any user interaction
    const handleUserInteraction = () => {
      startMusic();
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('scroll', handleUserInteraction);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-600 via-blue-700 to-blue-600 relative overflow-x-hidden">
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        preload="auto"
        style={{ display: 'none' }}
      />

      {/* Particle Background */}
      <ParticleBackground />

      {/* Back to Home Button */}
      <motion.button
        onClick={() => router.push('/')}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="fixed top-6 right-20 bg-white/90 hover:bg-white text-blue-900 p-3 rounded-full shadow-lg z-50 transition-colors duration-200 backdrop-blur-sm"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowLeft className="h-5 w-5" />
      </motion.button>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <CinematicTransition direction="fade" delay={0.3}>
          <div data-section>
            <HeroSection />
          </div>
        </CinematicTransition>

        <CinematicTransition direction="up" delay={0.2}>
          <div data-section>
            <BrideGroom />
          </div>
        </CinematicTransition>

        {/* Replace OurStory with JourneyTimeline */}
        <CinematicTransition direction="scale" delay={0.2}>
          <div data-section>
            <JourneyTimeline />
          </div>
        </CinematicTransition>

        <CinematicTransition direction="scale" delay={0.2}>
          <div data-section>
            <CountdownTimer />
          </div>
        </CinematicTransition>

        <CinematicTransition direction="left" delay={0.2}>
          <div data-section>
            <WeddingDetails />
          </div>
        </CinematicTransition>

        <CinematicTransition direction="right" delay={0.2}>
          <div data-section>
            <PhotoGallery />
          </div>
        </CinematicTransition>

        <CinematicTransition direction="up" delay={0.2}>
          <div data-section>
            <RSVPForm />
          </div>
        </CinematicTransition>
      </motion.main>

      <SmoothScrollButton />

      <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-blue-900 text-white py-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <p className="text-blue-200 text-lg">
            Terima kasih sudah merayakan cinta kami
          </p>
          {/* <div className="mt-4 flex items-center justify-center space-x-2">
            <Heart className="h-5 w-5 text-pink-400 animate-pulse" />
            <span className="text-blue-300 text-sm">Forever Together</span>
            <Heart className="h-5 w-5 text-pink-400 animate-pulse" />
          </div> */}
        </div>
      </footer>
    </div>
  );
}
