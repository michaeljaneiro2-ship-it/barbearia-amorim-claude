
import React from 'react';
import { Phone, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  const BUK_LINK = "https://buk.pt/barbearia-amorim?utm_source=website&utm_medium=website&utm_content=website";
  const PHONE_NUMBER = "+351912735577";

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with subtle overlay - optimized for performance */}
      <div className="absolute inset-0 z-0">
        <img
src="https://res.cloudinary.com/dp1vz8hho/image/upload/c_scale,w_1920,h_1080,c_fill,g_auto,q_auto:best,f_auto,fl_progressive/v1769709336/amorim-espac%CC%A7o_1_1_kj1dwh.png"
          alt="Interior da Barbearia Amorim em Arcozelo, Barcelos - Ambiente acolhedor e profissional"
 width="1920"
  height="1080"
          className="w-full h-full object-cover brightness-[0.5]"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-dark/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight uppercase animate-fade-in">
          A Barbearia de Barcelos Onde <span className="text-gold">Toda a Gente</span> se Sente em Casa
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
          Mais de 4,7★ no Google com 150+ clientes satisfeitos. Cortes de qualidade, preços justos, ambiente familiar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={BUK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold/90 text-dark px-10 py-4 rounded-lg font-bold text-lg shadow-lg transform transition-all hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Marcar Corte
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="border-2 border-gold text-gold hover:bg-gold hover:text-dark px-10 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Ligar Agora
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gold rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
