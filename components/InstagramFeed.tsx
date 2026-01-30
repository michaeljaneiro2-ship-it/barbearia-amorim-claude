
import React from 'react';
import { Instagram, Heart } from 'lucide-react';
import { INSTAGRAM_PHOTOS } from '../constants';

const InstagramFeed: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4 uppercase">Segue-nos no <span className="text-gold">Instagram</span></h2>
          <a
            href="https://instagram.com/barbearia_amorim__"
            className="text-gold text-2xl font-bold hover:underline"
          >
            @barbearia_amorim__
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {INSTAGRAM_PHOTOS.map((url, idx) => (
            <a
              key={idx}
              href="https://instagram.com/barbearia_amorim__"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden group rounded-lg"
            >
              <img
                src={url}
                alt={`Trabalho da Barbearia Amorim - Post Instagram ${idx + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-6 h-6 fill-current" />
                  <span className="font-bold">{(Math.random() * 100 + 50).toFixed(0)}</span>
                </div>
                <Instagram className="w-6 h-6" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
            <a
                href="https://instagram.com/barbearia_amorim__"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-dark text-white px-8 py-3 rounded-full font-bold uppercase hover:bg-gold hover:text-dark transition-all shadow-md"
            >
                Ver Mais no Instagram
            </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
