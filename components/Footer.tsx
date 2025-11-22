import React from 'react';
import { Heart, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-slate-950 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <img 
              src="https://scontent.fcai19-12.fna.fbcdn.net/v/t39.30808-6/481162870_122101282346774813_97941073544603040_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=YfkjiMosCLYQ7kNvwGRsOM8&_nc_oc=AdkRZxZ5PpX2OldvcFxE15WaEnKsRTus-8zIFWJa0zrc7jEKA3mHXTi76zo4n2TcQEM&_nc_zt=23&_nc_ht=scontent.fcai19-12.fna&_nc_gid=2VueKLu51OjQLX2wQ0mhOg&oh=00_AfhSthrl04d2_sSjXWPksfKC_h2QzLQ9IYyuWWVMhgDyng&oe=69275816" 
              alt="Falak Workspace Logo" 
              className="w-10 h-10 rounded-full object-cover shadow-[0_0_10px_rgba(147,51,234,0.3)]"
          />
          <span className="text-2xl font-bold text-white">فلك</span>
        </div>
        
        <p className="text-gray-500 text-sm mb-6">
          مساحتك للإبداع... بين النجوم
        </p>

        <div className="flex justify-center gap-6 text-sm text-gray-600 mb-6">
          <a href="#hero" className="hover:text-purple-400 transition-colors">الرئيسية</a>
          <a href="#pricing" className="hover:text-purple-400 transition-colors">الأسعار</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">اتصل بنا</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://www.facebook.com/falak.workspace" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-blue-600 transition-all transform hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a 
            href="https://www.instagram.com/falakworkspace/#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition-all transform hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href="https://www.tiktok.com/@%40falak.workspace" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text