'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FloatingFlowers from './FloatingFlowers';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const weddingDate = new Date('2025-09-21T09:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Initial update
    updateTimer();

    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-800/70 to-blue-600/70 relative overflow-hidden">
      {/* Floating Flowers */}
      {/* <FloatingFlowers density="light" colors={['text-pink-300/20', 'text-purple-300/25', 'text-blue-300/15', 'text-white/10']} /> */}

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Countdown to Our Big Day
            </span>
          </h2>
          <p className="text-blue-200 text-lg mb-12">
            Every moment brings us closer to forever
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 text-white shadow-xl"
            >
              <motion.div
                key={unit.value}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-4xl md:text-5xl font-bold mb-2"
              >
                {unit.value.toString().padStart(2, '0')}
              </motion.div>
              <div className="text-blue-100 text-sm md:text-base font-medium uppercase tracking-wider">
                {unit.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Save the Date
          </h3>
          <p className="text-blue-200 text-lg">
            21 September 2025 • 09:00 WIB
          </p>
          <p className="text-blue-100 mt-2">
            Join us as we celebrate the beginning of our forever
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownTimer;
