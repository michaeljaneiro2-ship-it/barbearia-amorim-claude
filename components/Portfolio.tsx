
import React from 'react';
import { Instagram } from 'lucide-react';
import { PORTFOLIO } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4 uppercase tracking-tighter">
              Vê o Nosso <span className="text-gold">Trabalho</span>
            </h2>
            <p className="text-dark/60 text-lg">Qualidade e estilo em cada detalhe</p>
          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {PORTFOLIO.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-xl group cursor-pointer break-inside-avoid shadow-lg"
            >
              <img
                src={item.imageUrl}
                alt={item.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity">
                {/* Text removed as requested */}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <a
            href="https://instagram.com/barbearia_amorim__"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-dark hover:text-gold transition-colors font-bold text-lg uppercase group"
          >
            <Instagram className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            Segue-nos no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
