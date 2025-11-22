import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '../constants';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">لماذا <span className="text-purple-400">فلك</span>؟</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            في فلك، لا نقدم مجرد مكتب، بل نخلق لك عالماً خاصاً يساعدك على التحليق بأفكارك بعيداً عن الضوضاء.
            بيئة هادئة، إنترنت سريع، وراحة لا مثيل لها.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="bg-slate-900/50 border border-white/5 backdrop-blur-sm p-6 rounded-2xl hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-900/50 transition-colors">
                <feature.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};