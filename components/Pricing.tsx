import React from 'react';
import { Check, Rocket } from 'lucide-react';
import { PRICING_PLANS, CONTACT_INFO } from '../constants';
import { motion } from 'framer-motion';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">باقات <span className="text-purple-400">رواد الفضاء</span></h2>
          <p className="text-gray-400">اختر المدار الذي يناسب رحلتك العملية</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col backdrop-blur-md border transition-all duration-300 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)] max-w-sm ${
                plan.isFeatured
                  ? 'bg-gradient-to-b from-purple-900/40 to-slate-900/60 border-purple-500 shadow-[0_0_30px_rgba(147,51,234,0.2)] transform lg:-translate-y-4'
                  : 'bg-slate-900/40 border-white/10 hover:border-purple-500/50'
              }`}
            >
              {plan.isFeatured && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1 z-20">
                  <Rocket className="w-3 h-3" /> الأكثر طلباً
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-200 mb-2">{plan.title}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-sm text-gray-400">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 min-w-[20px]">
                        <Check className="w-5 h-5 text-green-400" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=أريد حجز باقة: ${plan.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-200 ${
                  plan.isFeatured
                    ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-900/50'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                احجز الآن
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};