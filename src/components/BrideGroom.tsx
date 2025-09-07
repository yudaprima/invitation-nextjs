'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, User } from 'lucide-react';
import FloatingFlowers from './FloatingFlowers';

const BrideGroom = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-800/70 to-blue-600/70 relative overflow-hidden">
      {/* Floating Flowers */}
      {/* <FloatingFlowers density="light" colors={['text-pink-300/20', 'text-purple-300/15', 'text-blue-300/15', 'text-white/10']} /> */}

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 border border-white/20">
            <p className="text-lg md:text-xl text-white leading-relaxed mb-4 font-serif italic">
              "Dan segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat (kebesaran Allah)"
            </p>
            <p className="text-blue-200 text-sm">
              - QS. Adz-Dzariyat: 49
            </p>
          </div> */}
          {/* <Heart className="h-12 w-12 text-pink-400 mx-auto mb-6" /> */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
            <span className="bg-gradient-to-r italic from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Bride & Groom
            </span>
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Dua insan yang dipersatukan dalam ikatan suci pernikahan
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative mb-8">
              <div className="w-80 h-80 mx-auto relative rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src="/lufi.webp"
                  alt="Lufi - The Bride"
                  fill
                  className="object-cover"
                />
              </div>
              {/* <div className="absolute -top-4 -right-4 w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="h-8 w-8 text-pink-500" />
              </div> */}
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-3xl font-bold text-blue-900 mb-2 font-serif">
                Lufi
              </h3>
              <h4 className="text-xl text-blue-700 mb-6 font-medium">
                Lufi Afita Kardina
              </h4>

              <div className="text-left space-y-4 text-gray-700">
                <div className="flex items-start space-x-3">
                  <User className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-blue-900">Putri Kedua dari:</p>
                    <p>Bapak Sukarman</p>
                    <p>Ibu Siti Murtafiah</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-blue-600 italic text-sm">
                  "Seorang wanita yang lembut hati dan penuh kasih sayang"
                </p>
              </div>
            </div>
          </motion.div>

          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative mb-8">
              <div className="w-80 h-80 mx-auto relative rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src="/candra.webp"
                  alt="Chandra - The Groom"
                  fill
                  className="object-cover"
                />
              </div>
              {/* <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="h-8 w-8 text-blue-500" />
              </div> */}
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-3xl font-bold text-blue-900 mb-2 font-serif">
                Chandra
              </h3>
              <h4 className="text-xl text-blue-700 mb-6 font-medium">
                Bagus Chandra Waisaka
              </h4>

              <div className="text-left space-y-4 text-gray-700">
                <div className="flex items-start space-x-3">
                  <User className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-blue-900">Putra Pertama dari:</p>
                    <p>Bapak Reza Khrisna</p>
                    <p>Ibu Aprilia Evita Wulandari</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-blue-600 italic text-sm">
                  "Seorang pria yang bertanggung jawab dan penuh dedikasi"
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Love Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            {/* <Heart className="h-12 w-12 mx-auto mb-6 text-blue-200" /> */}
            <p className="text-xl md:text-2xl font-serif italic mb-4">
              "Cinta sejati adalah ketika dua hati bersatu dalam satu tujuan,
              menuju ridha Allah SWT"
            </p>
            <div className="flex items-center justify-center space-x-4 mt-6">
              <div className="w-12 h-0.5 bg-blue-300"></div>
              {/* <Heart className="h-6 w-6 text-blue-200" /> */}
              <div className="w-12 h-0.5 bg-blue-300"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrideGroom;
