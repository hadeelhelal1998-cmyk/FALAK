import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#hero' },
    { name: 'عن فلك', href: '#about' },
    { name: 'الكورسات', href: '#courses' },
    { name: 'العروض', href: '#offers' },
    { name: 'الأسعار', href: '#pricing' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img 
              src="https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/481162870_122101282346774813_97941073544603040_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=YfkjiMosCLYQ7kNvwGRsOM8&_nc_oc=AdkRZxZ5PpX2OldvcFxE15WaEnKsRTus-8zIFWJa0zrc7jEKA3mHXTi76zo4n2TcQEM&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=2VueKLu51OjQLX2wQ0mhOg&oh=00_AfhSthrl04d2_sSjXWPksfKC_h2QzLQ9IYyuWWVMhgDyng&oe=69275816" 
              alt="Falak Workspace Logo" 
              className="w-12 h-12 rounded-full object-cover shadow-[0_0_15px_rgba(147,51,234,0.5)] border border-purple-500/30"
            />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              فلك
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6 space-x-reverse">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(147,51,234,0.4)] transition-all hover:scale-105"
              >
                احجز الآن
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-white/10 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium text-center"
              >
                {link.name}
              </a>
            ))}
            <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                onClick={() => setIsOpen(false)}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-purple-600 text-white px-3 py-3 rounded-md text-base font-bold mt-4"
              >
                احجز الآن
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};