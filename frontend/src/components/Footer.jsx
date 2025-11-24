import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-zinc-800 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-white font-bold text-xl mb-1">ImSynioxR</p>
            <p className="text-gray-400 text-sm">Full Stack Developer</p>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>© {currentYear} ImSynioxR.</span>
            <span>Tüm hakları saklıdır.</span>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="text-red-500" size={16} fill="currentColor" />
            <span>in Türkiye</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
