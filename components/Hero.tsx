import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Star } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Center Content */}
      <div className="text-center px-4 sm:px-6 lg:px-8 z-20 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="text-yellow-400 w-5 h-5 fill-yellow-400 animate-pulse" />
            <span className="text-purple-300 tracking-widest text-sm font-semibold uppercase">
              Falak Workspace
            </span>
            <Star className="text-yellow-400 w-5 h-5 fill-yellow-400 animate-pulse" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="block text-white mb-2">فلك</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-[length:200%_auto] animate-gradient">
              ورك سبيس
            </span>
          </h1>

          <p className="mt-4 text-xl md:text-2xl text-gray-300 mb-10 font-light max-w-2xl mx-auto">
            مساحتك للإبداع... <span className="text-yellow-300 font-normal">بين النجوم</span>
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden rounded-full px-8 py-4 bg-white text-slate-900 font-bold text-lg shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all hover:shadow-[0_0_35px_rgba(168,85,247,0.6)]"
            >
              <span className="relative z-10">احجز مدارك الآن</span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Planet/Glow */}
      <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[80px] pointer-events-none" />

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#about" className="text-gray-400 hover:text-white transition-colors">
          <ChevronDown className="w-8 h-8" />
        </a>
      </motion.div>
    </section>
  );
};