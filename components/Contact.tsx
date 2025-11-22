import React from 'react';
import { MapPin, Smartphone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/60 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6 text-white">تواصل مع <span className="text-purple-400">القيادة</span></h2>
              <p className="text-gray-400 mb-8">
                نحن في انتظارك لتبدأ رحلتك الإبداعية. فريقنا جاهز لاستقبالك والرد على استفساراتك.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">الموقع</h4>
                    <a href={CONTACT_INFO.locationLink} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">
                      {CONTACT_INFO.location}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 mt-1">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">الهاتف / واتساب</h4>
                    <div className="flex flex-col gap-1">
                        <a href={`tel:${CONTACT_INFO.phone1}`} className="text-gray-400 hover:text-blue-300 transition-colors text-sm font-mono">
                        {CONTACT_INFO.phone1}
                        </a>
                        <a href={`tel:${CONTACT_INFO.phone2}`} className="text-gray-400 hover:text-blue-300 transition-colors text-sm font-mono">
                        {CONTACT_INFO.phone2}
                        </a>
                    </div>
                  </div>
                </div>
              </div>

              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 bg-green-600 hover:bg-green-500 text-white py-3 px-6 rounded-xl font-bold text-center shadow-lg shadow-green-900/20 transition-all flex items-center justify-center gap-2"
              >
                 تحدث معنا واتساب
              </a>
            </div>

            {/* Map */}
            <div className="relative h-64 md:h-auto bg-slate-800">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d54695.30826972113!2d31.596329224882085!3d31.049692761217653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDekernes%20Tahrir%20Tower!5e0!3m2!1sen!2seg!4v1709900000000!5m2!1sen!2seg" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full opacity-80 hover:opacity-100 transition-opacity"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-slate-900/80 to-transparent md:bg-gradient-to-l"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};