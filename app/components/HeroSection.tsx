'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  const scrollText = "BITCOIN IS FREEDOM - IN BITCOIN WE TRUST - BITCOIN IS FREEDOM - IN BITCOIN WE TRUST - ";

  return (
    <div className="w-full bg-white">
      {/* Animated Banner */}
      <div className="w-full overflow-hidden bg-white border-b border-gray-200">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="whitespace-nowrap"
        >
          <p className="text-4xl font-bold text-orange-500 tracking-wider py-4">
            {scrollText}
          </p>
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-between bg-white px-6 py-20 md:py-32">
        {/* Main Hero Text */}
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-black mb-8 leading-tight">
              Bitcoin Streetwear
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-12">
              Philosophy over profit
            </p>
          </motion.div>
        </div>

        {/* Value Props Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {[
            { title: 'Quality', desc: 'Craftsmanship' },
            { title: 'Made', desc: 'In Europe' },
            { title: 'Printed', desc: 'In Germany' },
            { title: 'Bitcoin', desc: 'Save 5%' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="border-l-2 border-orange-500 pl-6 py-4 hover:bg-gray-50 transition"
            >
              <p className="text-orange-500 font-bold text-lg">{item.title}</p>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex gap-6 justify-center md:justify-start"
        >
          <button className="px-12 py-4 bg-orange-500 text-white font-bold text-lg hover:bg-orange-600 transition">
            SHOP NOW
          </button>
          <button className="px-12 py-4 border-2 border-black text-black font-bold text-lg hover:bg-black hover:text-white transition">
            LEARN MORE
          </button>
        </motion.div>
      </section>
    </div>
  );
}
