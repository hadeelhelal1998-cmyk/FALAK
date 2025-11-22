import React from 'react';
import { motion } from 'framer-motion';
import { COURSES_DATA, CONTACT_INFO } from '../constants';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">أكاديمية <span className="text-purple-400">فلك</span></h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            مش بس مكان للشغل، فلك مكان تتعلم فيه وتطور مهاراتك ومهارات أطفالك
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {COURSES_DATA.map((course, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="bg-gradient-to-b from-slate-800/80 to-slate-900/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-blue-400/50 transition-all duration-300 group text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <course.icon className="w-8 h-8 text-blue-400" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">{course.title}</h3>
              <p className="text-gray-400 text-sm relative z-10">
                {course.desc}
              </p>
              
              <a
                 href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=أريد الاستفسار عن: ${course.title}`}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="mt-4 inline-block text-blue-400 hover:text-blue-300 text-sm font-semibold"
              >
                احجز مكانك &larr;
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};