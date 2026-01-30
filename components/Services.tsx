
import React from 'react';
import { Calendar } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4 uppercase tracking-tighter">
            Os Nossos <span className="text-gold">Serviços</span>
          </h2>
          <p className="text-dark/60 text-lg">Preços transparentes, qualidade garantida</p>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="mb-6 transform group-hover:rotate-12 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-dark mb-2 uppercase">{service.name}</h3>
              <p className="text-dark/60 mb-6 text-sm">{service.description}</p>
              <span className="text-3xl font-black text-gold mt-auto">{service.price}</span>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <a
            href="https://buk.pt"
            className="bg-dark hover:bg-dark/90 text-gold px-12 py-5 rounded-full font-bold text-xl uppercase shadow-xl transition-all hover:scale-105 flex items-center gap-3"
          >
            <Calendar className="w-6 h-6" />
            Marcar no Buk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
