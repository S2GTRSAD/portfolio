import React from 'react';
import { ChevronDown } from 'lucide-react';
import { heroData } from '../data/mock';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-black overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-800 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Main heading */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight">
          {heroData.name}
        </h1>
        
        {/* Subtitle */}
        <div className="mb-8">
          <p className="text-2xl sm:text-3xl md:text-4xl text-red-500 font-semibold mb-2">
            {heroData.title}
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400">
            {heroData.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          {heroData.description}
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToProjects}
          className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105 inline-flex items-center gap-2"
        >
          Projelerimi İncele
          <ChevronDown className="animate-bounce" size={20} />
        </button>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-red-500 transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
