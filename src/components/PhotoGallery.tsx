'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import FloatingFlowers from './FloatingFlowers';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const photos = [
    {
      src: '/1.webp',
      alt: 'Wedding Photo 1',
      category: 'Engagement'
    },
    {
      src: '/2.webp',
      alt: 'Wedding Photo 2',
      category: 'Pre-wedding'
    },
    {
      src: '/3.webp',
      alt: 'Wedding Photo 3',
      category: 'Engagement'
    },
    {
      src: '/5.webp',
      alt: 'Wedding Photo 4',
      category: 'Pre-wedding'
    },
    {
      src: '/4.webp',
      alt: 'Wedding Photo 5',
      category: 'Engagement'
    },
    {
      src: '/6.webp',
      alt: 'Wedding Photo 6',
      category: 'Pre-wedding'
    },
    {
      src: '/7.webp',
      alt: 'Wedding Photo 7',
      category: 'Engagement'
    },
    {
      src: '/8.webp',
      alt: 'Wedding Photo 8',
      category: 'Pre-wedding'
    },
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % photos.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? photos.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-blue-800/70 to-blue-600/70 relative overflow-hidden">
      {/* Floating Flowers */}
      {/* <FloatingFlowers density="medium" colors={['text-pink-300/30', 'text-purple-300/25', 'text-blue-300/20', 'text-white/15']} /> */}

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Heart className="h-12 w-12 text-pink-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Our Journey Together
            </span>
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            A glimpse into our love story through beautiful moments we've shared
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
              onClick={() => openModal(index)}
            >
              <div className="aspect-square relative">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">{photo.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh] w-full h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={photos[selectedImage].src}
                    alt={photos[selectedImage].alt}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
                >
                  <X className="h-6 w-6" />
                </button>

                {/* Navigation buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Image info */}
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-medium">{photos[selectedImage].category}</p>
                  <p className="text-sm text-white/80">
                    {selectedImage + 1} of {photos.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Share Your Memories
            </h3>
            <p className="text-blue-200 mb-6">
              We'd love to see your photos from our special day!
              Tag us on social media or share them with us directly.
            </p>
            <div className="flex justify-center space-x-4">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                #LufiChandraWedding
              </span>
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                #ForeverTogether
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhotoGallery;
