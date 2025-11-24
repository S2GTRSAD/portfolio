import React, { useState } from 'react';
import { MessageSquare, Mail, Github, MapPin, Copy, Check } from 'lucide-react';
import { contactData } from '../data/mock';

const Contact = () => {
  const [copied, setCopied] = useState('');

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-900 to-black">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            İletişim
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400">
            Projeleriniz için benimle iletişime geçin
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Discord */}
          <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 hover:border-red-600 transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-red-900/30 rounded-lg">
                <MessageSquare className="text-red-500" size={28} />
              </div>
              <button
                onClick={() => copyToClipboard(contactData.discord, 'discord')}
                className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
                title="Kopyala"
              >
                {copied === 'discord' ? (
                  <Check className="text-green-500" size={20} />
                ) : (
                  <Copy className="text-gray-400" size={20} />
                )}
              </button>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Discord</h3>
            <p className="text-red-400 font-mono">{contactData.discord}</p>
          </div>

          {/* Email */}
          <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 hover:border-red-600 transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-red-900/30 rounded-lg">
                <Mail className="text-red-500" size={28} />
              </div>
              <button
                onClick={() => copyToClipboard(contactData.email, 'email')}
                className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
                title="Kopyala"
              >
                {copied === 'email' ? (
                  <Check className="text-green-500" size={20} />
                ) : (
                  <Copy className="text-gray-400" size={20} />
                )}
              </button>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <a
              href={`mailto:${contactData.email}`}
              className="text-red-400 hover:text-red-300 transition-colors font-mono"
            >
              {contactData.email}
            </a>
          </div>

          {/* GitHub */}
          <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 hover:border-red-600 transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-red-900/30 rounded-lg">
                <Github className="text-red-500" size={28} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">GitHub</h3>
            <a
              href={`https://github.com/${contactData.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 transition-colors font-mono"
            >
              @{contactData.github}
            </a>
          </div>

          {/* Location */}
          <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 hover:border-red-600 transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-red-900/30 rounded-lg">
                <MapPin className="text-red-500" size={28} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Konum</h3>
            <p className="text-red-400">{contactData.location}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6 text-lg">
            Yeni projeler için her zaman açığım!
          </p>
          <a
            href={`mailto:${contactData.email}`}
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105"
          >
            Bir Proje Başlatın
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
