import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-red-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold text-white hover:text-red-500 transition-colors"
          >
            ImSynioxR
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-red-500 transition-colors"
            >
              Projeler
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-red-500 transition-colors"
            >
              Hakkımda
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              İletişim
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-red-500 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-red-900/20">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left text-gray-300 hover:text-red-500 transition-colors py-2"
            >
              Projeler
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-300 hover:text-red-500 transition-colors py-2"
            >
              Hakkımda
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              İletişim
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
