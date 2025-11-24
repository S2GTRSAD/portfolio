import React from 'react';
import { Code2, Palette, Zap, Users } from 'lucide-react';
import { aboutData } from '../data/mock';

const About = () => {
  const features = [
    {
      icon: <Code2 size={32} />,
      title: "Clean Code",
      description: "Temiz, okunabilir ve maintainable kod yazarım"
    },
    {
      icon: <Palette size={32} />,
      title: "Modern Design",
      description: "Kullanıcı deneyimini ön planda tutan tasarımlar"
    },
    {
      icon: <Zap size={32} />,
      title: "Performans",
      description: "Hızlı ve optimize edilmiş uygulamalar"
    },
    {
      icon: <Users size={32} />,
      title: "İşbirliği",
      description: "Ekip çalışmasına yatkın ve iletişim odaklı"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Hakkımda
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              {aboutData.greeting}
            </h3>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {aboutData.bio}
            </p>

            {/* Skills */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-white mb-4">Teknolojiler</h4>
              <div className="flex flex-wrap gap-3">
                {aboutData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-zinc-900 text-red-400 rounded-lg border border-red-900/30 hover:border-red-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-red-600 transition-all transform hover:scale-105"
              >
                <div className="text-red-500 mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
