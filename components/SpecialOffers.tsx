import React from 'react';
import { motion } from 'framer-motion';
import { SPECIAL_OFFERS, CONTACT_INFO } from '../constants';
import { Gift, Sparkles } from 'lucide-react';

export const SpecialOffers: React.FC = () => {
  return (
    <section id="offers" className="py-24 relative z-10 bg-slate-900/50">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px]" />
         <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 px-4 py-1 rounded-full text-sm font-bold mb-4 border border-red-500/30 animate-pulse">
                <Sparkles className="w-4 h-4" /> عروض الجمعة البيضاء
            </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            عروض <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">الصحاب</span>
          </h2>
          <p className="text-xl text-gray-300">ذاكروا سوا.. ووفروا سوا!</p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {SPECIAL_OFFERS.map((offer, idx) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative bg-slate-800/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${offer.color}`} />
              
              <div className="w-16 h-16 mx-auto bg-slate-700/50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <offer.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">{offer.title}</h3>
              <p className="text-purple-300 font-medium mb-6">{offer.subtitle}</p>

              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="text-lg text-gray-500 line-through decoration-red-500">{offer.originalPrice}ج</span>
                <span className="text-5xl font-black text-white">{offer.price}<span className="text-xl font-normal text-gray-400">ج</span></span>
              </div>

              <ul className="space-y-3 mb-8 text-right">
                {offer.features.map((feat, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-center gap-2 justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> {feat}
                    </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=أريد حجز ${offer.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r ${offer.color} opacity-90 hover:opacity-100 shadow-lg transition-all`}
              >
                لمّ شلّتك واحجز
              </a>
            </motion.div>
          ))}
        </div>

        {/* Surprise Offer Banner */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden border border-purple-500/30 shadow-[0_0_40px_rgba(147,51,234,0.3)]"
        >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-pink-500 rounded-full blur-[80px] opacity-50" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500 rounded-full blur-[80px] opacity-50" />
            
            <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-yellow-300 font-bold mb-4 border border-yellow-500/30">
                    <Gift className="w-5 h-5 animate-bounce" /> مفاجأة الشهر
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    عايز شهر زيادة <span className="text-yellow-400">مجاناً؟</span>
                </h3>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                    لو كل واحد دفع <span className="font-bold text-white bg-purple-600 px-2 rounded">199ج</span> بس زيادة على الاشتراك، هتاخدوا شهر إضافي هدية مننا!
                </p>
                <a 
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=أريد تفاصيل عرض الـ 199 جنيه`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-purple-900 px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition-transform"
                >
                    استفيد بالعرض
                </a>
            </div>
        </motion.div>

      </div>
    </section>
  );
};