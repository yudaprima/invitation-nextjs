'use client';

import { motion } from 'framer-motion';
import { Heart, Calendar, MapPin, Sparkles } from 'lucide-react';

const OurStory = () => {
  const storyTimeline = [
    {
      year: '2020',
      title: 'Pertemuan Pertama',
      description: 'Kami bertemu pertama kali di kampus dan langsung merasa ada chemistry yang istimewa.',
      icon: Heart,
      color: 'from-pink-400 to-pink-600'
    },
    {
      year: '2021',
      title: 'Menjalin Hubungan',
      description: 'Setelah saling mengenal lebih dalam, kami memutuskan untuk menjalin hubungan yang serius.',
      icon: Calendar,
      color: 'from-blue-400 to-blue-600'
    },
    {
      year: '2023',
      title: 'Lamaran',
      description: 'Chandra melamar Lufi dalam suasana yang romantis dengan restu kedua orang tua.',
      icon: Sparkles,
      color: 'from-purple-400 to-blue-600'
    },
    {
      year: '2025',
      title: 'Pernikahan',
      description: 'Kami akan menikah dan memulai babak baru kehidupan sebagai suami istri.',
      icon: MapPin,
      color: 'from-green-400 to-green-600'
    }
  ];

  return (
    <section id="story" className="py-20 bg-gradient-to-br from-blue-800/70 to-blue-600/70 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Heart className="h-12 w-12 text-blue-200 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
            Our Love Story
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Perjalanan cinta kami yang dimulai dari pertemuan sederhana hingga komitmen seumur hidup
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600 rounded-full"></div>

          {storyTimeline.map((story, index) => {
            const Icon = story.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={story.year}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-16 ${
                  isEven ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-5/12 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
                  >
                    <div className={`flex items-center mb-4 ${
                      isEven ? 'justify-end' : 'justify-start'
                    }`}>
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${story.color} flex items-center justify-center text-white shadow-lg ${
                        isEven ? 'mr-3' : 'ml-3 order-2'
                      }`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className={isEven ? 'order-1' : 'order-1'}>
                        <h3 className="text-2xl font-bold text-blue-900 font-serif">
                          {story.title}
                        </h3>
                        <p className="text-blue-600 font-medium">{story.year}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {story.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full shadow-lg z-10"></div>

                {/* Empty space for the other side */}
                <div className="w-5/12"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Love Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/70 rounded-2xl p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-0.5 bg-blue-300"></div>
              <Heart className="h-8 w-8 text-blue-500 mx-4" />
              <div className="w-16 h-0.5 bg-blue-300"></div>
            </div>
            <p className="text-xl md:text-2xl text-blue-800 font-serif italic mb-4">
              "Cinta kami tumbuh seiring waktu, semakin kuat dengan doa dan restu orang tua"
            </p>
            <p className="text-blue-600">
              - Lufi & Chandra
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-blue-200 text-lg mb-6">
            Dan sekarang, kami siap memulai babak baru kehidupan bersama
          </p>
          <div className="flex items-center justify-center space-x-2">
            <Heart className="h-6 w-6 text-red-500 animate-pulse" />
            <span className="text-white font-semibold text-lg">Forever Together</span>
            <Heart className="h-6 w-6 text-red-500 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
