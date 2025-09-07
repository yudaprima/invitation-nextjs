'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import CinematicTransition from './CinematicTransition';
import FloatingFlowers from './FloatingFlowers';

const JourneyTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const journeySteps = [
    {
      year: '2020',
      title: 'Pertemuan',
      description: 'Awal pertemuan kami di bangku sma.',
      color: 'from-blue-400/80 via-blue-500/80 to-blue-600/80',
      image: '/UW20250811320_01cb7f886f89e9d5028ccd4170e05c45-e1755759503178.webp',
      position: 'left'
    },
    {
      year: '2021',
      title: 'Perjalanan Cinta',
      description: 'Perjalanan panjang penuh doa harapan dan perjuangan yg akhirnya membawa kami pada 25 mei 2025.',
      color: 'from-blue-400/80 via-blue-500/80 to-blue-600/80',
      image: '/UW20250811320_10a5e6a802736d6b315019933d8c0444-scaled.webp',
      position: 'right'
    },
    {
      year: '2023',
      title: 'Janji Suci',
      description: 'Kini dgn syukur yg tak terhingga kami siap melangkah menuju hari bahagia saat janji suci pernikahan pada 21 september 2025.',
      color: 'from-blue-400/80 via-blue-500/80 to-blue-600/80',
      image: '/UW20250811320_15d89cbb31158d13b4596f61384ec86f.webp',
      position: 'left'
    },
    {
      year: '2025',
      title: 'Ikatan Selamanya',
      description: 'Perjalanan cinta yang indah akan mencapai puncaknya. Dua jiwa akan bersatu dalam ikatan suci pernikahan, memulai babak baru kehidupan.',
      color: 'from-blue-400/80 via-blue-500/80 to-blue-600/80',
      image: '/6.webp',
      position: 'right'
    }
  ];


  const itemVariants = (isLeft: boolean) => ({
    hidden: { opacity: 0, x: isLeft ? -100 : 100 },
    show: { opacity: 1, x: 0 },
  });

  const badgeVariants = {
    hidden: { scale: 0 },
    show: { scale: 1 },
  } as const;

  const nodeVariants = {
    hidden: { scale: 0, rotate: -180 },
    show: { scale: 1, rotate: 0 },
  } as const;


  return (
    <section ref={containerRef} className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-blue-100 to-blue-300 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/6.webp')] bg-cover bg-center opacity-5"></div>
        {/* Soft blue overlay + vignette (pastel) */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400/30 via-blue-500/50 to-blue-950/35"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/25"></div>
      </div>


      {/* Floating Flowers */}
      {/* <FloatingFlowers
        density="light"
        colors={['text-pink-300/15', 'text-purple-300/15', 'text-blue-300/10', 'text-white/10']}
        distribution="center"
        edgeElements={false}
        repeatDelayScale={0.5}
      /> */}

      {/* Container */}
      <motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <CinematicTransition delay={0.05} direction="fade" duration={0.8} viewportAmount={0} viewportMargin={'400px 0px 400px 0px'}>
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            {/* <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, amount: 0, margin: '400px 0px 400px 0px' }}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-6 sm:mb-8 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-blue-900/20 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-blue-300" />
              </div>
            </motion.div> */}

            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 font-serif leading-tight">
              <span className="bg-gradient-to-r from-blue-300/50 via-blue-400/50 to-blue-500/50 bg-clip-text text-transparent">
                Our Journey
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed px-4">
              Sebuah perjalanan cinta yang dimulai dari takdir, tumbuh dengan kasih sayang,
              dan akan bermuara pada ikatan suci selamanya
            </p>
          </div>
        </CinematicTransition>

        {/* Timeline Container */}
        <div className="relative">
          {/* Animated Timeline Path - Hidden on mobile, centered line on desktop */}
          <svg
            className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full hidden md:block"
            style={{ top: '0', zIndex: 1 }}
          >
            <motion.path
              d="M1,0 L1,100%"
              stroke="url(#gradient)"
              strokeWidth="4"
              fill="none"
              style={{ pathLength }}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#93c5fd" />
                <stop offset="25%" stopColor="#60a5fa" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="75%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>
          </svg>

          {/* Mobile Timeline Path - Left side */}
          <svg
            className="absolute left-8 w-2 h-full md:hidden"
            style={{ top: '0', zIndex: 1 }}
          >
            <motion.path
              d="M1,0 L1,100%"
              stroke="url(#gradient-mobile)"
              strokeWidth="3"
              fill="none"
              style={{ pathLength }}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient-mobile" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#93c5fd" />
                <stop offset="25%" stopColor="#60a5fa" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="75%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>
          </svg>

          {/* Journey Steps */}
          {journeySteps.map((step, index) => {
                    const isLeft = step.position === 'left';

            return (
              <motion.div
                key={step.year}
                className={`relative flex items-center mb-16 sm:mb-24 md:mb-32 ${
                  isLeft ? 'md:flex-row flex-col' : 'md:flex-row-reverse flex-col'
                }`}
                variants={itemVariants(isLeft)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15, margin: '200px 0px 200px 0px' }}
                transition={{ duration: 0.6, delay: index * 0.02 }}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-16 md:text-right text-left pl-20 md:pl-0' : 'md:pl-16 md:text-left text-left pl-20 md:pl-0'} mb-4 md:mb-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02, rotateY: 2 }}
                    transition={{ duration: 0.8 }}
                    className="bg-blue-900/10 backdrop-blur-[2px] rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl"
                  >
                    {/* Year Badge */}
                    <motion.div
                      variants={badgeVariants}
                      transition={{ duration: 0.6, delay: index * 0.05 + 0.2 }}
                      className={`inline-block bg-gradient-to-r ${step.color} text-white px-4 sm:px-6 py-2 rounded-full font-bold text-base sm:text-lg mb-4 shadow-lg`}
                    >
                      {step.year}
                    </motion.div>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 font-serif leading-tight">
                      {step.title}
                    </h3>

                    <p className="text-blue-100 leading-relaxed text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                      {step.description}
                    </p>

                    {/* Decorative Elements */}
                    <div className={`flex items-center space-x-2 ${isLeft ? 'md:justify-end justify-center' : 'md:justify-start justify-center'}`}>
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 3, delay: i * 0.3, repeat: Infinity }}
                          className="w-2 h-2 bg-blue-200/40 rounded-full"
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                {/* <motion.div
                  className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2 z-10 top-4 md:top-auto"
                  variants={nodeVariants}
                  transition={{ duration: 0.9, delay: index * 0.05 + 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-2xl border-3 sm:border-4 border-white/30`}>
                  </div>

                </motion.div> */}

                {/* Empty space for the other side - only on desktop */}
                <div className="hidden md:block md:w-5/12"></div>
              </motion.div>
            );
          })}
        </div>


        {/* Final Message */}
        <CinematicTransition delay={1} direction="scale">
          <div className="text-center mt-20">
            {/* <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 mx-auto mb-6"
            >
              <Heart className="h-16 w-16 text-pink-400" />
            </motion.div>

            <h3 className="text-3xl font-bold text-white mb-4 font-serif">
              Dan Perjalanan Berlanjut...
            </h3> */}
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Setiap akhir adalah awal yang baru. Perjalanan cinta kami akan terus berlanjut
              dalam ikatan suci pernikahan, menuju kebahagiaan yang abadi.
            </p>
          </div>
        </CinematicTransition>
      </div>
      </motion.div>
    </section>
  );
};

export default JourneyTimeline;
