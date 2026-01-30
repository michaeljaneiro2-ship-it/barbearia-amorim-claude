
import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="testemunhos" className="py-24 bg-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
            O Que Dizem os <span className="text-gold">Nossos Clientes</span>
          </h2>
          <div className="flex justify-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-6 h-6 text-gold fill-current" />
            ))}
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto px-12">
          {/* Testimonial Card */}
          <div className="min-h-[250px] flex flex-col justify-center items-center text-center">
            <p className="text-xl md:text-2xl italic mb-8 leading-relaxed text-white/90">
              "{TESTIMONIALS[currentIndex].text}"
            </p>
            <div>
              <p className="font-bold text-gold text-lg uppercase tracking-wider">
                {TESTIMONIALS[currentIndex].name}
              </p>
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 hover:text-gold transition-colors"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:text-gold transition-colors"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${currentIndex === idx ? 'bg-gold w-8' : 'bg-white/20'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
