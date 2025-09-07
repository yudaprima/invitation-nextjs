'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Phone, Mail, Car } from 'lucide-react';

const WeddingDetails = () => {
  const events = [
    {
      title: 'Resepsi Pernikahan',
      date: '21 September 2025',
      time: '11:00 WIB - 13:00 WIB',
      location: 'Baliantoro Villa',
      address: 'Jl. Padma No.4, Karang Moko, Sariharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581',
      description: 'Perayaan dan syukuran bersama keluarga dan sahabat',
      icon: '🎉',
      mapUrl: 'https://www.google.com/maps/place/Baliantoro+Villa/@-7.7373904,110.371037,17z/data=!3m1!4b1!4m9!3m8!1s0x2e7a58e680d8784b:0xa44073f65617abd4!5m2!4m1!1i2!8m2!3d-7.7373904!4d110.371037!16s%2Fg%2F11c7p6v_2m?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D'
    },
  ];

  const contactInfo = [
    {
      name: 'Chandra (Groom)',
      phone: '+62 812-3456-7890',
      role: 'Informasi acara dan undangan',
    },
    {
      name: 'Lufi (Bride)',
      phone: '+62 813-4567-8901',
      role: 'Konfirmasi kehadiran',
    },
  ];


  return (
    <section id="details" className="py-20 bg-gradient-to-br from-blue-800/70 to-blue-600/70 relative overflow-hidden">
      {/* Floating Flowers */}
      {/* <FloatingFlowers density="medium" colors={['text-pink-300/25', 'text-purple-300/20', 'text-blue-300/15', 'text-white/12']} /> */}

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/weding.webp"
          alt="Wedding Details Background"
          className="w-full h-full object-cover opacity-25"
        />
        {/* Soft blue overlay + vignette to match Hero */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-blue-800/40 to-blue-950/60"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">

              Wedding Details
            </span>
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            We would be honored to have you join us on our special day.
            Here are all the details you need to know.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 container mx-auto gap-8 mb-16">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-white/20 hover:bg-white/15"
            >
              <div className="text-center mb-6">
                <div className="text-3xl mb-4">{event.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-blue-200">{event.description}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-blue-500" />
                  <span className="text-blue-100">{event.date}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <span className="text-blue-100">{event.time}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <p className="text-white font-semibold">{event.location}</p>
                    <p className="text-blue-200 text-sm">{event.address}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex space-x-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                  onClick={() => {
                    window.open(event.mapUrl || `https://maps.google.com/?q=${encodeURIComponent(event.address)}`, '_blank');
                  }}
                >
                  <MapPin className="h-4 w-4" />
                  <span>View Map</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                  onClick={() => {
                    // Google Calendar link for September 21, 2025
                    const calendarUrl = 'https://calendar.google.com/calendar/u/0/r/eventedit?text=Lufi+%26+Chandra+Wedding&details=Lufi+%26+Chandra+invite+you+to+come+to+our+wedding+celebration.&location=Baliantoro+Villa,+Jl.+Padma+No.4,+Karang+Moko,+Sariharjo,+Kec.+Ngaglik,+Kabupaten+Sleman,+Daerah+Istimewa+Yogyakarta+55581&dates=20250921T020000Z/20250921T060000Z&ctz=Asia/Jakarta&pli=1';
                    window.open(calendarUrl, '_blank');
                  }}
                >
                  <Calendar className="h-4 w-4" />
                  <span>Add to Calendar</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            Contact Information
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((contact) => (
              <div key={contact.name} className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {contact.name}
                </h4>
                <p className="text-blue-600 text-sm mb-3">{contact.role}</p>
                <div className="flex justify-center space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={`tel:${contact.phone}`}
                    className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-3 rounded-full transition-colors duration-200"
                  >
                    <Phone className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={`https://wa.me/${contact.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-100 hover:bg-green-200 text-green-700 p-3 rounded-full transition-colors duration-200"
                  >
                    <Mail className="h-5 w-5" />
                  </motion.a>
                </div>
              </div>
            ))}
          </div>
        </motion.div> */}

        {/* Transportation Info */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 bg-blue-50 rounded-2xl p-8"
        >
          <div className="text-center">
            <Car className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              Transportation & Parking
            </h3>
            <p className="text-blue-700 mb-4">
              Free parking is available at both venues.
              We also recommend using ride-sharing services for convenience.
            </p>
            <p className="text-blue-600 text-sm">
              Shuttle service will be provided between ceremony and reception venues.
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default WeddingDetails;
