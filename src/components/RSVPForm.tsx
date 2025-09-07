'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Users, MapPin } from 'lucide-react';
import FloatingFlowers from './FloatingFlowers';

interface FormData {
  name: string;
  address: string;
  guests: number;
}

const RSVPForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    address: '',
    guests: 1,
  });


  const [copied, setCopied] = useState(false);

  const handleCopyRekening = async () => {
    try {
      await navigator.clipboard.writeText('8610180982');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // ignore
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const baseUrl = 'https://wa.me/6281228841489';
    const text = `Halo, saya ${formData.name}.${formData.address ? ` Alamat: ${formData.address}.` : ''} Jumlah tamu: ${formData.guests}. Saya ingin konfirmasi kehadiran RSVP.`;
    const url = `${baseUrl}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };


  return (
    <section id="rsvp" className="py-20 bg-gradient-to-br from-blue-800/70 to-blue-600/70 relative overflow-hidden">
      {/* Floating Flowers */}
      <FloatingFlowers density="light" colors={['text-pink-300/25', 'text-purple-300/20', 'text-blue-300/15', 'text-white/12']} />

      <div className="max-w-2xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* <Heart className="h-12 w-12 text-pink-400 mx-auto mb-6" /> */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              RSVP
            </span>
          </h2>
          <p className="text-blue-200 text-lg">
            Mohon isi singkat nama, alamat (opsional), dan jumlah tamu. Klik Send RSVP untuk konfirmasi via WhatsApp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                Nama Lengkap *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-colors duration-200 text-white placeholder-blue-200"
                  placeholder="Tulis nama lengkap"
                />
              </div>
            </div>

            {/* Address (optional) */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-white mb-2">
                Alamat (Opsional)
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-colors duration-200 text-white placeholder-blue-200"
                  placeholder="Tulis alamat (opsional)"
                />
              </div>
            </div>

            {/* Number of Guests */}
            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-white mb-2">
                Jumlah Tamu (termasuk Anda)
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-colors duration-200 text-white"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num} className="text-black">
                      {num} {num === 1 ? 'Tamu' : 'Tamu'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={!formData.name}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-brand text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Send className="h-5 w-5" />
              <span>Send RSVP (WhatsApp)</span>
            </motion.button>
          </form>

          {/* Gift */}
          <div className="mt-6 space-y-4 text-blue-100">
            <div className="bg-white/10 border border-white/20 rounded-lg p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm">Gift (Transfer)</p>
                  <p className="font-semibold text-white">BCA 8610180982</p>
                  <p className="text-sm">a.n. Aprilia Evita W</p>
                </div>
                <button
                  type="button"
                  onClick={handleCopyRekening}
                  className="px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm"
                >
                  {copied ? 'Tersalin' : 'Salin' }
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVPForm;
