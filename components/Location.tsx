
import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const Location: React.FC = () => {
  const address = "R. das Calçadas 559, 4750-123, Arcozelo, Barcelos";
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17309.82212854321!2d-8.623902356034229!3d41.53393320426448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2453b397cdddcd%3A0xbe8ed02d674aed4!2sBarbearia%20Amorim!5e0!3m2!1sen!2spt!4v1769710760762!5m2!1sen!2spt";

  return (
    <section id="localizacao" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Text content */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 uppercase tracking-tighter">
              Onde <span className="text-gold">Estamos</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark uppercase mb-1">Localização Central</h3>
                  <p className="text-dark/60 leading-relaxed">
                    Estamos situados em Arcozelo, mesmo junto à passagem de nível. Fácil acesso e excelente localização para quem procura qualidade em Barcelos.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center flex-shrink-0">
                  <Navigation className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark uppercase mb-1">Morada</h3>
                  <p className="text-dark/60">{address}</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a 
                href="https://maps.app.goo.gl/m3gwpvJD2kqPHb1K8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-dark px-8 py-4 rounded-xl font-bold uppercase transition-all hover:scale-105 shadow-lg"
              >
                Abrir no Google Maps
              </a>
            </div>
          </div>

          {/* Map Container */}
          <div className="w-full md:w-2/3 h-[450px] relative rounded-3xl overflow-hidden shadow-2xl border-4 border-cream">
            <iframe
              src={googleMapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Barbearia Amorim"
              className="grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
