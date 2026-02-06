
import React from 'react';
import { Star, Users, Scissors } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="relative text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-8 leading-tight uppercase">
            Mais Que Um Corte.<br />
            <span className="text-gold">Uma Conversa Entre Amigos.</span>
          </h2>
          
          <p className="text-dark/80 text-lg mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0">
            Na Barbearia Amorim, não cortamos apenas cabelo - criamos laços. Desde 2018, somos o ponto de encontro dos homens de Barcelos que procuram qualidade, preços justos e um sítio onde possam estar à vontade. Aqui, és tratado como família.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center md:justify-items-start">
            <div className="flex flex-col items-center md:items-start gap-2 group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Star className="w-6 h-6 text-gold fill-current" />
              </div>
              <span className="font-bold text-dark text-xl">4,7★ Google</span>
            </div>
            <div className="flex flex-col items-center md:items-start gap-2 group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-gold" />
              </div>
              <span className="font-bold text-dark text-xl">150+ Clientes</span>
            </div>
            <div className="flex flex-col items-center md:items-start gap-2 group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Scissors className="w-6 h-6 text-gold" />
              </div>
              <span className="font-bold text-dark text-xl">3 Barbeiros</span>
            </div>
          </div>
        </div>

        {/* Video Content - Optimized */}
        <div className="relative group">
          <div className="absolute -inset-4 border-2 border-gold rounded-2xl transform group-hover:rotate-2 transition-transform duration-500"></div>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
width="800"
  height="500"
            className="relative rounded-xl w-full h-[500px] object-cover shadow-2xl z-10"
            poster="https://res.cloudinary.com/dp1vz8hho/image/upload/c_scale,q_auto:good,f_auto,w_800/v1769709336/amorim-espac%CC%A7o_1_1_kj1dwh.png"
          >
            <source 
              src="https://res.cloudinary.com/dp1vz8hho/video/upload/q_auto:good,vc_auto/v1769710044/Corte_de_cabelo_a_partir_de_9_euros_eu5a60.mp4" 
              type="video/mp4" 
            />
            O seu navegador não suporta a visualização de vídeos.
          </video>
        </div>
      </div>
    </section>
  );
};

export default About;
